import React, { useState } from "react";

import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { PairWithBonBon } from "views/PairWithBonBon";

import "./style.scss";

export const Login: React.FC = () => {
  const [view, setView] = useState<null | React.ReactElement>(null);

  const LoginMenu: React.FC = () => {
    return (
      <div id="LoginMenu__container">
        <Button
          size="small"
          variant="contained"
          onClick={() => setView(<PairWithBonBon />)}
        >
          Pair with BonBon Browser
        </Button>
        <Button size="small" variant="contained">
          Login with username/password
        </Button>
        <Button size="small" variant="contained">
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
                onClick={() => setView(null)}
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
