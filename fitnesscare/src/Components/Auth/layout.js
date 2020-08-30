import React, { Fragment } from "react";
import {  withRouter } from "@zumper/react-router-dom";



const Layout = ({ children, match }) => {
  // const isActive = (path) => {
  //   if (match.path === path) {
  //     return { color: "#000" };
  //   } else {
  //     return { color: "#fff" };
  //   }
  // };

 

  return (
      
    <Fragment>
     
      <div className="container">{children}</div>
    </Fragment>
  );
};

export default withRouter(Layout);