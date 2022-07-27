import { Outlet } from "react-router-dom";

import { Layout } from "components/Layout";

import "./style.scss";

export const Data: React.FC = () => {
  return (
    <>
      <Layout title="Data">
        <Outlet />
      </Layout>
    </>
  );
};
