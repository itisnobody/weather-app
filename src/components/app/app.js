import React from "react";

import './app.scss';
import Header from "../header";
import Main from "../main";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className={"container"}>
        <Main />
      </div>
    </div>
  );
};