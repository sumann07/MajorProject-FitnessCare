const express = require("express");
const router = express.Router();

const{Bcal,Lcal,Dcal,Allcal} = require("../controllers/bcal");


router.post("/get-breakfast",Bcal);
router.post("/get-lunch",Lcal);
router.post("/get-dinner",Dcal);
router.post("/get-total",Allcal);



module.exports = router;