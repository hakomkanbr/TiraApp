import { useEffect, useState } from 'react';
import { Form, Input, Button, Space, Select, notification } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import CardCustum from 'components/elements/card/Card';
import { getData, postData } from 'utils/fetchData';
import pointsU from 'points';
import MediaEnums from 'enums/MediaEnums';

const Setting = () => {

    const [data , setData]= useState();
    const [form] = Form.useForm();
    useEffect(async () => {
        const res = await getData(pointsU.getSosyal , true) 
            form.setFieldsValue({ data : res});
    }, []);
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        postData( pointsU.sosyalEkleDuzenle , {...values} , true).then((res)=>{
            notification["success"]({
                placement:"top",
                message: 'تم حفظ البيانات بنجاح'
              });
        })
    };

    const layout = {
        labelCol : {
            span : 4
        },
        wrapperCol : {
            span : 8
        }
    }
    
    const layout2 = {
        labelCol : {
            span : 8
        },
        wrapperCol : {
            span : 16
        }
    }
    
    return (
        <CardCustum title="الأعدادات">
         
            <Form name="dynamic_form_nest_item" form={form} onFinish={onFinish} {...layout} autoComplete="off">
                {/* <Form.Item name="ustTxt" label="عنوان القسم العلوي من الموقع">
                    <InputCustum  placeholder="عنوان القسم العلوي من الموقع" />
                </Form.Item> */}
                {/* <Form.Item name="descraption" label="الوصف">
                    <Input.TextArea  placeholder="الوصف" />
                </Form.Item> */}
                <h5>أضف روابط مواقع التواصل الأجتماعي</h5>
                <Form.List
                {...layout2}
                    initialValue={data}
                    name="data"
                >
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                
                                    key={key}
                                    style={{ display: 'flex',  marginBottom: 8 }}
                                    align="baseline"
                                >
                                    <Form.Item
                                     {...layout2}
                                     label="النوع"
                                     style={{width : "100%"}}
                                        {...restField}
                                        name={[name, 'name']}
                                    >
                                        <Select style={{width : "100%"}} options={MediaEnums} placeholder="اختر" />
                                    </Form.Item>
                                    <Form.Item
                                     {...layout2}
                                        label="الرابط"
                                        {...restField}
                                        style={{width : "100%"}}
                                        name={[name, 'url']}
                                    >
                                        <Input  placeholder="الرابط" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item >
                                <Button
                                    type="dashed"
                                    style={{width:"200px"}}
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    أضف جديد
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        حفظ
                    </Button>
                </Form.Item>
            </Form>
        </CardCustum>
    );
};

export default Setting;
