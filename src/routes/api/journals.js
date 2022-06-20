const { Router } = require("express");

const cities = require("./cities");
const {
  getJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
} = require("../../controllers/api/journals");

const router = Router();

router.get("/", getJournals);
router.get("/:id", getJournal);
router.post("/", createJournal);
router.put("/:id", updateJournal);
router.delete("/:id", deleteJournal);

router.use("/:id/cities", cities);

module.exports = router;
