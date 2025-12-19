import { Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
    return (
        <>
            <header>
                <div>{"Ryan Joo"}</div>

                <nav>
                    <Link to="/">{"Home"}</Link>
                    {" | "}
                    <Link to="/projects">{"Projects"}</Link>
                    {" | "}
                    <Link to="/notes">{"Notes"}</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
