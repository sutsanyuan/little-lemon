import React from "react";
import Nav from "./Nav";
import logo from "./assets/logo.png";
import "./styles/Header.scss";

export default function Header() {
    return (
        <header>
            <div className="container">
                <img src={logo} alt="Little Lemon Logo" />
                <Nav />
            </div>
        </header>
    );
}
