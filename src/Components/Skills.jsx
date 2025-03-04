import {Flex, Typography} from "antd";

const {Title} = Typography;

const Skills = ({skills}) => {
    return <Flex vertical gap={"small"} style={{marginTop: "1rem"}}>
        {skills.length ? <>
            <Title level={4} style={{marginBottom: 0}}>Skills</Title>
            <Flex gap="small" wrap="wrap" style={{width: "90%", maxWidth: "90%"}}>
                {skills.map((s, i) => <p key={i} style={{backgroundColor: "#f3f4f6", color: "black", border: "none", borderRadius: "40px", marginBottom: 0, padding: "5px 10px"}}>{s}</p>)}
            </Flex>
        </> : null}
    </Flex>
}

export default Skills;
