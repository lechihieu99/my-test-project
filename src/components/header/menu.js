import React, { Component } from "react";
export default class Menu extends Component {
    render() {
        return(
            <>
                <div id="iconMenu"></div>
                <div className="menu">
                    <div id="contentMenu">Home</div>
                    <div id="contentMenu">About Us</div>
                    <div id="contentMenu">Video</div>
                    <div id="contentMenu">Services</div>
                    <div id="contentMenu">Showcase</div>
                    <div id="contentMenu">Our Works</div>
                </div>
            </>
        );
    }
}