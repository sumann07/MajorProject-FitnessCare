import React, { Component } from "react";
import axios from "axios";
import { getLocalStorages } from "./Components/Auth/utils";
import {NavLink} from "@zumper/react-router-dom";
import "../src/Css/service.css";
import Footer from "../src/Components/Footer";
export class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Height: "",
      Weight: "",
      Sex: "",
      Age: "",
      Blood: "",
      Bmi: "",
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      name:"Rice (Brown)",
      qty:"",
      name1:"Rice (Brown)",
      qty1:"",
      name2:"Rice (Brown)",
      qty2:"",
      bCal:"",
      lCal:"",
      dCal:"",
      tCal:''
      
    };
  }

  componentDidMount = () => {
    const Email = getLocalStorages();
    axios
      .post("/user/log/get-log", { Email })
      .then((res) => {
        console.log(res);
        const {
          Name,
          Email,
          Sex,
          Weight,
          Height,
          Blood,
          Bmi,
          Age,
        } = res.data.result[0];
        this.setState({
          Name,
          Email,
          Sex,
          Age,
          Blood,
          Bmi,
          Weight,
          Height,
          
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name, this.state.qty);
    let data=[
        {
            name:this.state.name,
            qty:parseFloat(this.state.qty)
        }
    ];
    let email=this.state.Email;
    let result={
        data:data,
        email:email
    }
    console.log(result);
    axios.post('/user/log/breakfast',result).then(res=>{
        console.log('sucessfully submitted', res);
        this.setState({
            qty:"",
            name:"Rice (Brown)"
        })
    }).catch(err=>{
        console.log('something went wrong',err)
    })
  }
  handleSubmit1 = (event) => {
    event.preventDefault();
    console.log(this.state.name1, this.state.qty1);
    let data=[
        {
            name:this.state.name1,
            qty:parseFloat(this.state.qty1)
        }
    ];
    let email=this.state.Email;
    let result={
        data:data,
        email:email
    }
    console.log(result);
    axios.post('/user/log/lunch',result).then(res=>{
        console.log('sucessfully submitted', res);
        this.setState({
            qty1:"",
            name1:"Rice (Brown)"
        })
    }).catch(err=>{
        console.log('something went wrong',err)
    })
  }

  handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(this.state.name2, this.state.qty2);
    let data=[
        {
            name:this.state.name2,
            qty:parseFloat(this.state.qty2)
        }
    ];
    let email=this.state.Email;
    let result={
        data:data,
        email:email
    }
    console.log(result);
    axios.post('/user/log/dinner',result).then(res=>{
        console.log('sucessfully submitted', res);
        this.setState({
            qty2:"",
            name2:"Rice (Brown)"
        })
    }).catch(err=>{
        console.log('something went wrong',err)
    })
  }
  handleChange = (event) =>
  this.setState({[event.target.name]: event.target.value});


  handleChanges = (event) =>{
      console.log(event.target.value)
    this.setState({name: event.target.value});
  }

  handleChanges1 = (event) =>{
    console.log(event.target.value)
  this.setState({name1: event.target.value});
}

handleChanges2 = (event) =>{
  console.log(event.target.value)
this.setState({name2: event.target.value});
}

breakfastCall=(event)=>{
  event.preventDefault();
  const email=  getLocalStorages();
  const date = new Date().getDate() + "-" + (new Date().getMonth()+1)  + "-" + (new Date().getFullYear());
  axios.post("/user/cal/get-breakfast",{
   Email:email,
   date:date
  }).then(res=>{
    this.setState({
      bCal:res.data.data
    })
    console.log(res)
  }).catch(err=>{
    console.log("error");
  })
}
lunchCall=(event)=>{
  event.preventDefault();
  const email=  getLocalStorages();
  const date = new Date().getDate() + "-" + (new Date().getMonth()+1)  + "-" + (new Date().getFullYear());
  axios.post("/user/cal/get-lunch",{
   Email:email,
   date:date
  }).then(res=>{
    this.setState({
      lCal:res.data.data
    })
    console.log(res)
  }).catch(err=>{
    console.log("error");
  })
}
dinnerCall=(event)=>{
  event.preventDefault();
  const email=  getLocalStorages();
  const date = new Date().getDate() + "-" + (new Date().getMonth()+1)  + "-" + (new Date().getFullYear());
  axios.post("/user/cal/get-dinner",{
   Email:email,
   date:date
  }).then(res=>{
    this.setState({
      dCal:res.data.data
    })
    console.log("dcall",res.data.data)
  }).catch(err=>{
    console.log("error");
  })
}
totalCall=(event)=>{
  event.preventDefault();
  const email=  getLocalStorages();
  const date = new Date().getDate() + "-" + (new Date().getMonth()+1)  + "-" + (new Date().getFullYear());
  axios.post("/user/cal/get-total",{
   Email:email,
   date:date
  }).then(res=>{
    this.setState({
      tCal:res.data.data
    })
    console.log(res)
  }).catch(err=>{
    console.log("error");
  })
}

  render() {
    return (
      <><div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <h1 className="text-center h1">Personal Details</h1>
            
        
            <div className="col col-6 service">
              Name :{" "}
              {this.state.Name.charAt(0).toUpperCase() +
                this.state.Name.slice(1)}
            </div>
            <div className="col col-6 service"> E-mail : {this.state.Email}</div>
          </div>
          <div className="row">
            <div className="col col-6 service"> Gender : {this.state.Sex}</div>
            <div className="col col-6 service">Age : {this.state.Age}</div>
          </div>
          <div className="row">
            <div className="col col-6 service">Height : {this.state.Height} Metre</div>
            <div className="col col-6 service">Weight : {this.state.Weight} Kilogram</div>
          </div>
          <div className="row">
            <div className="col col-6 service">
              BMI : {parseFloat(this.state.Bmi).toFixed(3)} 
            </div>
            <div className="col col-6 service">Blood-Group : {this.state.Blood}</div>
          </div>
        </div>
        </div>
            </div>
            
        <br />
        <br />
       
           <h1 className="h1 col-10 mx-auto text-center">Breakfast</h1>
            
        
        <div className="row text-center">
          <div className="dropdown col col-10 mx-auto">
          <form onSubmit={this.handleSubmit}>
        <label className="lab">
          Choose Your Food :
          <select className="lab" value={this.state.name} onChange={this.handleChanges}>
            <option  value="Apple">Apple</option>
            <option  value="Banana"> Banana</option>
            <option  value="Grapes"> Grapes</option>
            <option  value="Mango"> Mango</option>
            <option  value="Papaya"> Papaya</option>
            <option  value="Watermelon"> Watermelon</option>
            <option  value="Milk"> Milk</option>
            <option  value="Egg"> Egg</option>
            <option  value="Bread"> Bread</option>
          </select>
        </label>
        
       <label className="lab">Enter Amout : </label> <input className="lab" name="qty" type="number" value={this.state.qty} onChange={this.handleChange} placeholder="Enter in gms" />
        

        <input  className="break" type="submit" value="Submit" />
      </form>
          </div>
        </div>
              <div className="col col-10 mx-auto h2 text-center"><button className="h1" onClick={this.breakfastCall}>Know Your Calorie (in Kcals) </button> : {this.state.bCal}</div>
        <br/>
        <h1 className=" col-10 mx-auto h1 text-center">Lunch</h1>
        <div className="row">
          <div className="dropdown col col-10 mx-auto text-center">
          <form onSubmit={this.handleSubmit1}>
        <label className="lab">
          Choose Your Food :
          <select  className="lab" value={this.state.name1} onChange={this.handleChanges1}>
            <option  value="Rice (Brown)">Rice (Brown)</option>
            <option  value="Rice Parboiled">Rice Parboiled</option>
            <option  value="Rice Raw milled">Rice Raw milled</option>
            <option  value="Wheat whole">Wheat whole</option>
            <option  value="Wheat flour">Wheat flour</option>
            <option  value="Green gram dal">Green gram dal</option>
            <option  value="Bengal gram dal">Bengal gram, dal</option>
            <option  value="Rajma">Rajma</option>
            <option  value="Soya bean">Soya bean</option>
            <option  value="Cabbage">Cabbage</option>
            <option  value="Cauliflower">Cauliflower</option>
            <option  value="Spinach">Spinach</option>
            <option  value="Bitter gourd">Bitter gourd</option>
            <option  value="Bottle gourd">Bottle gourd</option>
            <option  value="Brinjal">Brinjal</option>
            <option  value="Capsicum">Capsicum</option>
            <option  value="Cucumber">Cucumber</option>
            <option  value="Ladies finger">Ladies finger</option>
            <option  value="Tomato">Tomato</option>
            <option  value="Carrot">Carrot</option>
            <option  value="Beetroot">Beetroot</option>
            <option  value="Potato">Potato</option>
            <option  value="Jack fruit">Jack fruit</option>
            <option  value="Paneer">Paneer</option>
            <option  value="Chicken">Chicken</option>
            <option  value="fish">Fish</option>
            <option  value="Cheese">Cheese</option>
            <option  value="Ghee">Ghee</option>
            <option  value="Butter">Butter</option>
          </select>
        </label>
        
       <label className="lab">Enter Amount : </label> <input className="lab" name="qty1" type="number" value={this.state.qty1} onChange={this.handleChange} placeholder="Enter in gms" />
        

        <input className="break" type="submit" value="Submit" />
      </form>
          </div>
        </div>
        <div className="col col-10 mx-auto h2 text-center"><button className="h1" onClick={this.lunchCall}>Know Your Calorie (in Kcals) </button> :  {this.state.lCal}</div>

        <h1 className=" col-10 mx-auto h1 text-center">Dinner</h1>
            <div className="row">
          <div className="dropdown col col-10 mx-auto text-center">
          <form onSubmit={this.handleSubmit2}>
        <label className="lab">
          Choose Your Food :
          <select className="lab" value={this.state.name2} onChange={this.handleChanges2}>
            <option  value="Rice (Brown)">Rice (Brown)</option>
            <option  value="Rice Parboiled">Rice Parboiled</option>
            <option  value="Rice Raw milled">Rice Raw milled</option>
            <option  value="Wheat whole">Wheat whole</option>
            <option  value="Wheat flour">Wheat flour</option>
            <option  value="Green gram dal">Green gram dal</option>
            <option  value="Bengal gram dal">Bengal gram, dal</option>
            <option  value="Rajma">Rajma</option>
            <option  value="Soya bean">Soya bean</option>
            <option  value="Cabbage">Cabbage</option>
            <option  value="Cauliflower">Cauliflower</option>
            <option  value="Spinach">Spinach</option>
            <option  value="Bitter gourd">Bitter gourd</option>
            <option  value="Bottle gourd">Bottle gourd</option>
            <option  value="Brinjal">Brinjal</option>
            <option  value="Capsicum">Capsicum</option>
            <option  value="Cucumber">Cucumber</option>
            <option  value="Ladies finger">Ladies finger</option>
            <option  value="Tomato">Tomato</option>
            <option  value="Carrot">Carrot</option>
            <option  value="Beetroot">Beetroot</option>
            <option  value="Potato">Potato</option>
            <option  value="Jack fruit">Jack fruit</option>
            <option  value="Paneer">Paneer</option>
            <option  value="Chicken">Chicken</option>
            <option  value="fish">Fish</option>
            <option  value="Cheese">Cheese</option>
            <option  value="Ghee">Ghee</option>
            <option  value="Butter">Butter</option>
          </select>
        </label>
        
        
       <label className="lab" >Enter Amount : </label> <input className="lab" name="qty2" type="number" value={this.state.qty2} onChange={this.handleChange} placeholder="Enter in gms" />
        

        <input className="break" type="submit" value="Submit" />
      </form>
          </div>
        </div>
        <div className="col col-10 mx-auto text-center h2"><button className="h1" onClick={this.dinnerCall}>Know Your Calorie (in Kcals) </button>  : {this.state.dCal}</div>
        <div className="col col-10 mx-auto text-center h2"><button className="h1"onClick={this.totalCall}>Know Your total Calorie (in Kcals) </button>  : {this.state.tCal}</div>
        <div className="col col-10 mx-auto text-center h2"><NavLink to="/log"><button className="h1">Know Your All Logs  </button></NavLink> </div>
      <Footer/>
      </>
    );
  }
}

export default Service;
