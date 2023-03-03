import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import HelloComp from "./components/HelloComp";
// import HeyComp from "./components/HeyComp";
import MyHelloComp from "./components/MyHelloComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyHelloComp
      dtia="Thailand"
      dtib="https://icons.iconarchive.com/icons/iconarchive/realistic-fruits/128/Banana-icon.png"
    />
    <MyHelloComp
      dtia="Japan"
      dtib="https://icons.iconarchive.com/icons/iconarchive/realistic-fruits/128/Banana-icon.png"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
