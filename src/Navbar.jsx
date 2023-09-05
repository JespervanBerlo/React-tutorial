import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
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
                    <li class="linkitem">
                        <Link class="linkcontent" to="/paint">
                            Paint
                        </Link>
                    </li>
                    <li class="linkitem">
                        <Link class="linkcontent" to="/clicker">
                            Clicker
                        </Link>
                    </li>
                    <li class="linkitem">
                        <Link class="linkcontent" to="/Clock">
                            Clock
                        </Link>
                    </li>
                    <li class="linkitem">
                        <Link class="linkcontent" to="/Chart">
                            Chart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;