import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { format, addHours, parseISO } from "date-fns";
import { QRCodeSVG } from "qrcode.react";
import CheckIcon from "../../assets/icons/Success.svg";
import BookingSummary from "./BookingSummary";

export default function Step3({ formData }) {
    const navigate = useNavigate();
    const bookingId = useMemo(() => {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }, []);
    // 輔助函式：產生 Google 日曆連結
    const getGoogleCalendarLink = (formData) => {
        // 1. 使用 date-fns 的 parseISO 將你的字串轉為真正的 Date 物件
        // 如果 formData.date 已經是 ISO 字串，直接 parse 即可
        const startDate = parseISO(formData.date);
        const endDate = addHours(startDate, 1); // 加上 1 小時

        // 2. 將日期格式化為 Google Calendar 需要的格式 (YYYYMMDDTHHMMSSZ)
        const formatForGoogle = (date) => format(date, "yyyyMMdd'T'HHmmss'Z'");

        const start = formatForGoogle(startDate);
        const end = formatForGoogle(endDate);

        const title = encodeURIComponent("Reservation at Little Lemon");
        const details = encodeURIComponent(`Booking ID: ${formData.bookingId}`);

        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${start}/${end}`;
    };

    return (
        <div className="confirmation-box">
            <img src={CheckIcon} alt="success icon"></img>
            <h1>Thank You!</h1>
            <h2>{}Your reservation is confirmed!</h2>
            <p className="table-number">
                Your table number:<strong>{bookingId}</strong>
            </p>
            <QRCodeSVG
                className="QRCode"
                value={bookingId}
                size={200}
                level={"H"} // 容錯率設高一點，掃描較準
                includeMargin={true}
            />

            {/* QR Code 會自動根據你傳入的 value 產生 */}

            <BookingSummary formData={formData}></BookingSummary>
            <div className="button-group">
                <a
                    href={getGoogleCalendarLink(formData)}
                    target="_blank"
                    rel="noreferrer"
                    className="formBtn secondary"
                    aria-label="On Click">
                    Add to Calendar
                </a>
                <button className="formBtn" onClick={() => navigate("/")} aria-label="On Click">
                    Back to Home
                </button>
            </div>
        </div>
    );
}
