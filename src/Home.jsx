import React from "react";
import Web from "../src/Images/img2.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return <>
        <Common name="Grow Your Business with" imgSrc={Web} visit="/service" btnName="Get Started" />
    </>
}

export default Home;