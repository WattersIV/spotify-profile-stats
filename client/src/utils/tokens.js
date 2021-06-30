const tokenExperation = 3600000; // 1 hrs in milliseconds. This is determined my spotify and cant be made any longer

const setTokenExpiry = () =>
  window.localStorage.setItem("access_token_timestamp", Date.now());

const getTokenExpiry = () =>
  window.localStorage.getItem("access_token_timestamp");

const setLocalRefreshToken = (token) =>
  window.localStorage.setItem("refresh_token", token);

const getLocalRefreshToken = () => window.localStorage.getItem("refresh_token");

const setLocalAccessToken = (token) => {
  setTokenExpiry();
  window.localStorage.setItem("access_token", token);
};

const getLocalAccessToken = () => window.localStorage.getItem("access_token");

const decodeTokens = () => {
  const decodedTokens = {};
  //Matches the encoded strings for access tokens if present in the uri
  const decodeRegex = /([^&;=]+)=?([^&;]*)/g;
  //Returns the uri string starting at the first char after #
  const encodedString = window.location.hash.substring(1);
  const matches = [...encodedString.matchAll(decodeRegex)];
  if (matches.length) {
    decodedTokens[matches[0][1]] = decodeURIComponent(matches[0][2]);
    decodedTokens[matches[1][1]] = decodeURIComponent(matches[1][2]);
  }
  return decodedTokens;
};

const refreshAccessToken = async () => {
  //Calling our server to make the call for a refresh token need refresh_token= val in query
  try {
    let url;
    if (process.env.NODE_ENV !== "production") {
      url = `http://localhost:8080/refresh_token?refresh_token=${getLocalRefreshToken()}`;
    } else {
      url = `https://spotify-profile-stats-server.herokuapp.com/refresh_token?refresh_token=${getLocalRefreshToken()}`;
    }
    const response = await fetch(url);
    const data = await response.json(); //returns obj with only key being access_token
    const { access_token } = data;
    setLocalAccessToken(access_token);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

const retrieveAccessToken = () => {
  //calls for tokens
  const { access_token, refresh_token } = decodeTokens();
  const localAccessToken = getLocalAccessToken();

  //If there is an access token but its expired get a new one and set it in storage
  if (Date.now() - getTokenExpiry() > tokenExperation && localAccessToken) {
    refreshAccessToken();
  }
  //If no local token save new token retrieved
  if (!localAccessToken && access_token) {
    setLocalAccessToken(access_token);
    setLocalRefreshToken(refresh_token);
  }

  //If local access token exists and not expired return it
  return localAccessToken || access_token;
};

export const token = retrieveAccessToken();
