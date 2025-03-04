import {Flex, Typography} from "antd";
import ExperienceEntry from "./Components/ExperienceEntry.jsx";
import EducationEntry from "./Components/EducationEntry.jsx";
import {WorkExperienceIcon} from "./Components/WorkExperienceIcon.jsx";
import {EducationIcon} from "./Components/EducationIcon.jsx";
import {Fragment} from 'react';

const {Text, Title} = Typography;


const Resume = ({personalInfo, educations, experiences}) => {
    const greyTextStyle = {"fontSize": "16px"};
    return <Flex vertical gap={"small"} style={{
        padding: "2rem",
        marginTop: "1rem",
        aspectRatio: "1 / 1.414",
        minWidth: "80%",
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
    }}>
        <Title level={2} style={{
            alignSelf: "center", marginBottom: "0"
        }}>{personalInfo.fullName ? personalInfo.fullName : "Your Name"} </Title>
        <Flex justify={"center"} gap={"large"}>
            <Text type={"secondary"} style={greyTextStyle}>{personalInfo.email}</Text>
            <Text type={"secondary"} style={greyTextStyle}>{personalInfo.phone}</Text>
        </Flex>
        {personalInfo.summary &&
            <Title level={4} style={{marginTop: "1rem", marginBottom: "0"}}>Professional Summary</Title>}
        {personalInfo.summary && <Text>{personalInfo.summary}</Text>}

        <Fragment>
            {experiences.length ?
                <Flex gap={"small"} style={{marginTop: "1rem"}}>
                    <WorkExperienceIcon style={{alignSelf: "center", fontSize: "24px"}}/>
                    <Title level={4} style={{marginBottom: "0"}}>Work Experience</Title>
                </Flex>: null}
        </Fragment>

        {experiences.map((exp, i) => <ExperienceEntry key={i} experience={exp}/>)}

        <Fragment>
            {educations.length ?
                <Flex gap={"small"} style={{marginTop: "1rem"}}>
                    <EducationIcon style={{alignSelf: "center", fontSize: "24px"}}/>
                    <Title level={4} style={{marginBottom: "0"}}>Education</Title>
                </Flex> : null}
        </Fragment>

        {educations.map((edu, i) => <EducationEntry key={i} education={edu}/>)}
    </Flex>
};

export default Resume;