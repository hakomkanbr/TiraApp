import { useState } from 'react';
import CardCustum from "components/elements/card/Card";
import { Form, Input, notification, Select } from 'antd';
import { useRouter } from 'next/router';
import ButtonCustum from 'components/elements/button/Button';
import { postData } from 'utils/fetchData';
import pointsU from 'points';
import getBase64 from 'lib/helpers/getBase64';


const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const IcerikEkleDuznle = () => {
    const [form] = Form.useForm();
    const [contentFoto, setContentFoto] = useState(null);
    const [photoReloaded, setPhotoReloaded] = useState(false);
    const history = useRouter();



    const onFinish = async (values) => {
        try {
            postData(pointsU.repassword , {...values}).then((res) => {
                notification["success"]({
                    placement:"top",
                    message: 'تم حفظ البيانات بنجاح'
                  });
            })
        } catch (err) {
            console.error("err");
            console.error(err);
        }
    };


    const onChange = async ({ fileList: newFileList }) => {
        let f = [];
        setPhotoReloaded(true);
        console.log(newFileList);

        for (let i = 0; i < newFileList.length; i++) {
            var obj = newFileList[i];
            if (obj["status"]) {
                obj["status"] = "done";
            }
            if (obj["originFileObj"]) {
                let x = await getBase64(obj.originFileObj);
                let b = x.substr(x.indexOf(",") + 1, x.length);
                // on submit array
                f.push({
                    name: obj.name,
                    type: obj.type,
                    fileBase64: b,
                });
            } else {
                let b = obj?.url?.substr(obj.url.indexOf(",") + 1, obj.url.length);
                f.push({
                    name: obj.name,
                    type: "",
                    fileBase64: b,
                });
            }
        }

        setContentFoto(newFileList);
    };


    return (
        <CardCustum title="قسم الأمان">
            <Form
                form={form}
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
            >
                          <Form.Item
                    name="username"
                    label="أسم المستخدم"
                    rules={[
                        {
                            required: true,
                            message: 'الرجاء أدخال كلمة السر القديمة',
                        },
                        {
                            min: 8,
                            message: '  كلمة السر يجب أن تكون اكثر من 8',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                      <Form.Item
                    name="password"
                    label="كلمة السر القديمة"
                    rules={[
                        {
                            required: true,
                            message: 'الرجاء أدخال كلمة السر القديمة',
                        },
                        {
                            min: 8,
                            message: '  كلمة السر يجب أن تكون اكثر من 8',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    label="كلمة السر الجديدة"
                    rules={[
                        {
                            required: true,
                            message: 'الرجاء أدخال كلمة السر',
                        },
                        {
                            validator : (_, value) =>{
                                if (value.length < 8) {
                                    return Promise.reject(new Error('  كلمة السر يجب أن تكون اكثر من 8'));
                                }
                                if (value.search(/[a-z]/i) < 0) {
                                    return Promise.reject(new Error('يجب أن تحتوي كلمة السر على حرف زغير على الأقل'));
                                }
                                if (value.search(/[A-Z]/) < 0) {
                                    return Promise.reject(new Error('يجب أن تحتوي كلمة السر على حرف كبير على الأقل'));
                                }
                                if (value.search(/[!@#\$%\^&\*_]/) < 0) {
                                    return Promise.reject(new Error(("يجب أن تحتوي كلمة السر على  [ ! @ # $ % ^ & * _ ]")))
                                }
                                if (value.search(/[0-9]/) < 0) {
                                    return Promise.reject(new Error('يجب أن تحتوي كلمة السر على رقم واحد على الأقل'));
                                }
                                
                                return Promise.resolve();
                            },
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="rePassword"
                    label="أعد كتابة كلمة السر"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'رجاء أعد كتابة كلمة السر',
                        },
                        {
                            min: 8,
                            message: '  كلمة السر يجب أن تكون اكثر من 8',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('كلمة السر غير متطابقة'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                <ButtonCustum type="primary" htmlType="submit">
                حفظ
                </ButtonCustum>
            </Form.Item>
            </Form>
        </CardCustum>
    );
};


export default IcerikEkleDuznle;