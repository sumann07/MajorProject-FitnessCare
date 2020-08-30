import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "react-toastify/dist/ReactToastify.min.css";
import "./styles.css";
import Route from "./Components/Auth/routes/routes"
import axios from "axios"
import { getCookie, signout } from "./Components/Auth/utils";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = token;

  return config;
});

// null for success, and second parameter cllback for failure
axios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    signout(() => {
      window.location.href = "/signin";
    });
  }

  return Promise.reject(error);
});

export default function App() {
  return (
    <>
     
       <Route />
    </>
  );
}
