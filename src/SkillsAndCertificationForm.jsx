import {Collapse, Flex, Input} from "antd";
import {SkillIcon} from "./Components/SkillIcon.jsx";

export function SkillsAndCertificationForm() {
    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[{
            key: "1", label: <>
                <SkillIcon style={{marginRight: "8px"}}/>
                Skills & Certifications
            </>, children: <Flex
                vertical
                gap={"middle"}
                style={{fontWeight: "normal"}}>
                <Input.TextArea size={"large"} placeholder={"Skills (separate with commas)"}/>

                <Input.TextArea size={"large"} placeholder={"Certifications & Awards"}/>
            </Flex>, showArrow: true, style: {
                fontWeight: 600
            }
        },]}
    />;
}
