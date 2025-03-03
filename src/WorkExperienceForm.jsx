import {Collapse, Form, Input, Flex, Button} from "antd";
import {SolutionOutlined, PlusOutlined} from "@ant-design/icons";
import ExperienceEntry from "./Components/ExperienceEntry.jsx";

export function WorkExperienceForm({experiences, setExperiences}) {

    const addExperience = () => {
        setExperiences([...experiences, {"company": "", "position": "", "startDate": "", "endDate": "", "description" : ""}])
    }

    const changeExperience = (propertyName, value, index) => {
        setExperiences(experiences.map((exp, i) => {
            if (i !== index) return exp;
            return {...exp, [propertyName]: value};
        }))
    }

    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[
            {
                key: "1",
                label: <>
                    <SolutionOutlined style={{marginRight: "8px"}}/>
                    Work Experience
                </>,
                children: <Flex vertical gap={"middle"}>
                    {experiences.map((edu, index) => <ExperienceEntry key={index} index={index} onType={changeExperience}
                                                                    onRemoveClicked={() => {
                                                                        setExperiences(experiences.filter((e, i) => index !== i));
                                                                    }}/>)}
                    <Button  type={"primary"} size={"large"} onClick={addExperience}><PlusOutlined /> Add Experience</Button>
                </Flex>,
                showArrow: true,
                style: {
                    fontWeight: 600
                }
            },
        ]}
    />;
}