import React, { Component } from "react";

class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="boxContentSection8">
                <div id="titleBoxSection8">{this.props.title}</div>
                <div id="hastagSection8">{this.props.hastag}</div>
                <div id="imageBoxSection8"></div>
            </div>
        );
    }
}
export default class Section8 extends Component {
    render() {
        return(
            <section>
                <div id="titleContentSection8">
                    <div id="leftSection8">
                        <div id="text1Section8">MOTION GRAPHICS STUDIO -</div>
                        <div id="text2Section8">Recent Works</div>
                    </div>
                    <div id="rightSection8">Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Sint quasi perferendis cum tempore placeat necessitatibus odit totam reiciendis, mollitia repellat ipsum aut consequuntur ipsam voluptatem delectus distinctio ea deserunt natus.</div>
                </div>
                <div id="boxSection8">
                    <Box title='GRAPHIC DESIGN' hastag='#GALAXY' />
                    <Box title='PHOTO DESIGN' hastag='#SIMPLE' />
                    <Box title='BRAND STUDIO' hastag='#MOTION' />
                    <Box title='CONCEPT ART' hastag='#NEON' />
                </div>
            </section>
        );
    }
}