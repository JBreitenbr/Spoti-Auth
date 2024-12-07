const auth_endpoint = "https://accounts.spotify.com/authorize";

const { VITE_CLIENT_ID } = import.meta.env;
const { VITE_REDIRECT_URI } = import.meta.env;
/*const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
];*/
const scopes = "user-read-private user-top-read user-read-currently-playing user-read-recently-played"; // Adjust scopes as needed
/*export const spotify_popup_url =
  `${auth_endpoint}?client_id=${VITE_CLIENT_ID}` +
  `&redirect_uri=${window.location.origin}/Spoti-Auth/redirect&response_type=token` +
  `&scope=${scopes.join("%20")}&show_dialog=true`;*/

export const spotify_popup_url = `https://accounts.spotify.com/authorize?client_id=${VITE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(VITE_REDIRECT_URI)}&scope=${encodeURIComponent(scopes)}`;
  //window.location.href = authUrl;
