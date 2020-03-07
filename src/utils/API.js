const CONTACT_URL = "https://my-json-server.typicode.com/dujuanxian/contacts-api/css";

function getCSSGames() {
  return fetch(CONTACT_URL)
    .then(response => response.json());
}

export {
  getCSSGames
}
