import {Collapse, Form, Input} from "antd";
import {TrophyOutlined} from "@ant-design/icons";

export function SkillsAndCertificationForm() {
    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[
            {
                key: "1",
                label: <>
                    <TrophyOutlined  style={{marginRight: "8px"}}/>
                    Skills & Certifications
                </>,
                children: <Form
                    name="skills"
                    autoComplete="off"
                >
                    <Form.Item name="skills">
                        <Input.TextArea placeholder={"Skills (separate with commas)"}/>
                    </Form.Item>

                    <Form.Item name="certifications">
                        <Input.TextArea placeholder={"Certifications & Awards"}/>
                    </Form.Item>
                </Form>,
                showArrow: true,
                style: {
                    fontWeight: 600
                }
            },
        ]}
    />;
}
