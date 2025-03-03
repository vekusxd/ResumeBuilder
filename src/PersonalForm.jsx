import {Collapse, Flex, Form, Input} from "antd";


export function PersonalForm() {
    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[
            {
                key: "1",
                label: "Personal Information",
                children: <Form
                    name="personal"
                    autoComplete="off"
                >
                    <Form.Item
                        name="fullName"
                    >
                        <Input placeholder={"Full Name"}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                    >
                        <Flex gap={"middle"}>
                            <Input placeholder={"Email"}/>

                            <Input placeholder={"Phone"}/>
                        </Flex>

                    </Form.Item>

                    <Form.Item name="remember">
                        <Input.TextArea placeholder={"Professional Summary"}/>
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
