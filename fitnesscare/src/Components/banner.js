import React from "react";
import {NavLink} from "@zumper/react-router-dom";
const Banner = () =>{
    return (
  <>
  <section 
  className="d-flex align-items-center" style={{marginTop:"60px"}}>
  <div className="container-fluid ">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
          <h1 style={{ fontWeight:"600",fontFamily:"cursive"}}>
          <strong >Challenge Yourself With different foods.</strong> </h1>
         
         <NavLink to="/food">         <button  className="break">Know about food</button></NavLink>
 
          
            </div>
           <div className="col-lg-6 order-1 order-lg-1 header-img">
           <img src="https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/product/kwds/diet-chart/2500-Calorie-Diet-Chart-v1.jpg" className="img-fluid animated"  alt="home img"/>
           </div>
           </div>
          </div>
          </div>
          </div>
  
  
  
  </section>
            
             
  </>
    );
    
  
  };
  export default Banner;