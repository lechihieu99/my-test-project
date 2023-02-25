import React, { Component } from "react";
import './components/header/Header.css';
import MainHeader from "./components/header/header";
import Menu from "./components/header/menu";
export default class Header extends Component {
    render() {
        return(
            <div id="header">
                <MainHeader  number='+1 (123) 456 78 90' email='mobirise@company.com'/>
                <Menu />
            </div>
        );
    }
}