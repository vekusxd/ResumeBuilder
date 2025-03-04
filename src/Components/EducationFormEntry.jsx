import {Button, DatePicker, Flex, Input, Typography} from "antd";
import {CloseOutlined} from "@ant-design/icons";

const {Title} = Typography;

const EducationFormEntry = ({onRemoveClicked, index, onType}) => {
    return <Flex vertical gap={"middle"} style={{backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px"}}>
        <Flex align={"center"} justify={"space-between"}>
            <Title level={4} type="secondary" style={{margin: 0}}>Education Entry</Title>
            <Button icon={<CloseOutlined/>} onClick={onRemoveClicked}></Button>
        </Flex>
        <Flex vertical gap={"middle"} style={{fontWeight: "normal"}}>
            <Input size={"large"} placeholder={"School/University"}
                   onChange={(e) => onType("place", e.target.value, index)}/>
            <Input size={"large"} placeholder={"Degree"} onChange={(e) => onType("degree", e.target.value, index)}/>
            <Input size={"large"} placeholder={"Field of Study"}
                   onChange={(e) => onType("field", e.target.value, index)}/>
            <DatePicker size={"large"} placeholder={"Graduation Date"}
                   onChange={(_, dateStr) => onType("date", dateStr, index)}/>
        </Flex>
    </Flex>
}

export default EducationFormEntry;