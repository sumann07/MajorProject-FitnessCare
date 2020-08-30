import React, { Component } from 'react';
import {signout }from "./utils";

class Logout extends Component {
    componentDidMount(){
        signout(()=>{
            window.location.href="/"
        }
        )
    };
    render() {
        return (
            <div className="col col-10 mx-auto text-center" style={{fontWeight:"bolder",fontSize:"50px"}}>
                Logout Succesfully!!!!
            </div>
        )
    }
}

export default Logout;

