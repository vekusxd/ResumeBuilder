import {Flex, Splitter} from "antd";
import Forms from "./Forms";
import Resume from "./Resume";
import "./App.css";
import {useEffect, useState} from "react";

let isResiseEventListenerSet = false;

const App = () => {
    const [isVertical, setIsVertical] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 576) setIsVertical(true);
        if (!isResiseEventListenerSet) {
            addEventListener("resize", () => {
                isResiseEventListenerSet = true;
                setIsVertical(window.innerWidth < 576);
                console.log("less than 576px")
            })
        }
    }, []);
    if (isVertical) {
        return <Flex vertical gap={"middle"}>
            <Forms/>
            <Resume/>
        </Flex>
    }
    return <Splitter
        style={{
            minHeight: "100vh",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        layout={isVertical ? "vertical" : "horizontal"}
    >
        <Splitter.Panel defaultSize="50%" min="35%" max="70%" resizable={!isVertical}>
            <Forms/>
        </Splitter.Panel>
        <Splitter.Panel resizable={!isVertical}>
            <Resume/>
        </Splitter.Panel>
    </Splitter>
};
export default App;
