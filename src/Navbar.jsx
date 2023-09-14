import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li className="linkitem">
                        <Link className="linkcontent" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="linkitem">
                        <Link className="linkcontent" to="/tictactoe">
                            TicTacToe
                        </Link>
                    </li>
                    <li className="linkitem">
                        <Link className="linkcontent" to="/paint">
                            Paint
                        </Link>
                    </li>
                    <li className="linkitem">
                        <Link className="linkcontent" to="/clicker">
                            Clicker
                        </Link>
                    </li>
                    <li className="linkitem">
                        <Link className="linkcontent" to="/Clock">
                            Clock
                        </Link>
                    </li>
                    <li className="linkitem">
                        <Link className="linkcontent" to="/Chart">
                            Chart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;