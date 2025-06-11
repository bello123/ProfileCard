import React from "react";
import ReadctDom from "react-dom/client";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <>
      <div className="profile-card">
        <Header name="Iyemifokhae Bello" image="images/bello.jpg" />
        <Main para="A well renowned Frontend Development Enginner in Nigeria" />
      </div>
    </>
  );
}

export default App;
