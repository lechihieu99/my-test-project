import React, { Component } from "react";
import {BiCircle} from 'react-icons/bi'
export default class Section2 extends Component {
    render() {
        return(
            <section id="section2">
                <div id="picSection2"></div>
                <div id="contentSection2">
                    <div id="titleSection2">What does our studio do</div>
                    <div id="subSection2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, atque. Praesentium itaque saepe aliquam? Quaerat quasi veniam, quia, autem neque impedit.
                    <br/><br/>Capabilities in: 
                    <br/><BiCircle size={20}/>&emsp;Digital ads & marketing design
                    <br/><BiCircle size={20}/>&emsp;Motion graphics design
                    <br/><BiCircle size={20}/>&emsp;Illustration & infographic design
                    <br/><BiCircle size={20}/>&emsp;App and web product design
                    <br/><BiCircle size={20}/>&emsp;Brand identity design
                    <br/><BiCircle size={20}/>&emsp;Design & brand consulting</div>
                </div>
            </section>
        );
    }
}