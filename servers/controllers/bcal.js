const Pmodel = require("../models/profile");

exports.Bcal=(req,res)=>{
    const {Email}=req.body;
    const {date}=req.body;
    Pmodel.find({Email:Email}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({
                error:`Something went wrong`
            })
        }
        if(doc){
            const breakf=doc;
            return res.json({
                data:breakf[0].Breakfast.filter(val=>{
                    return val.date==date
                }).reduce((a,b)=>{
                    return a+parseFloat(b.cal)
                },0)
            })
        }
    })
}
exports.Lcal=(req,res)=>{
    const {Email}=req.body;
    const {date}=req.body;
    Pmodel.find({Email:Email}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({
                error:`Something went wrong`
            })
        }
        if(doc){
            const breakf=doc;
            return res.json({
                data:breakf[0].Lunch.filter(val=>{
                    return val.date==date
                }).reduce((a,b)=>{
                    return a+parseFloat(b.cal)
                },0)
            })
        }
    })
}
exports.Dcal=(req,res)=>{
    const {Email}=req.body;
    const {date}=req.body;
    Pmodel.find({Email:Email}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({
                error:`Something went wrong`
            })
        }
        if(doc){
            const breakf=doc;
            return res.json({
                data:breakf[0].Dinner.filter(val=>{
                    return val.date==date
                }).reduce((a,b)=>{
                    return a+parseFloat(b.cal)
                },0)
            })
        }
    })
}

exports.Allcal=(req,res)=>{
    const {Email}=req.body;
    const {date}=req.body;
    Pmodel.find({Email:Email}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({
                error:`Something went wrong`
            })
        }
        if(doc){
            const breakf=doc;
            const dinn=breakf[0].Dinner.filter(val=>{
                return val.date==date
            }).reduce((a,b)=>{
                return a+parseFloat(b.cal)
            },0);
            const lun=breakf[0].Breakfast.filter(val=>{
                return val.date==date
            }).reduce((a,b)=>{
                return a+parseFloat(b.cal)
            },0);
            const bk=breakf[0].Lunch.filter(val=>{
                return val.date==date
            }).reduce((a,b)=>{
                return a+parseFloat(b.cal)
            },0);
            const tot=(dinn+lun+bk).toFixed(3);
            
            return res.json({
                data:tot
            })
        }
    })
}

// exports.dateLog=(req,res)=>{
//     const {Email}=req.body;
//     Pmodel.find({Email:Email}).exec((err,doc)=>{
//         if(err){
//             return res.status(400).json({
//                 error:`Something went wrong`
//             })
//         }
//         if(doc){

//         }
//     })
// }