import { useState } from 'react';
import CardCustum from "components/elements/card/Card";
import Tablemenuitems from 'components/utility/datatableSettingButton';
import ModalCustum from 'components/elements/modal/Modal';
import { Form, Button, Menu, Select, Avatar } from 'antd';
import InputCustum from 'components/elements/input/Input';
import { useDispatch } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import UploadCustum from "components/elements/upload/Upload";
import { InboxOutlined } from '@ant-design/icons';
import ButtonCustum from 'components/elements/button/Button';
import pointsU from 'points';
import AdsYeri from 'enums/adsPoisation';
import getBase64 from 'lib/helpers/getBase64';
import { reloadDatatable } from 'redux/app/actions';
import { postData } from 'utils/fetchData';
import dynamic from 'next/dynamic';

const TableCustum = dynamic(() => import('components/elements/table/Table'), {
  ssr: false,
})
export default function DtAds() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const changeVisible = () => {
    setVisible(false)
    form.setFieldsValue({
      name: "",
      published: false
    })
    setId(0)
  }
  const columns = [
    {
      title: 'الصورة',
      dataIndex: 'photo64',
      render: function (data) {
        if (!data) return <Avatar shape="square" size="large" icon={<UserOutlined />} />
        return (
          <Avatar shape="square" size="large" src={"data:image/jpeg;base64," + data} />
        )
      }
    },
    {
      title: 'الرابط',
      dataIndex: 'name',
    },
    {
      title: 'الترتيب',
      dataIndex: 'sorting',
    },
    {
      title: 'الموقع',
      dataIndex: 'position',
      render : function(data){
        AdsYeri.map((b,s)=>{
          if(b.value === data){
            return b.label
          }
        })
      }
    },
    {
      title: 'الحالة',
      dataIndex: 'published',
      render: (data) => data ? "منشور" : "غير منشور"
    },
    {
      title: 'الأحداث',
      align: "left",
      dataIndex: 'id',
      render: (data, full, three) => {
        return (
          <>
            {/* <ButtonCustum type="default" disabled={full["notUp"]} onClick={async () => {
              await appServices.postRequests({ id: full["id"] }, pointsU.kategoriUp);
              dispatch(reloadDatatable(Math.random()));
            }}>
              <AiOutlineVerticalAlignTop />
            </ButtonCustum>
            <ButtonCustum type="default" disabled={full["notDown"]} onClick={async () => {
              await appServices.postRequests({ id: full["id"] }, pointsU.kategoriDown);
              dispatch(reloadDatatable(Math.random()));
            }}>
              <AiOutlineVerticalAlignBottom />
            </ButtonCustum> */}
            <Tablemenuitems
              sil={{ url: pointsU.deleteAds, id: data }}
              digerComponentContent={
                <Menu.Item onClick={() => {
                  setVisible(true);
                  form.setFieldsValue({
                    name: full["url"],
                    published: full["published"]
                  })
                  setId(data)
                }}>
                  تعديل
                </Menu.Item>
              }
            />
          </>
        )
      }
    }
  ];
  const [contentFoto, setContentFoto] = useState(null);
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
      values.description = "11"
      values.photo64 = x.substr(x.indexOf(",") + 1, x.length);
      values.imageName = obj?.name;
      delete values.upload;
      values.id = id;
      await postData(pointsU.addUpdateAds , values , true);
      setVisible(false);
      dispatch(reloadDatatable(Math.random()));
    } catch (err) {
      // ErrorProvider(err);
    }
  }
  const onChange = async ({ fileList: newFileList }) => {
    let f = [];

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
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <>
      <CardCustum extra={
        <>
          <ButtonCustum onClick={() => {
            setVisible(true);
            form.setFieldsValue({
              name: ""
            })
          }} type="primary">
            أضف جديد
          </ButtonCustum>
        </>
      } title="قسم الأعلانات">
        <TableCustum url={pointsU.getAds} columns={columns} />
      </CardCustum>
      <ModalCustum footer="" title="أضف أعلان جديد" setVisible={changeVisible} visible={visible}>
        <Form form={form} {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="الأسم"
          >
            <InputCustum placeholder="أدخل أسم الأعلان" />
          </Form.Item>
          <Form.Item
            name="url"
            label="الرابط"
          >
            <InputCustum placeholder="أدخل الرابط" />
          </Form.Item>
          <Form.Item
            name="position"
            label="الموقع"
          >
            <Select options={AdsYeri} placeholder="يرجى الأختيار">
            </Select>
          </Form.Item>
          <Form.Item
            name="published"
            label="الحالة"
          >
            <Select placeholder="يرجى الأختيار">
              <Select.Option value={true}>نشر</Select.Option>
              <Select.Option value={false}>عدم النشر</Select.Option>
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              أرسال
            </Button>
          </Form.Item>
        </Form>
      </ModalCustum>
    </>
  )
}