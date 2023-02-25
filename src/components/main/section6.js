import React, { Component } from "react";

class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="contentBoxSection6">
                <div id="imageBoxSection6"></div>
                <div id="name">{this.props.name}</div>
                <div id="type">{this.props.type}</div>
            </div>
        );
    }
}
export default class Section6 extends Component {
    render() {
        return(
            <section>
                <div id="miniTitleSection6">SHOWCASE -</div>
                <div id="titleSection6">Start your project with us</div>
                <div id="boxSection6">
                    <Box name='Design' type='ART CREATIVE'/>
                    <Box name='Brand' type='PHOTO DESIGN' />
                    <Box name='Illustration' type='PHOTO DESIGN' />
                    <Box name='Animation' type='MOTION GRAPHICS' />
                    <Box name='Concept' type='MOTION GRAPHICS' />
                    <Box name='Creative' type='MIXED MEDIA' />
                </div>
            </section>
        );
    }
}