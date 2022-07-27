import { Outlet } from "react-router-dom";

import { Layout } from "components/Layout";

import "./style.scss";

export const Collections: React.FC = () => {
  return (
    <>
      <Layout title="Collections">
        <Outlet />
      </Layout>
    </>
  );
};
