import {Button, Collapse, Flex} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import ExperienceFormEntry from "./Components/ExperienceFormEntry.jsx";
import {WorkExperienceIcon} from "./Components/WorkExperienceIcon.jsx";

export function WorkExperienceForm({experiences, setExperiences}) {

    const addExperience = () => {
        setExperiences([...experiences, {
            "company": "",
            "position": "",
            "startDate": "",
            "endDate": "",
            "description": ""
        }])
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
        items={[{
            key: "1", label: <>
                <WorkExperienceIcon style={{marginRight: "8px"}}/>
                Work Experience
            </>, children: <Flex vertical gap={"middle"}>
                {experiences.map((edu, index) => <ExperienceFormEntry key={index} index={index} onType={changeExperience}
                                                                      onRemoveClicked={() => {
                                                                      setExperiences(experiences.filter((e, i) => index !== i));
                                                                  }}/>)}
                <Button type={"primary"} size={"large"} onClick={addExperience}><PlusOutlined/> Add Experience</Button>
            </Flex>, showArrow: true, style: {
                fontWeight: 600
            }
        },]}
    />;
}