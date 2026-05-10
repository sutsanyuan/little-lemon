import React from "react";
import "./Home.scss";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function Home() {
    return (
        <main>
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
        </main>
    );
}
