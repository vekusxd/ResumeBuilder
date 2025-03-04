import {Collapse, Flex, Input} from "antd";


export function PersonalForm({setPersonalInfo}) {
    return <Collapse
        size="large"
        expandIconPosition={"end"}
        items={[{
            key: "1", label: "Personal Information", children: <Flex
                vertical
                gap={"middle"}
                style={{fontWeight: "normal"}}>
                <Input size={"large"} placeholder={"Full Name"}
                       onChange={e => setPersonalInfo("fullName", e.target.value)}/>

                <Flex gap={"middle"}>
                    <Input size={"large"} placeholder={"Email"}
                           onChange={e => setPersonalInfo("email", e.target.value)}/>
                    <Input size={"large"} placeholder={"Phone"}
                           onChange={e => setPersonalInfo("phone", e.target.value)}/>
                </Flex>

                <Input.TextArea size={"large"} placeholder={"Professional Summary"}
                                onChange={e => setPersonalInfo("summary", e.target.value)}/>
            </Flex>, showArrow: true, style: {
                fontWeight: 600
            }
        },]}
    />;
}
