import { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import "./style/dark.scss";
import "./App.scss";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    window.document.querySelector("body").className = "dark-theme";
  });

  return (
    <div id="App">
      <div id="App__menu">
        <Link to="/popup.html">
          <div
            className={clsx("App__menu-item", {
              "App__menu-item-selected": location.pathname === "/popup.html",
            })}
          >
            Home
          </div>
        </Link>
        <Link to="/login">
          <div
            className={clsx("App__menu-item", {
              "App__menu-item-selected": location.pathname === "/login",
            })}
          >
            Login
          </div>
        </Link>
        <Link to="/collections">
          <div
            className={clsx("App__menu-item", {
              "App__menu-item-selected": location.pathname === "/collections",
            })}
          >
            Collections
          </div>
        </Link>
        <Link to="/data">
          <div
            className={clsx("App__menu-item", {
              "App__menu-item-selected": location.pathname === "/data",
            })}
          >
            Data
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
