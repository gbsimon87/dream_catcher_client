import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const SingleDreamPage = (props) => {
  const [dreamIndex, setDreamIndex] = useState(0);
  const correctDream = props.dreams[dreamIndex] || [];

  useEffect(() => {
    const index = props.dreams.findIndex(
      (dream) => dream._id === props.dreamId
    );
    setDreamIndex(index);
  }, [props.dreams, props.dreamId]);

  if (!correctDream) {
    return <p>No dream found</p>;
  } else {
    return (
      <Container>
        <Icon
          style={{ cursor: "pointer" }}
          name="arrow left"
          onClick={() => props.navigate("/dreams")}
        >
          {" "}
          Back
        </Icon>
        <Header>{correctDream.title}</Header>
        <p>{correctDream.keywords}</p>
        <p>{correctDream.body}</p>
      </Container>
    );
  }
};

SingleDreamPage.propTypes = {
  dreams: PropTypes.array,
  dreamId: PropTypes.string,
};

SingleDreamPage.defaultProps = {
  dreams: [],
  dreamId: "123",
};

export default SingleDreamPage;
