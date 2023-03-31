const axios = require("axios");
//const { KEY, URL } = process.env;

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "09967d0ad6c9.e15ef269aab8887e54a1";
const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, name, species, gender, image } = response.data;
      res.status(200).json({ id, name, species, gender, image });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
