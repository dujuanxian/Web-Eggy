const CONTACT_URL = "https://my-json-server.typicode.com/dujuanxian/contacts-api/css";
const SSR_URL = 'http://localhost:8080';

function getCSSResult(id) {
  return fetch(`${SSR_URL}/${id}`)
    .then(response => response.text())
}

function getCSSGames() {
  return fetch(CONTACT_URL)
    .then(response => response.json());
}

export {
  getCSSGames,
  getCSSResult
}
