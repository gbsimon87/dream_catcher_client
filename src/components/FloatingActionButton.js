import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "@reach/router";

const FoatingActionButton = () => (
  <Button
    style={{ zIndex: "1000", position: "fixed", bottom: "1em", right: "1em" }}
    size="massive"
    circular
    icon="add"
    as={Link}
    to="/dreams/create"
  />
);

export default FoatingActionButton;
