import React from "react";
import ReactDom from "react-dom/client";
import "./Header.css";
// Assuming you have an image in the images folder

import "./Header.css"; // Assuming you have a CSS file for styling
function Header(props) {
  return (
    <div className="header">
      <div className="Box">
        <div className="photo-img">
          <img src={props.image} alt="Bello Photo" />
          <div className="green-tick"></div>
        </div>
      </div>
      {/* <div className="header-text-box">
        <h1 className="header_name">{props.name}</h1>
      </div> */}
    </div>
  );
}

export default Header;
