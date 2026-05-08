import React from "react";
import Button from "./Button";
import "./MenuCard.scss";
export default function MenuCard({ image, title, price, description, onBtnClick }) {
    return (
        <article className="special-card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3>{title}</h3>
                    <span className="price">${price}</span>
                </div>

                <p className="description">{description}</p>

                {/* 在這裡引用 Button 組件 */}
                <Button
                    showIcon={false} // 卡片裡的按鈕通常不帶 icon (如圖一)
                    onClick={onBtnClick}
                    className="card-button">
                    Order a Delivery
                </Button>
            </div>
        </article>
    );
}
