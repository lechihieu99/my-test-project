import React, { Component } from "react";
export default class MainHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div id="logo">MotionM5</div>
                <div id="inforHeader">
                    <a href="#">{this.props.number}</a>
                    <a href="#">{this.props.email}</a>
                    <a href="#">Let's talk</a>
                </div>
            </>
            
        );
    }
}