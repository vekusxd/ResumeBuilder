import {Flex, Form, Input, Typography, Button} from "antd";
import {CloseOutlined} from "@ant-design/icons";

const {Title } = Typography;

const EducationEntry = ({onRemoveClicked, index, onType}) => {
    return <Flex vertical gap={"middle"}>
        <Flex align={"center"} justify={"space-between"}>
            <Title level={4} type="secondary" style={{margin: 0}}>Education Entry</Title>
            <Button icon={<CloseOutlined/>} onClick={onRemoveClicked}></Button>
        </Flex>
        <Form name={`education-${index}`} autoComplete="off" style={{fontWeight: "normal"}}>
            <Form.Item name="place">
                <Input placeholder={"School/University"} onChange={(e) => onType("place", e.target.value, index)}/>
            </Form.Item>
            <Form.Item name="degree">
                <Input placeholder={"Degree"} onChange={(e) => onType("degree", e.target.value, index)}/>
            </Form.Item>
            <Form.Item name="field">
                <Input placeholder={"Field of Study"} onChange={(e) => onType("field", e.target.value, index)}/>
            </Form.Item>
            <Form.Item name="date">
                <Input placeholder={"Graduation Date"} onChange={(e) => onType("date", e.target.value, index)}/>
            </Form.Item>
        </Form>
    </Flex>
}

export default EducationEntry;