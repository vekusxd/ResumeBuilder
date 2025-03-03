import {Flex} from "antd";
import "antd/dist/reset.css";
import {PersonalForm} from "./PersonalForm.jsx";
import {SkillsAndCertificationForm} from "./SkillsAndCertificationForm.jsx";
import {WorkExperienceForm} from "./WorkExperienceForm.jsx";
import {EducationForm} from "./EducationForm.jsx";


const Forms = () => (
    <Flex gap={"middle"} vertical style={{
        padding: "2rem"
    }
    }>
        <PersonalForm/>
        <WorkExperienceForm/>
        <EducationForm/>
        <SkillsAndCertificationForm/>
    </Flex>
);

export default Forms;
