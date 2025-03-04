import {Flex, Splitter} from "antd";
import Forms from "./Forms";
import Resume from "./Resume";
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
        "fullName": "", "email": "", "phone": "", "summary": ""
    })

    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const updatePersonalInfo = (property, value) => {
        setPersonalInfo({...personalInfo, [property]: value})
    }

    const form = (<Forms
            updatePersonalInfo={updatePersonalInfo}
            educations={educations}
            setEducations={setEducations}
            experiences={experiences}
            setExperiences={setExperiences}
        />);

    const resume = (<Resume
            personalInfo={personalInfo}
            educations={educations}
            experiences={experiences}
        />);

    if (isVertical) {
        return <Flex vertical gap={"middle"}>
            {form}
            {resume}
        </Flex>
    }
    return <Splitter
        style={{
            minHeight: "100vh",
        }}
        layout={isVertical ? "vertical" : "horizontal"}
    >
        <Splitter.Panel defaultSize="50%" min="35%" max="70%" resizable={!isVertical}>
            {form}
        </Splitter.Panel>
        <Splitter.Panel resizable={!isVertical}>
            <Flex justify={"center"} align="center">
                {resume}
            </Flex>
        </Splitter.Panel>
    </Splitter>
};

export default App;

