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
            className={clsx("App__menu-item", "text-link", {
              "App__menu-item-selected":
                location.pathname.indexOf("/popup.html") === 0,
            })}
          >
            Home
          </div>
        </Link>
        <Link to="/login">
          <div
            className={clsx("App__menu-item", "text-link", {
              "App__menu-item-selected":
                location.pathname.indexOf("/login") === 0,
            })}
          >
            Login
          </div>
        </Link>
        <Link to="/collections">
          <div
            className={clsx("App__menu-item", "text-link", {
              "App__menu-item-selected":
                location.pathname.indexOf("/collections") === 0,
            })}
          >
            Collections
          </div>
        </Link>
        <Link to="/data">
          <div
            className={clsx("App__menu-item", "text-link", {
              "App__menu-item-selected":
                location.pathname.indexOf("/data") === 0,
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
