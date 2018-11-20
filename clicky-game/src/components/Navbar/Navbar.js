import React from "react";
import "./Navbar.css";

const Navbar = (props)=> (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span><p>Score : {props.score}</p><p>Top Score : {props.totalscore}</p></span>
        </nav>


    );

export default Navbar;