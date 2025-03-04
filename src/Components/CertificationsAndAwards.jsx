import {Flex, Typography} from "antd";

const {Text, Title} = Typography;

const CertificationsAndAwards = ({awards}) => {
    return <Flex vertical style={{marginTop: "1rem"}}>
        <Title level={4} style={{marginBottom: "0"}} >{awards && "Certifications & Awards"}</Title>
        <Text type={"secondary"}  style={{fontSize: "16px", fontWeight: "500", whiteSpace: "pre"}}>{awards}</Text>
    </Flex>
}

export default CertificationsAndAwards;