import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "@zumper/react-router-dom";
import { authenticate, isAuth } from "./utils";
import Layout from "./layout";
import "../../Css/signin.css";
// import Footer from "../Footer";

const Signin = ({ history }) => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
    emailError:"",
    passError:"",
  });
  const { buttonText, email, password,emailError,passError } = formInputs;
  const validate=()=>{
    let emailError,passError;
    if(email===""){
      emailError="Invalid email."
    }
    if(password===""){
      passError="Password Incorrect."
    }
    if(emailError || passError){
      setFormInputs({...formInputs,emailError,passError});
      return false;
    }
    return true;
  };

  const handleChange = (evt) => {
    setFormInputs({
      ...formInputs,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    // Avoid page refresh
    evt.preventDefault();
    if(validate()){
      setFormInputs({ ...formInputs, buttonText: "Submitting..." });

    axios
      .post("/signin", {
        email,
        password,
      })
      .then((res) => {
        console.log("SIGNED UP SUCCESS!!", res);
    //  toast.success("signIn sucessfully");

        authenticate(res, () => {
          setFormInputs({
            ...formInputs,
            name: "",
            email: "",
            password: "",
            buttonText: "Submitted",
            emailError:"",
            passError:"",
          });
          window.location.reload(false);
          // toast.success(`hey $(response.data.user.name), Welcome back !`)
          isAuth() ? history.push("/") : history.push("/signin");
        });
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          console.log(err.response.data.error);
         toast.error(err.response.data.error);
        }

        setFormInputs({
          ...formInputs,
          buttonText: "Submit", 
        });
      });

    }
    
  };

  const signinForm = () => (
    
    <form>

      <div className="form-group email" >
        <label className="paraa">Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
          className="form-control"
        /><br/>
       
        {emailError?<p style={{color:"red"}}>{emailError}</p>:<span></span>}
      </div>

      <div className="form-group">
        <label className="paraa">Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          className="form-control"
        />
       
        {passError?<p style={{color:"red"}}>{passError}</p>:<span></span>}
      </div>

      <div>
        <button
          type="button"
          className="break "
          onClick={handleSubmit}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
    
      <div className="container ">
     
    <div className="row">
    
      <div className="col-10 mx-auto ">
        <div className="row">
        <div className="col-lg-5 order-1 order-lg-1 header-img">
         <img src="https://vil.xlri.ac.in/emdp/assets/images/login.svg" className="img-fluid animated" 
         style={{marginTop:"70px"}} alt="home img"/>
         </div>
        <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
        <h1  className="s1 text-center"style={{color:"#0f4c75",fontSize:"25px",fontWeight:"bolder" ,marginTop:"60px"}}>Log In</h1>
        <div className="s" style={{marginLeft:"140px"}}>
        <ToastContainer />
        {signinForm()}<br/>
        
        <Link className="para" to="/signup" >Create your account</Link><br/>
        
        <Link className="para"
          to="/auth/password/forgot">

          Forgot Password?
        </Link>
       
      
        
          </div>
         
         </div>
        </div>
        </div>
        </div>
        </div>
        {/* <Footer/> */}
    </Layout>
    
  );
};

export default Signin;