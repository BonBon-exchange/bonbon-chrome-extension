import { ButtonProps, Button as B } from "@mui/material";

import "./style.scss";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <B {...props} className={[props.className, "Button__primary"].join(" ")}>
      {props.children}
    </B>
  );
};
