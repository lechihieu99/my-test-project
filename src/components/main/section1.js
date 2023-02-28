import React, { Component } from "react";
export default class Section1 extends Component {
    render() {
        function pictureHoverSection() {
            let pictureHover = document.getElementById('picSection1');
            pictureHover.classList.add('active');
        }
        function pictureLeaveSection() {
            let pictureHover = document.getElementById('picSection1');
            pictureHover.classList.remove('active');
        }
        
        return(
            <section id="section1">
                <div id="boxPicSection1">
                    <div id="picSection1" onMouseOver={pictureHoverSection} onMouseOut={pictureLeaveSection}></div>
                </div>
                <div id="contentSection1">
                    <div id="titleSection1">Motion Graphics Studio</div>
                    <div id="subSection1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Earum quia sit necessitatibus quasi, perspiciatis animi exercitationem 
                    assumenda delectus, magnam rerum vero. Distinctio dolores alias vero ut consequatur quasi ad quas?</div>
                    <a href="#">Learn More</a>
                </div>
            </section>
        );
    }
}