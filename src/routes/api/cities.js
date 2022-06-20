const { Router } = require("express");

const {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJournal,
} = require("../../controllers/api/cities");

const router = Router();

router.get("/", getCitiesFromJournal);
router.post("/", addCityToJournal);
router.delete("/:id", removeCityFromJournal);

module.exports = router;
