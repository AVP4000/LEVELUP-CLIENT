import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const createGame = (game) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/gametypes`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
export { getGames, createGame, getGameTypes };

// eslint-disable-next-line import/prefer-default-export
