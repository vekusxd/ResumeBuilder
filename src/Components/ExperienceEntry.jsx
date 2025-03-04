import {Flex, Typography} from "antd";
import {WorkExperienceIcon} from "./WorkExperienceIcon.jsx";

const {Text, Title} = Typography;

const ExperienceEntry = ({experience}) => {

    const getDate = () => {
        return `${experience.startDate.replaceAll("-", ".")} ${experience.startDate && experience.endDate && "-"} ${experience.endDate.replaceAll("-", ".")}`
    }

    return <Flex vertical>
        <Text type={"secondary"} style={{alignSelf: "flex-end"}}>{getDate()}</Text>
        <Flex vertical>
            <Text strong style={{fontSize: "16px"}}>{experience.position ? experience.position : "Position"}</Text>
            <Text strong type={"secondary"} style={{fontSize: "16px", fontWeight: "500"}}>{experience.company}</Text>
        </Flex>
        <Text>{experience.description}</Text>

    </Flex>
}

export default ExperienceEntry;