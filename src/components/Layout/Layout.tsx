import { LayoutProps } from "./types";

import "./style.scss";

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div id="Layout__container">
      <div className="Layout__header">{title}</div>
      <div className="Layout__content">{children}</div>
    </div>
  );
};
