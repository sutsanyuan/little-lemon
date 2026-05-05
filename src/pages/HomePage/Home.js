import React from "react";
import "./Home.scss";
import pinImage from "../../assets/icons/location.svg";

export default function Home() {
    return (
        <main>
            <section className="hero-section">
                <div className="container">
                    <div>
                        <div>
                            <h1 className="display-title">Little Lemon </h1>
                            <h2 className="sub-heading">
                                <img src={pinImage} alt="pin icon"></img>chicago
                            </h2>
                            <p>
                                Welcome to our Mediterranean restaurant, where tradition meets
                                modern flair. Discover rich Mediterranean flavors!
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
