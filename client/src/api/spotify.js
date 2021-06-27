import { token } from "../utils/tokens";

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
const getProfileData = () => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://api.spotify.com/v1/me", { headers });
    const data = await response.json();
    if (data.error) {
      return reject({ error: data.error });
    }
    return resolve(data);
  }).catch((err) => {
    console.log(err);
  });
};

const getCurrentSong = () => {
  // THIS NEEDS ERROR HANDLING FOR WHEN NOT LISTENING TO A SONG
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      { headers }
    );

    if (response.status === 204) {
      return reject(null);
    }

    const data = await response.json();
    if (data.error) {
      return reject({ error: data.error });
    }
    return resolve(data);
  }).catch((err) => {
    console.log(err);
  });
};

//Term ENUMS
//long_term -> all time
//medium_term -> 6 months
//short_term -> 4 weeks
export const getTopListening = (term, type, limit) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://api.spotify.com/v1/me/top/${type}?time_range=${term}&limit=${limit}`,
      { headers }
    );
    const data = await response.json();
    if (data.error) {
      return reject({ error: data.error });
    }
    return resolve(data);
  }).catch((err) => {
    console.log(err);
  });
};

export const loadMoreTopListening = async (url) => {
  try {
    console.log(url);
    const response = await fetch(`${url}`, { headers });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getFollowingCount = () => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/following?type=artist",
      {
        headers,
      }
    );
    const data = await response.json();
    if (data.error) {
      return reject({ error: data.error });
    }
    return resolve(data);
  }).catch((err) => {
    console.log(err);
  });
};

export const getUserData = async () => {
  return await Promise.all([
    getProfileData(),
    getCurrentSong(),
    getTopListening("long_term", "tracks", 5),
    getTopListening("long_term", "artists", 5),
    getFollowingCount(),
  ]).then((data) => {
    if (!data) {
      return null;
    }
    return data;
  });
};

export const getArtist = async (artistId) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      { headers }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTrack = async (trackId) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/tracks/${trackId}`,
      { headers }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  window.localStorage.removeItem("access_token_timestamp");
  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("refresh_token");
  window.location.reload();
};
