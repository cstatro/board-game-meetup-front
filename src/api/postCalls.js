import { deleteConfig } from "./config";

const HOST = "http://localhost:3000/";
export const GAMES = HOST + "games";
const USERS = HOST + "users/";
export const userFind = name => USERS + name;
const USERGAMES = HOST + "user_games";
export const MEETUPS = HOST + "meetups";

export const postUserGame = config => fetch(USERGAMES, config);

export const deleteUserGame = (user_id, game_id) =>
  fetch(`${USERGAMES}/${user_id}/${game_id}`, deleteConfig());
