import React from "react";
import Button from "../../components/common/Button";
import MenuCard from "../../components/common/MenuCard";

import { specialsData } from "../../data/specialsData";

export default function Specials() {
    return (
        <section className="menu-section">
            <div className="container">
                <div className="row">
                    <h3 className="display-title">This weeks specials!</h3>
                    <Button backgroundColor="primary-lemon">Online Menu</Button>
                </div>

                <div className="menu-wrapper">
                    {specialsData.map((dish) => (
                        <MenuCard
                            key={dish.id}
                            image={dish.image}
                            title={dish.title}
                            price={dish.price}
                            description={dish.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
