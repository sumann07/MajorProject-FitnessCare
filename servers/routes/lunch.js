const express = require("express");
const router = express.Router();

const{Lunch} = require("../controllers/lunch");


router.post("/lunch",Lunch);



module.exports = router;