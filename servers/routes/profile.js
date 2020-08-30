const express = require("express");
const router = express.Router();

const {Profile} = require("../controllers/profile");
router.post("/profile",Profile);





module.exports = router;