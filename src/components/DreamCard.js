import React from "react";
import PropTypes from "prop-types";
import { Header, Icon, Item } from "semantic-ui-react";
import { Link } from "@reach/router";

import { truncate } from "../utils/index";

const DreamCard = ({ data, handleDeleteDream }) => (
  <>
    <Item
      style={{
        position: "relative",
        padding: 0,
        paddingTop: "1em",
      }}
    >
      <Item.Content as={Link} to={`/dreams/${data._id}`}>
        <Header>{data.title}</Header>
        <Item.Meta>
          <span className="cinema">{data.keywords}</span>
        </Item.Meta>
        <Item.Description>{truncate(data.body, 50)}</Item.Description>
      </Item.Content>
      <Icon
        style={{ position: "absolute", top: "1em", right: 0 }}
        link
        name="close"
        onClick={() => handleDeleteDream(data._id)}
      />
    </Item>
  </>
);

DreamCard.propTypes = {
  data: PropTypes.object,
  handleDeleteDream: () => {},
};

DreamCard.defaultProps = {
  data: {},
  handleDeleteDream: () => {},
};

export default DreamCard;
