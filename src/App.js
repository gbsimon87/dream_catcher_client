import React, { useState, useEffect } from "react";
import { navigate, Router, Redirect } from "@reach/router";
import { Container } from "semantic-ui-react";

import CreateDream from "./pages/CreateDreamPage";
import DreamsPage from "./pages/DreamsPage";
import SingleDreamPage from "./pages/SingleDreamPage";
import MenuBar from "./components/MenuBar";
import { fetchData, deleteDream, postDream } from "./services";

const App = () => {
  const [data, setData] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const path = window.location.pathname;

  useEffect(() => {
    handleFetchData("http://localhost:4000/dreams");
  }, []);

  useEffect(() => {
    switch (path) {
      case "/dreams":
        setActiveMenuItem("dreams");
        break;
      case "/dreams/create":
        setActiveMenuItem("createDream");
        break;
      default:
        setActiveMenuItem("");
        break;
    }
  }, [path]);

  const handleDeleteDream = async (dreamId) => {
    try {
      await deleteDream(`http://localhost:4000/dreams/${dreamId}`);
      const newDreams = data.filter((dream) => dream._id !== dreamId);
      setData(newDreams);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostDream = async (data) => {
    try {
      const postedDream = await postDream("http://localhost:4000/dreams", data);
      handleUpdateData(postedDream);
      navigate("/dreams");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchData = async (url) => {
    try {
      const data = await fetchData(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateData = (newDreamData) => {
    const newDreams = [newDreamData, ...data];
    setData(newDreams);
  };

  const handleGoBack = (url) => {
    navigate(url);
    setActiveMenuItem(url);
  };

  const handleClickActionButton = (url) => {
    navigate(url);
    setActiveMenuItem(url);
  };

  return (
    <>
      <MenuBar activeItem={activeMenuItem} setActiveItem={setActiveMenuItem} />
      <Container>
        <Router>
          <Redirect noThrow from="/" to="dreams" />
          <CreateDream
            path="dreams/create"
            handlePostDream={handlePostDream}
            handleGoBack={handleGoBack}
          />
          <DreamsPage
            path="dreams"
            dreams={data}
            handleDeleteDream={handleDeleteDream}
            handleClickActionButton={handleClickActionButton}
          />
          <SingleDreamPage path="dreams/:dreamId" dreams={data} />
        </Router>
      </Container>
    </>
  );
};

export default App;
