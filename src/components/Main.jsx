import React from "react";
import ReactDom from "react-dom/client";
import "./Main.css";

function Main(props) {
  return (
    <div>
      <main>
        <div></div>
        <h2>Iyemifokhae Bello</h2>
        <hr />
        <p>{props.para}</p>
        <button>{props.button}</button>
      </main>
    </div>
  );
}

export default Main;
