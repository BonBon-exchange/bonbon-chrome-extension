import { useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";

import "./style.scss";

export const PairWithBonBon: React.FC = () => {
  const [token, setToken] = useState<string>("");

  const onSubmit = () => {
    console.log(token);
  };

  return (
    <>
      <a href="bonbon://pair" className="text-link">
        Generate a token on BonBon Browser
      </a>{" "}
      and submit it.
      <div id="PairWithBonBon__form">
        <Input
          size="small"
          name="token"
          className="PairWithBonBon__token-input"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Button size="small" variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};
