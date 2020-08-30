import React, { Component } from 'react';
import {getLocalStorages} from './Components/Auth/utils';
import axios from 'axios';
import "../src/Css/log.css";
import Footer from "../src/Components/Footer";

export class log extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Breakfast:[],
             Lunch:[],
             Dinner:[]
        }
    }
    componentDidMount(){
            const Email=getLocalStorages();
            axios.post('/user/log/get-log',{
              Email:Email
            }).then(res=>{
             // console.log(res.data.result[0]);
              const Breakfast=res.data.result[0].Breakfast;
              const Lunch=res.data.result[0].Lunch;
              const Dinner=res.data.result[0].Dinner;
              this.setState({
                  Breakfast:Breakfast,
                  Lunch:Lunch,
                  Dinner:Dinner

              })
             // console.log(this.state.Breakfast)
            }).catch(err=>{
                console.log("err",err);
            })
          
    }
    getData=()=>{
        this.state.Breakfast.map((val,index)=>{
            return(
            <li key={index}>{val.date}   {val.time}  {val.cal}</li>
            )
        })
    }
    render() {
        return (
            <>
            <div >
                
                <div className="container text-center">
              <h1 className="col-12 text-center mx-auto h1">Breakfast</h1>
                
                <div className="row">
                        <div className="col col-4 h3">Date</div>
                        <div className="col col-4 h3">Time</div>
                        <div className="col col-4 h3">Calorie(in Kcals)</div>
                           </div> 
                {
                    this.state.Breakfast.map((val,index)=>{
                        return(
                        <li style={{listStyle:"none"}} key={index}>
                           <div className="row">
                        <div className="col col-4 h9">{val.date}</div>
                        <div className="col col-4 h9">{val.time}</div>
                        <div className="col col-4 h9">{val.cal}</div>
                           </div>

                        </li>
                        )
                    })
                }
                </div>

                <div className="container text-center">
                <h1 className="col-12 text-center mx-auto h1">Lunch</h1>
               
                <div className="row">
                        <div className="col col-4 h3">Date</div>
                        <div className="col col-4 h3">Time</div>
                        <div className="col col-4 h3">Calorie(in Kcals)</div>
                           </div> 
                {
                    this.state.Lunch.map((val,index)=>{
                        return(
                        <li style={{listStyle:"none"}} key={index}>
                           <div className="row">
                        <div className="col col-4 h9">{val.date}</div>
                        <div className="col col-4 h9">{val.time}</div>
                        <div className="col col-4 h9">{val.cal}</div>
                           </div>

                        </li>
                        )
                    })
                }
                </div>

                <div className="container text-center">
                <h1 className="col-12 text-center mx-auto h1">Dinner</h1>
                <div className="row">
                        <div className="col col-4 h3">Date</div>
                        <div className="col col-4 h3">Time</div>
                        <div className="col col-4 h3">Calorie(in Kcals)</div>
                           </div> 
                {
                    this.state.Dinner.map((val,index)=>{
                        return(
                        <li style={{listStyle:"none"}} key={index}>
                           <div className="row">
                        <div className="col col-4 h9">{val.date}</div>
                        <div className="col col-4 h9">{val.time}</div>
                        <div className="col col-4 h9">{val.cal}</div>
                           </div>

                        </li>
                        )
                    })
                }
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default log
