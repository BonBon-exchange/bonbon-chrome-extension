import { Outlet, useNavigate } from "react-router-dom";

import { Button } from "components/Button";
import { Layout } from "components/Layout";

import "./style.scss";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout title="Home">
        <div id="Home__container">
          <Button
            size="small"
            variant="contained"
            onClick={() => navigate("/collections/add")}
          >
            Add current tab to a collection
          </Button>
          <Outlet />
        </div>
      </Layout>
    </>
  );
};
