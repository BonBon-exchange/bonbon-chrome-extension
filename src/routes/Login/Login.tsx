import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { PairWithBonBon } from "views/PairWithBonBon";

import "./style.scss";

export const Login: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState<null | React.ReactElement>(null);

  useEffect(() => {
    switch (params.view) {
      default:
        setView(null);
        break;

      case "pair":
        setView(<PairWithBonBon />);
        break;
    }
  }, [params.view]);

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
          Login with username/password
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
      <Layout title="Login">
        {view ? (
          <>
            {view}
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
      </Layout>
    </>
  );
};
