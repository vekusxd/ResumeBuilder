import {Button, Collapse, Flex} from "antd";
import Icon, {PlusOutlined, UserOutlined} from "@ant-design/icons";
import EducationEntry from "./Components/EducationEntry.jsx";
import  EducationIconSource from "./assets/education.svg?react"

const EducationIcon = (props) => <Icon component={EducationIconSource} {...props} />;

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
                {educations.map((edu, index) => <EducationEntry key={index} index={index} onType={changeEducation}
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
