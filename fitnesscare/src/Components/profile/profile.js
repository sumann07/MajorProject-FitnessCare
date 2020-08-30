import React, { Component } from 'react';
import {getLocalStorages} from "../Auth/utils";
import axios from "axios";
import "../../Css/log.css";
// import { Link } from '@zumper/react-router-dom';
import {toast,ToastContainer} from "react-toastify"

export class profile extends Component {
  constructor(props){
      super(props);
      this.state={Name:"",Email:"",Height:"",Weight:"",Sex:"",Age:"",Blood:"",show:false,get:false}
  }
  handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })

  }
  handleSubmit=(event)=>{
    event.preventDefault();
    let {Name,Height,Weight,Sex,Age,Blood,Email} = this.state;
    Height = parseFloat(Height);
    Weight = parseFloat(Weight);
    Age = parseFloat(Age);
    Email = getLocalStorages();
   console.log(Name,Height,Weight,Sex,Age,Blood,Email);
   toast.success("Profile successfully created visit service page to continue")


   axios
   .post("/user/profile",{
       Email,Height,Weight,Sex,Age,Blood,Name
   }).then(res=>{
       console.log("Sucessfully profile created",res);
       toast.success("Successfully ");

       this.setState({
           show:true
       })
       //sessionStorage.setItem("boolean",true)
   }).catch(err=>{
       console.log("error",err);
       toast.error(err);
   })

  }
  radioChange=(e)=>{
      this.setState({
          Sex:e.target.value
      })
  }

    render() {
        if(this.state.show){
            return <div>profile is already created</div>
        }
        else{
        return (
            
            <div>
                <ToastContainer/>
                
                <form >
                    <h1 className="col-10 mx-auto h1 text-center"> Create Your Profile</h1>
                    <div className="col-10 mx-auto text-center log">Name : 
                    <input className="log" type="text" placeholder="Enter your name"
                     name="Name" value={this.state.Name}
                     onChange={this.handleChange}/></div>
                      <div className="col-10 mx-auto text-center log">Age :
                    <input className="log" type="number " placeholder="Enter your age" 
                    name="Age" value={this.state.Age}
                    onChange={this.handleChange}/></div>
                    <div className="col-10 mx-auto text-center log">Height :
                    <input className="log" type="number" placeholder="Enter height(in metre)" 
                    name="Height" value={this.state.Height}
                    onChange={this.handleChange}/></div>
                    <div className="col-10 mx-auto text-center log">Weight :
                    <input className="log"  type="number" placeholder="Enter your weight"
                    name="Weight" value={this.state.Weight}
                    onChange={this.handleChange}/></div>
                    <div onChange={this.radioChange}> 
                    <div className="col-10 mx-auto text-center log"> Gender : 
                    <input className="log" type="radio" id="male" name="gender" value="Male"/>
                   Male
                    <input className="log" type="radio" id="female" name="gender" value="Female"/>
                    Feamle
                    <input className="log" type="radio" id="other" name="gender" value="Other"/>
                    Other
                    </div>
                    </div>
                    
                    <div className="col-10 mx-auto text-center log">Blood-Group :
                    <input className="log"  type="text" placeholder="Enter your blood-group"
                    name="Blood" value={this.state.Blood}
                    onChange={this.handleChange}/></div>
                   
                </form>
                <div className=" col- 10 mx-auto text-center ">
                   
              <button className="break" type="button" onClick={this.handleSubmit} >
               Submit</button>
              </div>
            </div>
        )
        }
    }
}

export default profile;
