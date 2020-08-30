const express = require("express");
const router = express.Router();

const{Logdata} = require("../controllers/getlog");


router.post("/get-log",Logdata);



module.exports = router;