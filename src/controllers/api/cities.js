const getCitiesFromJournal = async (req, res) => {
  try {
    const { journalId } = req.params;

    const [cities] = await req.db.query(
      "SELECT * FROM cities WHERE journalId=?",
      [journalId]
    );

    res.json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get cities for journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get cities for journal",
    });
  }
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
