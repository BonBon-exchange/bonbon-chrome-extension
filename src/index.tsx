import { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "App";
import Login from "routes/Login";
import Collections from "routes/Collections";

import { AddToCollection } from "views/AddToCollection";
import { LoginWithCredentials } from "views/LoginWithCredentials";
import { PairWithBonBon } from "views/PairWithBonBon";
import { Register } from "views/Register";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const Home = lazy(() => import("./routes/Home"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="popup.html" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="collections" element={<Collections />}>
          <Route path="add" element={<AddToCollection />} />
        </Route>
        <Route path="login" element={<Login />}>
          <Route path="pair" element={<PairWithBonBon />} />
          <Route path="credentials" element={<LoginWithCredentials />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
