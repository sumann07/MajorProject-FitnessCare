const {Schema, model} =require("mongoose");

const profileSchema = new Schema(
    {
          Name:{
              type:String,
              required:true
          },
          Email:{
              type:String,
              required:true,
              unique:true,
              lowercase:true
          },
          Age:{
            type:Number,
            required:true
        },
        Weight:{
            type:Number,
            required:true
        },
        Height:{
            type:Number,
            required:true
        },
        Blood:{
            type:String,
            required:true
        },
        Sex:{
            type:String,
            required:true
        },
        Bmi:{
            type:Number,
            required:true
        },
        Breakfast:[],
        Lunch:[],
        Dinner:[]

    }
);
module.exports = model("profile" , profileSchema);
