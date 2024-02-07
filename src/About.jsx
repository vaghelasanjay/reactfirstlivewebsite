import React from "react";
import Web from '../src/Images/hero-img.png'
import Common from "./Common";

const About = () => {
    return <>
        <Common name="Welcome To About p\Page"
            imgSrc={Web}
            visit="/contact"
            btnName="Contact Now" />
    </>
}

export default About;