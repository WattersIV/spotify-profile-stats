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
  });
};

const getCurrentSong = () => {
  // THIS NEEDS ERROR HANDLING FOR WHEN NOT LISTENING TO A SONG
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      { headers }
    );
    const data = await response.json();
    if (data.error) {
      return reject({ error: data.error });
    }
    return resolve(data);
  });
};

export const getUserData = async () => {
  return await Promise.all([getProfileData(), getCurrentSong()]).then(
    (data) => data
  );
};
