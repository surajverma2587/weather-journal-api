const { Router } = require("express");

const { getWeatherInfo } = require("../../controllers/api/search");

const router = Router();

router.post("/", getWeatherInfo);

module.exports = router;
