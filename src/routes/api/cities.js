const { Router } = require("express");

const {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJournal,
} = require("../../controllers/api/cities");

const router = Router({ mergeParams: true });

router.get("/", getCitiesFromJournal);
router.post("/", addCityToJournal);
router.delete("/:cityId", removeCityFromJournal);

module.exports = router;
