import { Button } from "components/Button";
import { Input } from "components/Input";

import "./style.scss";

export const Register: React.FC = () => {
  return (
    <>
      <div className="View__title">Register a new account</div>
      <div id="Register__container">
        <Input name="username" placeholder="Username" />
        <Input name="password" type="password" placeholder="Password" />
        <Button size="small" variant="contained">
          Submit
        </Button>
      </div>
    </>
  );
};
