import React, { Component } from "react";
import './components/header/Header.css';
import MainHeader from "./components/header/header";
import Menu from "./components/header/menu";
export default class Header extends Component {
    render() {
        return(
            <>
            <div id="header">
                <MainHeader  number='+84 339 042 674' email='19110073@student.hcmus.edu.vn'/>
                
            </div>
            <Menu />
            <div id="note">Website chỉ là bản test nhiều thiếu sót. Page load hơi chậm, vui lòng thông cảm!</div>
            </>
            
        );
    }
}