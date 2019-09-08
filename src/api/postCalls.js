const HOST = "http://localhost:3000/";
export const GAMES = HOST + "games";
const USERS = HOST + "users/";
export const userFind = name => USERS + name;
const USERGAMES = HOST + "user_games";

export const postUserGame = config => fetch(USERGAMES, config);
