import React, { Component } from "react";

class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="title">{this.props.title}</div>
                <div id="sub">{this.props.sub}</div>
            </>
            
        );
    }
}
export default class Section3 extends Component {
    render() {
        return(
            <section>
                <div id="miniTitleSection3">MOTION GRAPHICS STUDIO -</div>
                <div id="titleSection3">What can we do</div>
                <div id="boxSection3">
                    <Box title='Animated Digital Advertising Graphics' sub='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium odit ducimus doloribus. Est, nesciunt.'/>
                    <Box title='Creative Conceptions' sub='Lorem ipsum dolor sit amet consectetur adipisicing, elit. Consequatur, laudantium?'/>
                    <Box title='Shooting & Editing' sub='Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Ex animi ullam, possimus tenetur.'/>
                </div>
            </section>
        );
    }
}