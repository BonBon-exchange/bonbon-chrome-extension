import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import { Button } from "components/Button";
import { Layout } from "components/Layout";

import "./style.scss";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const [title, setTitle] = useState<string>("Login");

  useEffect(() => {
    switch (location.pathname) {
      default:
        setTitle("Login");
        break;

      case "/login/pair":
        setTitle("Pair with BonBon Browser");
        break;

      case "/login/credentials":
        setTitle("Login");
        break;

      case "/login/register":
        setTitle("Register");
        break;
    }
  }, [location.pathname]);

  const LoginMenu: React.FC = () => {
    return (
      <div id="LoginMenu__container">
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate("/login/pair")}
        >
          Pair with BonBon Browser
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate("/login/credentials")}
        >
          Login with credentials
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate("/login/register")}
        >
          Register
        </Button>
      </div>
    );
  };

  return (
    <>
      <Layout title={title}>
        <>
          {location.pathname !== "/login" ? (
            <>
              <Outlet />
              <div className="Login__go-back-container">
                <div
                  className="Login__go-back text-link"
                  onClick={() => navigate("/login")}
                >
                  Go back
                </div>
              </div>
            </>
          ) : (
            <LoginMenu />
          )}
        </>
      </Layout>
    </>
  );
};
