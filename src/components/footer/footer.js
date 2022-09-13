import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className={"footer-wrapper"}>
      &copy; <b>Hamro Patro {new Date().getFullYear()}</b> All right reserved.
    </div>
  );
}

export default Footer;
