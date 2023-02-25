import React, { Component } from "react";
import pic1 from './images/pic1.jpg';
class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="contentBoxSection5">
                <div id="imageBoxSection5"></div>
                <div id="titleSection5">{this.props.title}</div>
                <div id="subSection5">{this.props.sub}</div>
            </div>
        );
    }
}
export default class Section5 extends Component {
    render() {
        return(
            <section>
                <div id="boxSection5">
                    <Box title='Effective Motion Graphics' sub='Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Reprehenderit rerum reiciendis, voluptatibus eligendi sit suscipit in officii.'/>
                    <Box title='Creative Conceptions' sub='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quasi consectetur corrupti, blanditiis. Sit, quam.' />
                    <Box title='Shooting & Editing' sub='Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Nobis consectetur eligendi natus in neque provident?' />
                    <Box title='Motion Graphics' sub='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi numquam unde quia quis saepe.'/>
                </div>
            </section>
        );
    }
}