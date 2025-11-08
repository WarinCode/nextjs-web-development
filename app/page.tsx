"use client";

import { CSSProperties } from "react";
import { Button, Alert } from "reactstrap";

const Home = () => {
  const parentDiv: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    minHeight: "100vh",
    backgroundColor: "white",
    flexDirection: "column",
  };

  const childDiv: CSSProperties = {
    color: "green",
    fontSize: "3rem",
    fontWeight: "bold",
  };

  return (
    <div style={parentDiv}>
      <Alert color="danger">แจ้งเตือน!</Alert>
      <Button color="primary" size="sm">
        Click me
      </Button>
      <div style={childDiv}>Text</div>
      <div className="text-3xl p-3 bg-pink-500 rounded-[50px] text-yellow-500">
        Hello Tailwind CSS
      </div>
    </div>
  );
};

export default Home;
