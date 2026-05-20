import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ onLinkClick }) {
    return (
        <nav>
            {/* onLinkClick 可以個別綁在li，也可以直街綁在外層ul > Event Bubbling */}
            <ul onClick={onLinkClick}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>Menu</li>
                <li>
                    <Link to="/reservation">Reservations</Link>
                </li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}
