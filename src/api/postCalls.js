const HOST = "http://localhost:3000/";
export const GAMES = HOST + "games";
const USERGAMES = HOST + "user_games";

export const postUserGame = config => fetch(USERGAMES, config);
