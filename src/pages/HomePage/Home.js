import React from "react";
import "./Home.scss";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import OurStory from "./OurStory";

export default function Home() {
    return (
        <main>
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <OurStory></OurStory>
        </main>
    );
}
