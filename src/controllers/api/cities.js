const getCitiesFromJournal = (req, res) => {
  res.send("getCitiesFromJournal");
};

const addCityToJournal = (req, res) => {
  res.send("addCityToJournal");
};

const removeCityFromJournal = (req, res) => {
  res.send("removeCityFromJournal");
};

module.exports = {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJournal,
};
