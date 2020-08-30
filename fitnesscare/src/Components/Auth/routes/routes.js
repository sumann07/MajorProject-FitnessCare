import React from "react";
import { BrowserRouter, Switch } from "@zumper/react-router-dom";
// import Home from "../components/Home";
import Signup from "../signup";
import Signin from "../sign";
 import Activate from "../activate";
 import Forgot from "../forgot";
 import Reset from "../reset";
import Logout from "../logout";
import PrivateRoute from "./privateroute";
import PublicRoute from "./publicroutes";
import Home from "../../../Home";
import About from "../../../About";
 import Navbar from "../../../NavBar";
import Service from "../../../Service";
import Profile from "../../profile/profile";
import Log from '../../../log';
import Homee from "../../Homee";

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/about" exact component={About} />
        <PublicRoute path="/food" exact component={Homee}/>
 

        <PublicRoute restricted path="/signup" exact component={Signup} />
        <PublicRoute restricted path="/signin" exact component={Signin} />
        <PublicRoute
          restricted
          path="/auth/activate/:token"
          exact
          component={Activate}
        />
        <PublicRoute
          restricted
          path="/auth/password/forgot"
          exact
          component={Forgot}
        />
        <PublicRoute
          restricted
          path="/auth/password/reset/:token"
          exact
          component={Reset}
        />
        <PublicRoute
        path ="/logout"
        exact
        component={Logout}
        />
        <PrivateRoute path="/service" exact component={Service} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/log" exact component={Log} />
    
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;