import React from "react";
import "./Home.scss";
import pinImage from "../../assets/icons/location.svg";
import calanderIcon from "../../assets/icons/today.svg";
import Button from "../../components/common/Button";
export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div>
                    <div>
                        <h1 className="display-title">Little Lemon </h1>
                        <h2 className="sub-heading">
                            <img src={pinImage} alt="pin icon"></img>chicago
                        </h2>
                        <p>
                            Welcome to our Mediterranean restaurant, where tradition meets modern
                            flair. Discover rich Mediterranean flavors!
                        </p>
                        <Button
                            className="mt-1"
                            icon={calanderIcon}
                            backgroundColor="primary-lemon"
                            to="/reservation">
                            Book a Table
                        </Button>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}
