import { useEffect, useState } from 'react';
import { Form, Select, Button, DatePicker, notification } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import router, {useRouter} from 'next/router';
import moment from "moment";
import pointsU from 'points';
import CardCustum from 'components/elements/card/Card';
import Editor from 'components/elements/editor/Editor';
import InputCustum from 'components/elements/input/Input';
import UploadCustum from 'components/elements/upload/Upload';
import getBase64 from 'lib/helpers/getBase64';
import _app from 'utils/_app';
import { getData, postData } from 'utils/fetchData';

const { Option } = Select;
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
    const [path, setPath] = useState(window.location.pathname);
    const [contentFoto, setContentFoto] = useState(null);
    const [editor, setEditor] = useState("");
    const [photoReloaded, setPhotoReloaded] = useState(false);
    const history = useRouter();


    const onFinish = async (values) => {
        try {
         
            var obj = contentFoto?.length ? contentFoto[0] : "";
            let x = "";
            if (obj) {
                if (obj.originFileObj) {
                    x = await getBase64(obj.originFileObj);
                } else {
                    x = obj.url;
                }
            }
            values.body = editor ?? "";
            values.categoryId = parseInt(_app.getSessionItem("kategoriId"));
            values.photo64 = x.substr(x.indexOf(",") + 1, x.length);
            values.imageName = obj?.name;
            values.photoReloaded = photoReloaded;
            delete values.upload;
            // is Düzenle
            if (!path.toString().includes("create")) {
                values.id = parseInt(path.substring(path.lastIndexOf("/") + 1)) ?? null;
                await postData(pointsU.addEvent , values , true);
                notification["success"]({
                    placement:"top",
                    message: 'تم حفظ البيانات بنجاح'
                });
                history.push("/admin/category/"+values.categoryId);
            } else {
                await postData(pointsU.addEvent , values , true);
                notification["success"]({
                    placement:"top",
                    message: 'تم حفظ البيانات بنجاح'
                });
                history.push("/admin/category/"+values.categoryId);
            }
        } catch (err) {
            console.error("err");
            console.error(err);
        }
    };

    useEffect(() => {
        if (!path.includes("create")) {
            getData(pointsU.getEvent + "?eventId=" + path.substr(path.lastIndexOf("/") + 1)).then((res) => {
                form.setFieldsValue({ ...res, date: moment(res?.date) });
                setEditor(res.body);
                setContentFoto([
                    {
                        uid: '-1',
                        name: res?.photoUrl,
                        status: 'done',
                        url: res?.photo64 ? "data:image/png;base64,"+res?.photo64 : "",
                    }
                ])
            })
        }
    }, []);

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

    const titleInput = (<InputCustum placeholder="العنوان" />);


    return (
        <CardCustum title={" أضف محتوى جديد : " + "(" +  _app.getSessionItem("kategori") + ")"}>
            <Form
                form={form}
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
            >
                <Form.Item
                    name="title"
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

                <Form.Item name="date" label="التاريخ"  >
                    <DatePicker
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

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
                    name="upload"
                    label="تحميل صورة"
                >
                    <UploadCustum
                        single={true}
                        listType="picture"
                        fileList={contentFoto}
                        onChange={onChange}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading
                            company data or other band files
                        </p>
                    </UploadCustum>
                </Form.Item>

                <Editor value={editor} onChange={(e)=> setEditor(e)}/>

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