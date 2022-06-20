const getCitiesFromJournal = async (req, res) => {
  try {
    const { journalId } = req.params;

    const [cities] = await req.db.query(
      "SELECT * FROM cities WHERE journalId=?",
      [journalId]
    );

    return res.json({
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

const addCityToJournal = async (req, res) => {
  try {
    const payload = req.body;
    const { journalId } = req.params;

    await req.db.query(
      "INSERT INTO cities (journalId, cityName, temperature, humidity, windSpeed, weatherDescription, countryCode) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        journalId,
        payload.name,
        payload.temperature,
        payload.humidity,
        payload.windSpeed,
        payload.description,
        payload.countryCode,
      ]
    );

    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add city to journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add city to journal",
    });
  }
};

const removeCityFromJournal = async (req, res) => {
  try {
    const { journalId, cityId } = req.params;

    await req.db.query("DELETE FROM cities WHERE journalId=? AND id=?", [
      journalId,
      cityId,
    ]);

    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(
      `[ERROR: Failed to delete city from journal | ${error.message}]`
    );

    return res.status(500).json({
      success: false,
      error: "Failed to delete city from journal",
    });
  }
};

module.exports = {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJournal,
};
