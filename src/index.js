import * as ReactDOM from "react-dom";
import React from "react";
import Header from "./header"
import "bootstrap/dist/css/bootstrap.css"

//import "styles/main.scss";
//import Dreamview from "./components/Dreamview";

const element = <h1>Visualizer</h1>;

ReactDOM.render(
	//element,
    <Header />,
    document.getElementById("root")
);