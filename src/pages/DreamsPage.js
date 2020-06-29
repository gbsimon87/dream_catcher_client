import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Item } from "semantic-ui-react";

import FloatingActionButton from "../components/FloatingActionButton";
import DreamCard from "../components/DreamCard";

const DreamsPage = ({
  dreams = [],
  handleDeleteDream,
  handleClickActionButton,
}) => {
  if (!dreams) return <Header as="h1">No dreams found</Header>;
  return (
    <Container>
      <FloatingActionButton handleClickActionButton={handleClickActionButton} />
      <Header as="h1">Dreams List</Header>
      <Item.Group divided>
        {dreams &&
          dreams.map((item) => (
            <DreamCard
              key={item._id}
              data={item}
              handleDeleteDream={handleDeleteDream}
            />
          ))}
      </Item.Group>
    </Container>
  );
};

DreamsPage.propTypes = {
  dreams: PropTypes.array,
  handleDeleteDream: PropTypes.func,
  handleClickActionButton: PropTypes.func,
};

DreamsPage.defaultProps = {
  dreams: [],
  handleDeleteDream: () => console.log("handleDeleteDream"),
  handleClickActionButton: () => console.log("handleClickActionButton"),
};

export default DreamsPage;
