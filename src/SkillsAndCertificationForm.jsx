import {Collapse, Flex, Input} from "antd";
import {SkillIcon} from "./Components/SkillIcon.jsx";

export function SkillsAndCertificationForm({setSkills, setAwards}) {
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
                <Input.TextArea size={"large"} placeholder={"Skills (separate with commas)"} autoSize={{minRows: 3}}  onChange={e => {
                    const newSkills = e.target.value.split(",");
                    if (newSkills.length === 1 && newSkills[0] === "") {
                        setSkills([]);
                        return;
                    }
                    setSkills(e.target.value.split(","))
                }}/>

                <Input.TextArea size={"large"} placeholder={"Certifications & Awards"} autoSize={{minRows: 3}} onChange={e => setAwards(e.target.value)} />
            </Flex>, showArrow: true, style: {
                fontWeight: 600
            }
        },]}
    />;
}
