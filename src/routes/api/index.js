const { Router } = require("express");

const search = require("./search");
const journals = require("./journals");

const router = Router();

router.use("/search", search);
router.use("/journals", journals);

module.exports = router;
