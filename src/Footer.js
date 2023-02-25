import React, { Component } from "react";
export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div id="leftFooter">
                    <div id="titleLeftFooter">USEFUL LINKS</div>
                    <div id="linkLeftFooter">
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Works</a>   
                    </div>
                </div>
                <div id="rightFooter">
                    <div id="titleRightFooter">LET'S TALK</div>
                    <div id="linkRightFooter">
                        <a href="#">1234 567 890</a>
                        <a href="#">mobirise@company.com</a> 
                    </div>
                </div>
            </div>
        );
    }
}