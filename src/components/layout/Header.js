import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import logo from "../../assets/logo.png";
import "./Header.scss";

export default function Header() {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        //初始化執行一次
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        if (window.innerWidth < 768) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <header>
            <div className="container">
                <img src={logo} alt="Little Lemon Logo" />
                {window.innerWidth < 768 && (
                    <button className="toggle-menu" onClick={toggleMenu} aria-label="Toggle Menu">
                        ☰
                    </button>
                )}

                {isOpen && <Nav />}
            </div>
        </header>
    );
}
