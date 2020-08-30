const Pmodel = require("../models/profile");

exports.Logdata=(req,res)=>{
    const {Email}=req.body;
    Pmodel.find({Email:Email}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({
                error:`Something went wrong`
            })
        }
        if(doc){
            return res.json({
                result:doc
            })
        }
    })
}