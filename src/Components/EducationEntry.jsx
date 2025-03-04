import {Flex, Typography} from "antd";

const {Text, Title} = Typography;

const EducationEntry = ({education}) => {

    const getDegreeInfo = () => {
        if (education.degree && education.field) {
            return `${education.degree} in ${education.field}`
        } else if (education.degree) {
            return education.degree;
        } else if(education.field) {
            return education.field;
        } else {
            return null;
        }
    }

    return <Flex vertical>
        <Text type={"secondary"} style={{alignSelf: "flex-end"}}>{education.date.replaceAll("-", ".")}</Text>
        <Flex vertical>
            <Text strong style={{fontSize: "16px"}}>{education.place ? education.place : "University / School"}</Text>
            <Text strong type={"secondary"} style={{fontSize: "16px", fontWeight: "500"}}>{getDegreeInfo()}</Text>
        </Flex>
    </Flex>
}

export default  EducationEntry;