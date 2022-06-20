const axios = require("axios");

const getWeatherInfo = async (req, res) => {
  try {
    const { city } = req.body;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;

    const { data } = await axios.get(url);

    return res.json({
      data,
    });
  } catch (error) {
    console.log(
      `[ERROR: Failed to fetch data from weather API | ${error.message}]`
    );

    return res.status(500).json({
      success: false,
      error: "Failed to fetch data from weather API",
    });
  }
};

module.exports = { getWeatherInfo };
