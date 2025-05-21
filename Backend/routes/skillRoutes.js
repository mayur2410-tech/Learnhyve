// backend/routes/skillRoutes.js
const express = require("express");
const { getSkillRedirect } = require("../controller/skillController");

const router = express.Router();

router.get("/search", getSkillRedirect);

module.exports = router;
