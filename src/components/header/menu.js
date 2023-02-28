import React, { Component, useEffect } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import './Header.css'
export default class Menu extends Component {
    render() {
        var count = 1;
        function clickMenu() {
            count++;
            let open = document.getElementById('iconOpen');
            let close = document.getElementById('iconClose');
            var menuBar = document.getElementById('menuBar');
            let backdrop = document.getElementById('backgroundMenu');
            if(count % 2  == 0) {
                menuBar.classList.add('active');
                open.classList.add('active');
                close.classList.add('active');
                backdrop.classList.add('active');
             }
            else { 
                menuBar.classList.remove('active');
                open.classList.remove('active');
                close.classList.remove('active');
                backdrop.classList.remove('active');
            }
        }
        
        return(
            <>
                <div id="iconMenu" onClick={clickMenu} >
                    <AiOutlineMenu id="iconOpen" size={40}/>
                    <AiOutlineClose id="iconClose" size={40} />
                    <div id="inner"></div>
                    <div className="menu" id="menuBar">
                        <div id="contentMenu"><a href="#">Home</a></div>
                        <div id="contentMenu"><a href="#section2">About Us</a></div>
                        <div id="contentMenu"><a href="#section4">Video</a></div>
                        <div id="contentMenu"><a href="#section5">Services</a></div>
                        <div id="contentMenu"><a href="#section7">Showcase</a></div>
                        <div id="contentMenu"><a href="#section9">Our Works</a></div>
                    </div>
                </div>
                <div id="backgroundMenu"></div>
            </>
        );
    }
}