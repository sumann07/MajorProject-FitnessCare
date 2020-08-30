const express = require("express");
const router = express.Router();

const{Dinner} = require("../controllers/dinner");


router.post("/dinner",Dinner);



module.exports = router;