import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li class="linkitem">
                    <Link class="linkcontent" to="/">
                        Home
                    </Link>
                </li>
                <li class="linkitem">
                    <Link class="linkcontent" to="/tictactoe">
                        TicTacToe
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;