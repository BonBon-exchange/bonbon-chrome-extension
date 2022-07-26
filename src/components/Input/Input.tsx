import { InputProps, Input as I } from "@mui/material";

import "./style.scss";

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <I {...props} className={[props.className, "Input__primary"].join(" ")} />
    </>
  );
};
