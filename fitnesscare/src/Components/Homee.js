import React from "react";
import "../Components/Homee.css";
import Footer from "../Components/Footer";


const Homee = () =>{
  return (
<>
<div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">

  <h1 className="h1 text-center"> Food with Calorie Count</h1>
   
<div className=" col-10 mx-auto text-center "style={{marginTop:"60px",marginBottom:"60px"}}>
          <img className="c" src="https://i.pinimg.com/originals/07/53/f8/0753f8f11f8f57eed9f2aef9d7353718.jpg" alt="img1"></img>
   </div>  
   </div></div></div></div>
   
   <h1 className=" col-10 mx-auto h1 text-center">How Calorie Burns</h1>

<div className="col-10 mx-auto text-center" style={{marginTop:"60px",marginBottom:"60px"}}>
          <img className="c" src="https://makeyourbodywork.com/wp-content/uploads/2012/04/eating-vs-exercise.png" alt="img2" style={{height:"400px",width:"400px"}}></img>
   </div>  
   <h1 className=" col-10 mx-auto h1 text-center">How to lose Weight</h1>

<div className="col-10 mx-auto text-center" style={{marginTop:"60px",marginBottom:"60px"}}>
<img className="c" src="https://i.pinimg.com/originals/4d/ac/77/4dac7728debe3ffab6df7397dcdda306.jpg" alt="img3"></img><br/>
   <img className="c" src="https://carrotsncake.com/wp-content/uploads/2020/06/WEIGHT-LOSS-METABOLISM_-CONTROLLING-WHAT-YOU-BURN-6-1024x1024.png" alt="img5 " style={{height:"400px",width:"400px",marginTop:"60px"}}></img><br/>
   <img className="c" src="https://fitnesscare.me/wp-content/uploads/2017/04/logo-fitnesscare.png" alt="img4" style={{height:"100px",width:"600px"}}></img>
  
   </div>
   <Footer/>      
</>
  );
  

};

export default Homee;
