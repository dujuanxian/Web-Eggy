const GAMES_URL = "https://my-json-server.typicode.com/dujuanxian/contacts-api/games";
const SSR_URL = 'http://localhost:8080';

function getGames() {
  return fetch(`${GAMES_URL}`)
    .then(response => response.json());
}

function getResultHtml(id) {
  return fetch(`${SSR_URL}/${id}`)
    .then(response => response.text())
}

function getGame(id) {
  return fetch(`${GAMES_URL}/${id}`)
    .then(response => response.json());
}

export {
  getGame,
  getGames,
  getResultHtml
}
