import React from "react";
import "./style.css";
import { navigations } from "./navigationPaths";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={"header-wrapper"}>
      <h3>Tutorial</h3>
      <div className={"links-wrap"}>
        {navigations.map((item) => (
          <Link to={item.path}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
