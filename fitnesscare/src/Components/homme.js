import React from "react";
import "../Components/homme.css";


const Homme = () => {
  return (
    <div id="main-div">
      <div className="my-5">
        <h1 className=" tool text-center"> The Tools for Your Goals</h1>
        <p className=" tool-1 text-center" >
          {" "}
          Trying to lose weight, tone up, lower your BMI, or invest in your
          overall health?
          <br></br> We give you the right features to hit your goals.
        </p>
      </div>
      <div className="Container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card-m">
                  <img
                    src="https://cdn1.cronometer.com/2020/landing/cronometer-icon-1.png"
                    className="card-img-top "
                    alt="homme-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center ">
                      Learn. Track. Improve.
                    </h5>
                    <p className="card-text text-center" style={{fontSize:"15px"}}>
                      Keeping a food diary helps you understand your habits and
                      increases your likelihood of hitting your goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card-m">
                  <img
                    src="https://cdn1.cronometer.com/2020/landing/cronometer-icon-3.png"
                    className="card-img-top"
                    alt="homme-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Logging Simplified
                    </h5>
                    <p className="card-text text-center" style={{fontSize:"15px"}}>
                      Save meals and recipes, and use Quick Tools for fast and
                      easy food tracking. Log your diet, exercise, biometrics
                      and notes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card-m">
                  <img
                    src="https://cdn1.cronometer.com/2020/landing/cronometer-icon-4.png"
                    className="card-img-top "
                    alt="homme-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Stay Motivated</h5>
                    <p className="card-text text-center "style={{fontSize:"15px"}}>
                      Join the World’s Largest Fitness Community for advice and
                      tips. <br></br>Support 24/7.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card-m">
                  <img
                    src="https://cdn1.cronometer.com/2020/landing/cronometer-icon-2.png"
                    className="card-img-top"
                    alt="homme-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Nutrition. Micronutrients
                    </h5>
                    <p className="card-text text-center" style={{fontSize:"15px"}}>
                    Track up to 82 micronutrients from 300+ foods
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card-m">
                  <img
                    src="https://cdn1.cronometer.com/2020/landing/cronometer-icon-5.png"
                    className="card-img-top"
                    alt="homme-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Track From Anywhere
                    </h5>
                    <p className="card-text text-center" style={{fontSize:"15px"}}>
                   Easy logging. ⓘ
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card-m">
                  <img
                    src="https://cdn1.cronometer.com/2020/landing/cronometer-icon-6.png"
                    className="card-img-top"
                    alt="homme-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Track Anywhere
                    </h5>
                    <p className="card-text text-center" style={{fontSize:"15px"}}>
                    Built in help anywhere
                    you see an ⓘ
                    </p>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Homme;
