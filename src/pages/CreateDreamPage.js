import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Form, Header, Icon } from "semantic-ui-react";

const CreateDream = (props) => {
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDreamData = {
      title,
      keywords,
      body,
    };

    props.handlePostDream(newDreamData);
  };

  return (
    <Container>
      <Icon
        style={{ cursor: "pointer" }}
        name="arrow left"
        onClick={() => props.handleGoBack("/dreams")}
      >
        {" "}
        Back
      </Icon>
      <Header as="h1">Create a new dream</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Title: </label>
          <input
            placeholder="Title of your dream"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Keywords: </label>
          <input
            placeholder="Keywords related to your dream"
            name="keywords"
            value={keywords}
            onChange={(event) => setKeywords(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Body: </label>
          <input
            placeholder="The content of your dream"
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

CreateDream.propTypes = {
  navigate: PropTypes.func,
  handlePostDream: PropTypes.func,
  handleGoBack: PropTypes.func,
};

CreateDream.defaultProps = {
  handlePostDream: () => {},
  handleGoBack: () => {},
};

export default CreateDream;
