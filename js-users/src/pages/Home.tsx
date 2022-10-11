import React, { useState, useEffect } from "react";
import { usersApi } from "../api/usersApi";

const Home = () => {
  const { get } = usersApi();

  const getUsers = async () => {
    const resp = await get("/users");
    if (resp?.status === 200) {
      console.log(resp.data);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return <div>Home</div>;
};

export default Home;
