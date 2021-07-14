import React from "react";
import Navbar from "../components/Navbar/Navbar.components";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.componets";
const DefaultLayout= (props)=>{
    return (
        <>
            <Navbar/>
            <HeroCarousal/>
            {props.children}
        </>
    )


}

export default DefaultLayout;