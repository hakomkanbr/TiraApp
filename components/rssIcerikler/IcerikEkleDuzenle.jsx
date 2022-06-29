import { useEffect, useState } from 'react';
import { Form, Select, Button } from 'antd';
import InputCustum from 'components/elements/input/Input';
import TextArea from 'antd/lib/input/TextArea';
import router, { useRouter } from 'next/router';
import { getData, postData } from 'utils/fetchData';
import _app from 'utils/_app';
import CardCustum from 'components/elements/card/Card';
import pointsU from 'points';
import getBase64 from 'lib/helpers/getBase64';


const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const NumberInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);

    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            ...value,
            ...changedValue,
        });
    };

    const onNumberChange = (e) => {
        const newNumber = parseInt(e.target.value || '', 10);


        if (!('number' in value)) {
            setNumber(newNumber);
        }

        triggerChange({
            number: newNumber,
        });
    };

    return (
        <span>
            <InputCustum
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{
                    width: 100,
                }}
            />
        </span>
    );
};


const IcerikEkleDuznle = () => {
    const [form] = Form.useForm();
    const [contentFoto, setContentFoto] = useState(null);
    const [max, setMax] = useState();
    const history = useRouter();
    const [path, setPath] = useState(history.pathname);
    // var kategoriName = window.localStorage.getItem("kategori");
    const checkPrice = (_, value) => {
        if (value.number >= 0) {
          setMax(value.number);
          return Promise.resolve();
        }
    
        return Promise.reject(new Error('Price must be greater than zero!'));
    };

    const onFinish = async (values) => {
        try {
            values.sorting = 1;
            values.max = parseInt(values.max) || max;
            values.categoryId = parseInt(window.sessionStorage.getItem("kategoriId"));
            // values.categoryId = parseInt(_app.getSessionItem("kategoriId"));
            var obj = contentFoto?.length ? contentFoto[0] : "";
            let x = "";
            if (obj) {
                if (obj.originFileObj) {
                    x = await getBase64(obj.originFileObj);
                } else {
                    x = obj.url;
                }
            }

            // is Düzenle
            if (!path.toString().includes("create")) {
                values.id = parseInt(path.substring(path.lastIndexOf("/") + 1)) ?? null;
                await postData(pointsU.addEventRss , values , true);
            } else {
                await postData(pointsU.editEventRss , values , true);
            }
            history.push("/admin/category/" + values.categoryId);
        } catch (err) {
            console.error("err");
            console.error(err);
        }
    };


    useEffect(() => {
        if (window.location.pathname.includes("edit/")) {
            getData(pointsU.getRssSingle + "?eventId=" + window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1) , true).then((res) => {
                form.setFieldsValue({ ...res , max : {number : res?.max}});
                setMax(res.max)
            })
        }
    }, []);

    const titleInput = (<InputCustum placeholder="العنوان" />);
    const maxInput = (<NumberInput placeholder="عدد المنشورات" />);
    const urlInput = (<InputCustum placeholder="الرابط" />);

    return (
        <CardCustum title={" أضف محتوى جديد ( Rss )"}>
            <Form
                form={form}
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
            >
                <Form.Item
                    name="name"
                    label="العنوان"
                >
                    {titleInput}
                </Form.Item>

                <Form.Item
                    name="description"
                    label="الوصف"
                    hasFeedback
                >
                    <TextArea placeholder='الوصف'></TextArea>
                </Form.Item>
                <Form.Item
                    name="max"
                    rules={[
                        {
                          validator: checkPrice,
                        },
                    ]}
                    label="عدد المنشورات"
                >
                    {maxInput}
                </Form.Item>
                <Form.Item
                    name="url"
                    label="الرابط"
                >
                    {urlInput}
                </Form.Item>
                {/* <Form.Item name="date" label="التاريخ"  >
                    <DatePicker
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item> */}

                <Form.Item
                    name="published"
                    label="الحالة"
                >
                    <Select placeholder="يرجى الأختيار">
                        <Option value={true}>نشر</Option>
                        <Option value={false}>عدم النشر</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        أرسال
                    </Button>
                </Form.Item>
            </Form>
        </CardCustum>);
};


export default IcerikEkleDuznle;