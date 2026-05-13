import React, { useRef } from "react";
import "./Carousel.scss";

export default function Carousel({ children }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 320; //每次滾動的距離 (卡片寬 + gap)
        if (direction === "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };
    return (
        <div className="carousel-wrapper">
            {/* 左右切換按鈕 */}
            <div className="carousel-controls">
                <button onClick={() => scroll("left")}>〈</button>
                <button onClick={() => scroll("right")}>〉</button>
            </div>

            {/* 滑動區域 */}
            <div className="carousel-container" ref={scrollRef}>
                {React.Children.map(children, (child) => (
                    <div className="carousel-item">{child}</div>
                ))}
            </div>
        </div>
    );
}
