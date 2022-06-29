import { Button, Col, Row } from "react-bootstrap";
import styles from "./contact.module.scss";
import { Form, Select } from "antd";
import InputCustum from "components/elements/input/Input";
import { postData } from "utils/fetchData";
import { AiOutlineHeatMap, AiOutlineMergeCells, AiOutlinePhone, AiOutlineWoman } from "react-icons/ai";


export default function Contact() {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            values.id = id;
            await postData("/Home/AddUpdateCategory", { ...values }, true);
            //   setVisible(false);
            //   dispatch(reloadDatatable(Math.random()));
        } catch (err) {
            // ErrorProvider(err);
        }
    }
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    return (
        <div className={styles.contact}>
            <Row>
                <Col>
                    <div className={styles.textContent}>
                        <div>
                            <div className={styles.first}>
                                <b> Set An <span>Appointment</span> Today </b>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <AiOutlinePhone />
                                </div>
                                <div className={styles.text}>
                                    <h4>Call for book : </h4>
                                    <h3>(770) 123 4567 </h3>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <AiOutlineWoman />
                                </div>
                                <div className={styles.text}>
                                    <span>Car Reparing Point : </span>
                                    <p>123 lorem Ipsum 12 sit , <br/> dollar Atlant, GA 1234 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="p-r-0">
                    <Form form={form} className={styles.form} name="nest-messages" onFinish={onFinish}>
                        <h3>Contact Us</h3>
                        <h3 className={styles.hr}>____</h3>
                        <Form.Item
                            name="name"
                        >
                            <InputCustum placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                        >
                            <InputCustum placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                        >
                            <InputCustum placeholder="phone" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                أرسال
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
