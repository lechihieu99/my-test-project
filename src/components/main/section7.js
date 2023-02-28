import React, { Component } from "react";
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
export default class Section7 extends Component {
    render() {
        return(
            <section id="section8">
                <div id="imageSection7"></div>
                <div id="contentBoxSection7">
                    <div id="titleSection7">The hassle-free design starts here</div>
                    <div id="content">
                    Subscribe to newsletter <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quas deleniti nihil, porro nulla, atque dicta placeat architecto ratione delectus, voluptas, reiciendis quo laboriosam voluptatum ad quasi hic recusandae laudantium dolore. Repellat sit provident quae consequatur facilis eum eveniet nobis molestias.<br/>

                    <br/>Nihil quia quas quaerat natus eos delectus culpa nulla tempore ipsa ad libero nesciunt asperiores cum earum odio similique dolore. Voluptate minus atque nostrum, nobis totam fuga, aperiam quis.<br/>

                    <br/>Follow Us!<a href="http://facebook.com"><BsFacebook id="icon"/></a> <a href="http://instagram.com"><AiFillInstagram id="icon" /></a> <a href="http://twitter.com"><BsTwitter id="icon" /></a> <br />

  
                    <br/>Exclusive offers in your inbox

                    <br/>Lorem ipsum dolor sit amet.
                    </div> 
                    <input type='text' placeholder="  Your email address...."></input>
                    <button id="buttonSection7">Subscribe</button>
                </div>
            </section>
        );
    }
}