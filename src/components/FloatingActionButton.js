import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { Link } from "@reach/router";

const FoatingActionButton = (props) => (
  <Button
    style={{ zIndex: "1000", position: "fixed", bottom: "1em", right: "1em" }}
    size="massive"
    circular
    icon="add"
    onClick={() => props.handleClickActionButton("/dreams/create")}
    as={Link}
    to="/dreams/create"
  />
);

FoatingActionButton.propTypes = {
  handleClickActionButton: PropTypes.func,
};

FoatingActionButton.defaultProps = {
  handleClickActionButton: () => console.log("handleClickActionButton"),
};

export default FoatingActionButton;
