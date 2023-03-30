import ReactDOM  from "react-dom/client";
import React from "react";
import App from "./App";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);



root.render(
<BrowserRouter>
    <App/>    
</BrowserRouter>);