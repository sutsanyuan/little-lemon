import React from "react";
import "./Footer.scss";
import logo from "../../assets/icons/littleLemon_squareLogo_w.svg";
import logo_pin from "../../assets/icons/Map_pin.svg";
import logo_phone from "../../assets/icons/Phone.svg";
import logo_mail from "../../assets/icons/Mail.svg";
import Nav from "./Nav";
import logo_ig from "../../assets/icons/instagram.svg";
import logo_fb from "../../assets/icons/Facebook.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon" />
                </div>

                <div className="footer-section" aria-label="Footer Navigation">
                    <h6>Doormat Navigation</h6>
                    <Nav />
                </div>
                <section className="footer-section">
                    <h6>Contact</h6>
                    <ul className="contact-list">
                        <li>
                            <img src={logo_pin} alt="Address" />
                            <span>1340 W Fulton St, Chicago, IL 60607 USA</span>
                        </li>
                        <li>
                            <img src={logo_phone} alt="Phone" />
                            <a href="tel:+1000000000">+1 000 000 000</a>{" "}
                            {/* 💡 電話用 a 標籤點擊可撥打 */}
                        </li>
                        <li>
                            <img src={logo_mail} alt="Email" />
                            <a href="mailto:little-lemon@gmail.com">little-lemon@gmail.com</a>{" "}
                            {/* 💡 信箱用 a 標籤 */}
                        </li>
                    </ul>
                </section>
                <section className="footer-section">
                    <h6>Social Media</h6>
                    {/* 💡 社群橫排，用 ul 包起來最好排版 */}
                    <ul className="social-links">
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img src={logo_ig} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={logo_fb} alt="Facebook" />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}
