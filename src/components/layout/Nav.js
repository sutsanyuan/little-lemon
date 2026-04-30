import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
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
