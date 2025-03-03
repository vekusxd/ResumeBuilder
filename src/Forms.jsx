import {Flex} from "antd";
import "antd/dist/reset.css";
import {PersonalForm} from "./PersonalForm.jsx";
import {SkillsAndCertificationForm} from "./SkillsAndCertificationForm.jsx";
import {WorkExperienceForm} from "./WorkExperienceForm.jsx";
import {EducationForm} from "./EducationForm.jsx";


const Forms = ({updatePersonalInfo, educations, setEducations, experiences, setExperiences}) => (
    <Flex gap={"middle"} vertical style={{
        padding: "2rem",
    }}>
        <PersonalForm setPersonalInfo={updatePersonalInfo}/>
        <WorkExperienceForm experiences={experiences} setExperiences={setExperiences}/>
        <EducationForm educations={educations} setEducations={setEducations}/>
        <SkillsAndCertificationForm/>
    </Flex>
);

export default Forms;
