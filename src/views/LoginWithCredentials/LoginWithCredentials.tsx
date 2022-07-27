import { Button } from "components/Button";
import { Input } from "components/Input";

import "./style.scss";

export const LoginWithCredentials: React.FC = () => {
  return (
    <>
      <div className="View__title">Login with credentials</div>
      <div id="LoginWithCredentials__container">
        <Input name="username" placeholder="Username" />
        <Input name="password" type="password" placeholder="Password" />
        <Button size="small" variant="contained">
          Submit
        </Button>
      </div>
    </>
  );
};
