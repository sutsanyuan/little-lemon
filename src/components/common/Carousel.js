import React, { useRef, useState, useEffect } from "react";
import "./Carousel.scss";

export default function Carousel({ children, showButtons = true, showDots = true }) {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // 記憶備份變數
    const isDown = useRef(false);
    const startX = useRef(0);
    const startScrollRef = useRef(0);

    //  處理滾動時動態計算點點 (依據卡片寬度)
    const handleScroll = () => {
        if (!scrollRef.current) return;

        const { scrollLeft } = scrollRef.current;
        // 抓出第一張卡片來計算寬度
        const firstItem = scrollRef.current.querySelector(".carousel-item");

        if (firstItem) {
            const itemWidth = firstItem.offsetWidth + 20; // 20 是 SCSS 的 gap
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        }
    };

    // 只保留滑鼠「點下」在容器內觸發
    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;
        isDown.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        startScrollRef.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = "grabbing";
    };

    // 用 useEffect 監聽全域的「移動」與「放開」
    useEffect(() => {
        const handleGlobalMouseMove = (e) => {
            if (!isDown.current || !scrollRef.current) return;
            e.preventDefault(); // 阻止瀏覽器預設的文字選取行為

            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX.current) * 1.5; // 1.5 倍靈敏度
            scrollRef.current.scrollLeft = startScrollRef.current - walk;
        };

        const handleGlobalMouseUpOrLeave = () => {
            if (!isDown.current) return;
            isDown.current = false;
            if (scrollRef.current) {
                scrollRef.current.style.cursor = "grab";
            }
        };

        // 註冊全域事件：哪怕滑鼠移到網頁最上方、甚至視窗外，都能捕捉到
        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("mouseup", handleGlobalMouseUpOrLeave);

        // ⚠️ 終極重要：清除機制 (Cleanup)
        // 當組件被銷毀時，一定要把全域監聽器拔掉，否則會造成記憶體洩漏 (Memory Leak)
        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("mouseup", handleGlobalMouseUpOrLeave);
        };
    }, []); // 空陣列代表只在網頁初始掛載時執行一次

    // 按鈕控制邏輯
    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const firstItem = scrollRef.current.querySelector(".carousel-item");
        if (firstItem) {
            const scrollAmount = firstItem.offsetWidth + 20;
            scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
        }
    };

    return (
        <div className="carousel-outer">
            {showButtons && (
                <div className="carousel-controls">
                    <button onClick={() => scroll("left")}>〈</button>
                    <button onClick={() => scroll("right")}>〉</button>
                </div>
            )}

            <div
                className="carousel-container"
                ref={scrollRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                style={{ cursor: "grab" }}>
                {React.Children.map(children, (child) => (
                    <div className="carousel-item">{child}</div>
                ))}
            </div>

            {showDots && (
                <div className="carousel-dots">
                    {React.Children.map(children, (_, index) => (
                        <span
                            key={index}
                            className={`dot ${activeIndex === index ? "active" : ""}`}
                            onClick={() => {
                                const firstItem =
                                    scrollRef.current?.querySelector(".carousel-item");
                                if (firstItem) {
                                    const itemWidth = firstItem.offsetWidth + 20;
                                    scrollRef.current.scrollLeft = index * itemWidth;
                                }
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
