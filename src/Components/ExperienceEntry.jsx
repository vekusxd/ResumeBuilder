import {Flex, Form, Input, Typography, Button, DatePicker} from "antd";
import {CloseOutlined} from "@ant-design/icons";

const {Title} = Typography;

const ExperienceEntry = ({onRemoveClicked, index, onType}) => {
    return <Flex vertical gap={"middle"}>
        <Flex align={"center"} justify={"space-between"}>
            <Title level={4} type="secondary" style={{margin: 0}}>Experience Entry</Title>
            <Button icon={<CloseOutlined/>} onClick={onRemoveClicked}></Button>
        </Flex>
        <Form name={`experience-${index}`} autoComplete="off" style={{fontWeight: "normal"}}>
            <Form.Item name="company">
                <Input placeholder={"Company"} onChange={(e) => onType("company", e.target.value, index)}/>
            </Form.Item>
            <Form.Item name="position">
                <Input placeholder={"Position"} onChange={(e) => onType("position", e.target.value, index)}/>
            </Form.Item>

            <Form.Item name="dateGroup">
                <Flex gap={"middle"}>
                    <DatePicker style={{flex: "1"}} placeholder={"Start Date"} onChange={(_, dateStr) => onType("startDate", dateStr, index)} />
                    <DatePicker  style={{flex: "1"}} placeholder={"End Date"} onChange={(_,dateStr) => onType("endDate", dateStr, index)}/>
                </Flex>
            </Form.Item>
            <Form.Item name="date">
                <Input.TextArea placeholder={"Description"}
                                onChange={(e) => onType("description", e.target.value, index)}/>
            </Form.Item>
        </Form>
    </Flex>
}

export default ExperienceEntry;