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

export const getUserData = () => {
  return getProfileData();
};
