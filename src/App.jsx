import {Flex, Splitter} from "antd";
import Forms from "./Forms";
import Resume from "./Resume";
import "./App.css";
import {useEffect, useState} from "react";

let isResizeEventListenerSet = false;

const App = () => {
    const [isVertical, setIsVertical] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 576) setIsVertical(true);
        if (!isResizeEventListenerSet) {
            addEventListener("resize", () => {
                isResizeEventListenerSet = true;
                setIsVertical(window.innerWidth < 576);
            })
        }
    }, []);

    const [personalInfo, setPersonalInfo] = useState({
        "fullName" : "",
        "email" : "",
        "phone" : "",
        "summary" : ""
    })

    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const updatePersonalInfo = (property, value) => {
        setPersonalInfo({...personalInfo, [property] : value})
    }

    if (isVertical) {
        return <Flex vertical gap={"middle"}>
            <Forms
                updatePersonalInfo={updatePersonalInfo}
                educations={educations}
                setEducations={educations}
                experiences={experiences}
                setExperiences={setExperiences}
            />
            <Resume
                personalInfo={personalInfo}
                educations={educations}
                experiences={experiences}
            />
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
            <Forms
                updatePersonalInfo={updatePersonalInfo}
                educations={educations}
                setEducations={setEducations}
                experiences={experiences}
                setExperiences={setExperiences}
            />
        </Splitter.Panel>
        <Splitter.Panel resizable={!isVertical}>
            <Flex justify={"center"} align="center">
                <Resume
                    personalInfo={personalInfo}
                    educations={educations}
                    experiences={experiences}
                />
            </Flex>
        </Splitter.Panel>
    </Splitter>
};
export default App;
