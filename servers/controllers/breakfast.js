const Pmodel = require("../models/profile");
const foodlog = require("./fooddata");

  

exports.Breakfast=(req,res)=>{
    let totalCal=0;
    const allitems =req.body;
    console.log(allitems);
    allitems.data.forEach(element => {
        const {name,qty}=element;
        const logItem=foodlog.filter(val=>{
            return val.name===name;
        });
        totalCal+=(logItem[0].calorie)*qty;
    });
    const {email}=req.body;
    const updateData={
        date:new Date().getDate()+"-"+(new Date().getMonth()+1)+'-'+new Date().getFullYear(),
        time:new Date().getHours()+":"+new Date().getMinutes() +":"+ new Date().getSeconds(),
        cal:totalCal.toFixed(3)
    }
    if(totalCal>0){
        Pmodel.findOne({Email:email}).exec((err,user)=>{
            if(err){
                return res.status(400).json({
                    error:`Something went wrong`
                })
            }
            if(user){
                user.update({$push :{Breakfast:updateData}}).exec((err,result)=>{
                    if(err){
                        return res.status(400).json({
                            error:`Something went wrong`
                        })
                    }
                    res.json({
                        message:`Successfully logged`
                    })
                });
            }
        });
    }
   // console.log(totalCal.toFixed(3));
    
};