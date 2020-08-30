import React from "react";
// import {NavLink} from "@zumper/react-router-dom";
const Banner2 = () =>{
    return (
  <>
  <section 
  className="d-flex align-items-center" style={{marginTop:"60px"}}>
  <div className="container-fluid ">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <h1 style={{color:"#0f4c75"}}>
          <strong > Why FitnessCare?</strong>
          </h1>
         <li> 100% free, nothing to pay</li>
         <li>Fastest, easiest Calorie count platform</li>
         <li>Supportive community</li>
         <li>Proven success</li>
          
            </div>
           <div className="col-lg-6 order-1 order-lg-2 ">
           <h1 style={{color:"#0f4c75"}}>
          <strong > How it works!</strong>
          </h1>
       <p>People who track food achieve more than double the average weight loss 
           and members lose weight 3x faster when doing it with friends. 
           FitnessCare combines these to create the most powerful solution for healthy, 
           sustainable weight loss.</p>
          
           </div>
           </div>
          </div>
          </div>
          </div>
  
  
  
  </section>
            
             
  </>
    );
    
  
  };
  export default Banner2;