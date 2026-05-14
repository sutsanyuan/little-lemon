import React from "react";
import styles from "./TestimonialCard.module.scss";
import starImage from "../../assets/icons/star.svg";

export default function TestimonialCard({ image, name, point, comment }) {
    return (
        <article className={styles["special-card"]}>
            <div className={styles["card-header"]}>
                <figure>
                    <picture className={styles["portrait-image"]}>
                        <img src={image} alt={name} />
                    </picture>
                    <h4>{name}</h4>
                </figure>
                <div className={styles["stars"]}>
                    <div>
                        <img src={starImage} alt="star" />
                    </div>
                    <span>{point}</span>
                </div>
            </div>
            <p className={(styles["comment"], "paragraph-text")}>{comment}</p>
        </article>
    );
}
