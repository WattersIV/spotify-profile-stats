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

    console.log(response.status, response.status === 204);
    if (response.status === 204) {
      console.log("IM IN");
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

export const getUserData = async () => {
  return await Promise.all([getProfileData(), getCurrentSong()]).then(
    (data) => {
      console.log(data);
      if (!data) {
        return null;
      }
      return data;
    }
  );
};
