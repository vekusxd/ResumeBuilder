import {Flex, Typography} from "antd";

const {Text, Title} = Typography;

const Resume = ({personalInfo}) => {
    const greyTextStyle = {"fontSize": "18px"};
    return <Flex vertical gap={"small"} style={{
        padding: "2rem",
        aspectRatio: "1 / 1.414",
        minWidth: "80%",
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
    }}>
        <Title style={{alignSelf: "center"}}>{personalInfo.fullName}</Title>
        <Flex justify={"center"} gap={"large"}>
            <Text type={"secondary"} style={greyTextStyle}>{personalInfo.email}</Text>
            <Text type={"secondary"} style={greyTextStyle}>{personalInfo.phone}</Text>
        </Flex>
        {personalInfo.summary && <Title level={3} style={{marginTop: "1rem"}}>Professional Summary</Title>}
        {personalInfo.summary && <Text style={greyTextStyle}>{personalInfo.summary}</Text>}
    </Flex>
};

export default Resume;