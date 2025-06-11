import React from "react";
import ReadctDom from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="profile-card">
        <Header name="Iyemifokhae Bello" image="images/bello.jpg" />
        <Main
          para="A well renowned Frontend Development Engineer in Nigeria"
          button="Follow"
        />
      </div>
    </>
  );
}

export default App;
