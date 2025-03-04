import {ConfigProvider, Flex, FloatButton, Typography} from "antd";
import ExperienceEntry from "./Components/ExperienceEntry.jsx";
import EducationEntry from "./Components/EducationEntry.jsx";
import {WorkExperienceIcon} from "./Components/WorkExperienceIcon.jsx";
import {EducationIcon} from "./Components/EducationIcon.jsx";
import {Fragment} from 'react';
import {MedalIcon} from "./Components/MedalIcon.jsx";
import CertificationsAndAwards from "./Components/CertificationsAndAwards.jsx";
import Skills from "./Components/Skills.jsx";
import {FilePdfTwoTone} from "@ant-design/icons";
import html2pdf from 'html2pdf.js'

const {Text, Title} = Typography;


const Resume = ({personalInfo, educations, experiences, skills, awards}) => {
    const theme = {
        components: {
            Typography: {
                colorText: 'rgba(0, 0, 0, 0.88)'
            }
        }
    }
    const greyTextStyle = {"fontSize": "16px"};
    return <Flex vertical gap={"small"} id={"resume"} style={{
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
            {experiences.length ? <Flex gap={"small"} style={{marginTop: "1rem"}}>
                <WorkExperienceIcon style={{alignSelf: "center", fontSize: "24px"}}/>
                <Title level={4} style={{marginBottom: "0"}}>Work Experience</Title>
            </Flex> : null}
        </Fragment>

        {experiences.map((exp, i) => <ExperienceEntry key={i} experience={exp}/>)}

        <Fragment>
            {educations.length ? <Flex gap={"small"} style={{marginTop: "1rem"}}>
                <EducationIcon style={{alignSelf: "center", fontSize: "24px"}}/>
                <Title level={4} style={{marginBottom: "0"}}>Education</Title>
            </Flex> : null}
        </Fragment>

        {educations.map((edu, i) => <EducationEntry key={i} education={edu}/>)}

        <Fragment>
            {(skills.length !== 0 || awards) ? <Flex gap={"small"} style={{marginTop: "1rem"}}>
                <MedalIcon style={{alignSelf: "center", fontSize: "24px"}}/>
                <Title level={4} style={{marginBottom: "0"}}>Skills & Certifications</Title>
            </Flex> : null}
        </Fragment>

        <Skills skills={skills}/>

        <CertificationsAndAwards awards={awards}/>


        <ConfigProvider theme={theme}>
            <FloatButton
                icon={<FilePdfTwoTone/>}
                type="primary"
                tooltip={<div>Export To PDF</div>}
                style={{
                    insetInlineEnd: 30,
                }}
                onClick={async () => {
                    const opt = {
                        margin: [10, 10, 10, 10], // Top, Right, Bottom, Left (in mm)
                        filename: 'resume.pdf', image: {type: 'jpeg', quality: 0.98}, html2canvas: {scale: 2}, // Increase for higher resolution, but may increase file size
                        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
                    };
                    const resume = document.getElementById("resume");

                    const svgElements = resume.querySelectorAll('svg');
                    svgElements.forEach(svg => {
                        const img = new Image();
                        const serializer = new XMLSerializer();
                        const svgString = serializer.serializeToString(svg);
                        img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
                        img.width = svg.clientWidth;
                        img.height = svg.clientHeight;
                        svg.parentNode.replaceChild(img, svg);
                    });

                    await html2pdf().set(opt).from(resume).save();
                }}
            />
        </ConfigProvider>
    </Flex>
};

export default Resume;
