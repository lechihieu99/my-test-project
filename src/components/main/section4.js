import React, { Component } from "react";
import YouTube from "react-youtube";
import {ImCancelCircle} from 'react-icons/im';
export default class Section4 extends Component {
    render() {
        const opts = {
            width: '100%'
        }
        function openVideo() {
            let boxYoutube = document.getElementById('boxYoutube');
            let menuBar = document.getElementById('iconMenu');
            menuBar.classList.add('active');
            boxYoutube.classList.add('active');
        }
        function closeVideo() {
            let boxYoutube = document.getElementById('boxYoutube');
            let menuBar = document.getElementById('iconMenu');
            menuBar.classList.remove('active');
            boxYoutube.classList.remove('active');
        }
        return(
            <>
            <section id="section4">
                
                <div id="picSection4">
                    <div id="titleSection4">
                        MOTION GRAPHICS STUDIO SHOW
                    </div>
                    <div id="buttonWatch" onClick={openVideo}>Watch</div>
                </div>
               
                <div id="boxYoutube">
                    <YouTube id='video' videoId="0A1kXSjZAXQ" opts={opts}/>
                    <ImCancelCircle onClick={closeVideo} id="cancelButton" size={50}/>
                </div>
            </section>
            
            </>
            
        );
    }
}