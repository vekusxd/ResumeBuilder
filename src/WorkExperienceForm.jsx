import {Collapse, Form, Input, Flex, Button} from "antd";
import {SolutionOutlined, PlusOutlined} from "@ant-design/icons";

export function WorkExperienceForm() {
    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[
            {
                key: "1",
                label: <>
                    <SolutionOutlined style={{marginRight: "8px"}}/>
                    Work Experience
                </>,
                children: <Flex vertical gap={"middle"}>
                    <Button  type={"primary"} size={"large"} ><PlusOutlined /> Add Experience</Button>
                </Flex>,
                showArrow: true,
                style: {
                    fontWeight: 600
                }
            },
        ]}
    />;
}