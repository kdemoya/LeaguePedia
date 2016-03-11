export default champs = {
  getAllChamps: () => {
    // TODO: Take key from config file.
    fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=KEY')
        .then((result) => {
          var champions = JSON.parse(result._bodyText);
          return champions.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }
};
