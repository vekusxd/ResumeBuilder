import {Button, Collapse, Flex} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import EducationFormEntry from "./Components/EducationFormEntry.jsx";
import {EducationIcon} from "./Components/EducationIcon.jsx";

export function EducationForm({educations, setEducations}) {

    const addEducation = () => {
        setEducations([...educations, {"place": "", "degree": "", "field": "", "date": ""}])
    }

    const changeEducation = (propertyName, value, index) => {
        setEducations(educations.map((edu, i) => {
            if (i !== index) return edu;
            return {...edu, [propertyName]: value};
        }));
    }

    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[{
            key: "1", label: <>
                <EducationIcon style={{marginRight: "8px"}}/>
                Education
            </>, children: <Flex vertical gap={"middle"}>
                {educations.map((edu, index) => <EducationFormEntry key={index} index={index} onType={changeEducation}
                                                                    onRemoveClicked={() => {
                                                                    setEducations(educations.filter((e, i) => index !== i));
                                                                }}/>)}
                <Button type={"primary"} size={"large"} onClick={addEducation}><PlusOutlined/> Add
                    Education</Button>
            </Flex>, showArrow: true, style: {
                fontWeight: 600
            }
        },]}
    />;
}
