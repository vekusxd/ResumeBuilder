import {Flex, FloatButton} from "antd";
import "antd/dist/reset.css";
import {PersonalForm} from "./PersonalForm.jsx";
import {SkillsAndCertificationForm} from "./SkillsAndCertificationForm.jsx";
import {WorkExperienceForm} from "./WorkExperienceForm.jsx";
import {EducationForm} from "./EducationForm.jsx";
import {QuestionCircleOutlined} from "@ant-design/icons";


const Forms = ({updatePersonalInfo, educations, setEducations, experiences, setExperiences, setAwards, setSkills}) => (
    <Flex gap={"middle"} vertical style={{
        padding: "2rem",
    }}>
        <PersonalForm setPersonalInfo={updatePersonalInfo}/>
        <WorkExperienceForm experiences={experiences} setExperiences={setExperiences}/>
        <EducationForm educations={educations} setEducations={setEducations}/>
        <SkillsAndCertificationForm setSkills={setSkills} setAwards={setAwards}/>


    </Flex>

);

export default Forms;
