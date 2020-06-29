import React, { useEffect } from "react";
import { redirectTo } from "@reach/router";

const Home = () => {
  useEffect(() => {
    redirectTo("/dreams");
  }, []);
  return <div>Sending you to dreams page...</div>;
};

export default Home;
