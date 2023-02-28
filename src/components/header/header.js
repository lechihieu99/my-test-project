import React, { Component } from "react";
export default class MainHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let email = 'mailto:' + this.props.email;
        let number = '';
        for(var i = 0; i < this.props.number.length; i++)
        {
            if(this.props.number[i] === '(' || this.props.number[i] === ')' || this.props.number[i] === ' ')
                number = number;
            else
                number += this.props.number[i];
        }
        let numberFinal = 'tel:' + number;
        
        return(
            <>
                <div id="logo">MotionM5</div>
                <div id="inforHeader">
                    <a href={numberFinal}>{this.props.number}</a>
                    <a id="emailBox" href={email}>{this.props.email}</a>
                    <a href="#section8">Let's talk</a>
                </div>
            </>
            
        );
    }
}