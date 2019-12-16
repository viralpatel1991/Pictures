const axios = require('axios');
const transformCharacters = require('../../utils/transformCharacters');
const { MARVEL_API_URL, PUBLIC_KEY, PRIVATE_KEY } = process.env;
var md5 = require('md5');

module.exports = (req, res) => {
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    axios.get(`${MARVEL_API_URL}/characters`, {
        params: {
            "apikey": PUBLIC_KEY,
            "ts": timestamp,
            "hash": hash
        }
      }).then((response) => {
            const results = response.data.data.results;
            const repositories = transformCharacters.mapCharacters(results, 100);

            res.status(200).json(repositories);
        })
        .catch(error => res.status(400).json(error));
};
