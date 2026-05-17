import React from "react";
import style from "./Album.module.scss";
export default function Album({ image, title }) {
    return (
        <picture className={style.album}>
            <img src={image} alt={title}></img>
        </picture>
    );
}
