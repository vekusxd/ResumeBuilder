import {Button, Collapse, Flex, Form, Input} from "antd";
import {PlusOutlined, UserOutlined} from "@ant-design/icons";

export function EducationForm() {
    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[
            {
                key: "1",
                label: <>
                    <UserOutlined style={{marginRight: "8px"}}/>
                    Education
                </>,
                children: <Flex vertical gap={"middle"}>
                    <Button type={"primary"} size={"large"}><PlusOutlined/> Add Education</Button>
                </Flex>,
                showArrow: true,
                style: {
                    fontWeight: 600
                }
            },
        ]}
    />;
}