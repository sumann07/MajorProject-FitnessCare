import React, { useState } from "react";
import axios from "axios";
import Layout from "./layout"; 
import {toast,ToastContainer} from "react-toastify";
const Signup = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
    cpassword:"",
    passwordError:""
  });
  const { buttonText, name, email, password,cpassword,passwordError } = formInputs;

  const handleChange = (evt) => {
    setFormInputs({
      ...formInputs,
      [evt.target.name]: evt.target.value,
    });
  };
const validate=()=>{
     if(password!==cpassword){
       setFormInputs({...formInputs,passwordError:"password didn't match"})
       return false;
     }
     return true;
}
  const handleSubmit = (evt) => {
    // Avoid page refresh
    if(validate()){

    evt.preventDefault();
    setFormInputs({ ...formInputs, buttonText: "Submitting..." });

    axios
      .post("/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log("SIGNED UP SUCCESS!!", res);

        setFormInputs({
          name: "",
          password: "",
          email: "",
          buttonText: "Submit",
        });

        console.log(res.data.message);
        toast.success(res.data.message);
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          console.log(err.response.data.error);
          toast.error(err.response.data.error);
        }

        setFormInputs({
          ...formInputs,
          buttonText: "Submit",
          passwordError:""
        });
      });
    }
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="paraa">Name</label>
        <input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="paraa">Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
          className="form-control"
        />
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
      </div>
      <div className="form-group">
        <label className="paraa"> Confirm Password</label>
        <input
          onChange={handleChange}
          name="cpassword"
          type="password"
          value={cpassword}
          className="form-control"
        />
         {passwordError && <div style={{color:"red"}}>{passwordError}</div>}
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
      <div className="col-md-6 offset-md-3">
        <ToastContainer/>
        <h1 className=" p-5 paraa text-center" >Sign up</h1>

        {signupForm()}
      </div>
    </Layout>
  );
};

export default Signup;