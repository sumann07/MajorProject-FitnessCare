import React from "react";
import "./Css/About.css";
import Footer from "../src/Components/Footer";

const about =() =>{
 return(
<>
<div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
    <h1 className="text-center h1">About the FitnessCare</h1>
    <div className=" p-1">FitnessCare is the most accurate, comprehensive 
    daily food-logs tracking platform on earth. Unlike other platform in the market, 
    our nutritional data is curated from verified, accurate sources.
     We aim to provide a complete solution – no matter what diet you choose
      to be on.<br></br><br></br>
      FitnessCare is built as a side 
      project in 2020. We were following the CRON diet (Calorie Restriction 
      with Optimal Nutrition) and being the nutrition nerd/software developer 
      that we are, decided to build a platform to track our diet. 
      Thus, FitnessCare was born.
      <br></br><br></br>There are now over  million users who are happy he did.
<br></br><br></br>
FitnessCare success has hinged entirely on positive word-of-mouth from its users. We are still – and plans to continue being – a bootstrap startup to this day.<br></br><br></br>
      <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
    <img src="https://www.intheloop.io/blog/wp-content/uploads/2019/03/loop-email-team-collaboration-meeting-1500x500.jpg" alt="b"/></div></div></div></div>
      <br></br>
      If you have interest in your personal nutrition or working with your
       client’s nutrition check us out!.<br></br>Have questions? We would love to hear from you. 
Email us at: support@gmail.com </div>
      
      </div></div></div></div>
      <Footer/>
      
</>
 );
};
export default about;