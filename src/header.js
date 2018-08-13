import React from "react";
import logoXpeng from "./assets/images/XPengLogo.jpg";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
		    	<img  src={logoXpeng} alt="Logo" height="150" width="150" />
            </div>
        );
    }
}
