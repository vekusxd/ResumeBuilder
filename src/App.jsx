import React from "react";
import { Splitter } from "antd";
import Forms from "./Forms";
import Resume from "./Resume";
import "./App.css";

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
