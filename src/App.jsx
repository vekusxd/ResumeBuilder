import React from "react";
import { Flex, Splitter, Typography } from "antd";
import Forms from "./Forms";
import Resume from "./Resume";
import "./App.css";
const Desc = (props) => (
  <Flex
    justify="center"
    align="center"
    style={{
      height: "100%",
    }}
  >
    <Typography.Title
      type="secondary"
      level={5}
      style={{
        whiteSpace: "nowrap",
      }}
    >
      {props.text}
    </Typography.Title>
  </Flex>
);
const App = () => (
  <Splitter
    style={{
      minHeight: "100vh",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Splitter.Panel defaultSize="50%" min="35%" max="70%">
      <Forms />
    </Splitter.Panel>
    <Splitter.Panel>
      <Resume />
    </Splitter.Panel>
  </Splitter>
);
export default App;
