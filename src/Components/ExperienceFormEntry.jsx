import {Button, DatePicker, Flex, Input, Typography} from "antd";
import {CloseOutlined} from "@ant-design/icons";

const {Title} = Typography;

const ExperienceFormEntry = ({onRemoveClicked, index, onType}) => {
    return <Flex vertical gap={"middle"} style={{backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px"}}>
        <Flex align={"center"} justify={"space-between"}>
            <Title level={4} type="secondary" style={{margin: 0}}>Experience Entry</Title>
            <Button icon={<CloseOutlined/>} onClick={onRemoveClicked}></Button>
        </Flex>
        <Flex vertical gap={"middle"} style={{fontWeight: "normal"}}>
            <Input size={"large"} placeholder={"Company"} onChange={(e) => onType("company", e.target.value, index)}/>
            <Input size={"large"} placeholder={"Position"} onChange={(e) => onType("position", e.target.value, index)}/>

            <Flex gap={"middle"}>
                <DatePicker size={"large"} style={{flex: "1"}} placeholder={"Start Date"}
                            onChange={(_, dateStr) => onType("startDate", dateStr, index)}/>
                <DatePicker size={"large"} style={{flex: "1"}} placeholder={"End Date"}
                            onChange={(_, dateStr) => onType("endDate", dateStr, index)}/>
            </Flex>
            <Input.TextArea autoSize={{minRows: 3}} size={"large"} placeholder={"Description"}
                            onChange={(e) => onType("description", e.target.value, index)}/>
        </Flex>
    </Flex>
}

export default ExperienceFormEntry;