import React from "react";
import starImage from "../../assets/icons/star.svg";

export default function TestimonialCard({ image, name, point,comment }) {
    return (
        <article className="special-card">
            <div className="card-header">
                <figure>
                    <picture className="portrait-image">
                        <img src={image} alt={name} />
                    </picture>
                    <h4>{name}</h4>
                </figure>
                <div className="stars">
                    <div>
                        <img src={starImage} alt="star" />
                    </div>
                    <span>{point}</span>
                </div>
            </div>
            <p className="comment">{comment}</p>
        </article>
    );
}
