import {Collapse, Flex, Form, Input} from "antd";


export function PersonalForm({setPersonalInfo}) {
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
                    style={{fontWeight: "normal"}}>
                    <Form.Item name="fullName">
                        <Input placeholder={"Full Name"} onChange={e => setPersonalInfo("fullName", e.target.value)} />
                    </Form.Item>

                    <Form.Item name="personal-info-group">
                        <Flex gap={"middle"}>
                            <Input placeholder={"Email"} onChange={e => setPersonalInfo("email", e.target.value)}/>
                            <Input placeholder={"Phone"} onChange={e => setPersonalInfo("phone", e.target.value)}/>
                        </Flex>
                    </Form.Item>

                    <Form.Item name="personal-summary">
                        <Input.TextArea placeholder={"Professional Summary"} onChange={e => setPersonalInfo("summary", e.target.value)}/>
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
