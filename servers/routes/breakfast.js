const express = require("express");
const router = express.Router();

const{Breakfast} = require("../controllers/breakfast");


router.post("/breakfast",Breakfast);



module.exports = router;