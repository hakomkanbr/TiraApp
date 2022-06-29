import CardCustum from "../../../components/elements/card/Card";
import dynamic from "next/dynamic";
import ButtonCustum from "components/elements/button/Button";
import { useState } from "react";
import ModalCustum from "components/elements/modal/Modal";
import { Button, Form, Select } from "antd";
import InputCustum from "components/elements/input/Input";
import { postData } from "utils/fetchData";
import { useDispatch } from 'react-redux';
import Tablemenuitems from "components/utility/datatableSettingButton";
import pointsU from "points";
import { AiOutlineVerticalAlignTop, AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { EditOutlined } from '@ant-design/icons';
import { reloadDatatable } from "redux/app/actions";


const TableCustum = dynamic(() => import("../../../components/elements/table/Table"), {
  // Do not import in server side
  ssr: false,
});

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const kategori = () => {
  const [visible,setVisible] = useState();
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
  const columnsKategori = [
    {
      title: 'title',
      dataIndex: 'name',
    },
    {
      title: 'sort',
      dataIndex: 'sorting',
    },
    {
      title: 'status',
      dataIndex: 'published',
      render: (data) => data ? "published" : "not published"
    },
    {
      title: '',
      align: "left",
      dataIndex: 'id',
      render: (data, full, three) => {
        return (
          <>
            <ButtonCustum type="default" disabled={full["notUp"]} onClick={async () => {
              await postData(pointsU.kategoriUp , { id: full["id"] });
              dispatch(reloadDatatable(Math.random()));
            }}> 
              <AiOutlineVerticalAlignTop />
            </ButtonCustum>
            <ButtonCustum type="default" disabled={full["notDown"]} onClick={async () => {
              await postData(pointsU.kategoriDown , { id: full["id"] });
              dispatch(reloadDatatable(Math.random()));
            }}>
              <AiOutlineVerticalAlignBottom />
            </ButtonCustum>
           
            {
              full["system"] ? (
                <Tablemenuitems
                detay={"/admin/category/" + data}
                sil={{ url: pointsU.deleteKategori, id: data , text : full["name"]}}
              />
              ) : (
                <Tablemenuitems
                detay={"/admin/category/" + data}
                sil={{ url: pointsU.deleteKategori, id: data , disabled : true , text : full["name"]}}
              />
              )
            }
            <ButtonCustum onClick={() => {
              setVisible(true);
              form.setFieldsValue({
                name: full["name"],
                published: full["published"]
              })
              setId(data)
            }}>
              <EditOutlined/>
            </ButtonCustum>
          </>
        )
      }
    }
  ];
  const onFinish = async (values) => {
    try {
      values.id = id;
      await postData("/Home/AddUpdateCategory", {...values} , true);
      setVisible(false);
      dispatch(reloadDatatable(Math.random()));
    } catch (err) {
      // ErrorProvider(err);
    }
  }
  return (
    <div>
      <CardCustum extra={
        <>
          <ButtonCustum onClick={() => {
            setVisible(true);
            form.setFieldsValue({
              name: ""
            })
          }} type="primary">
            add product 
          </ButtonCustum>
        </>
      } title=" products">
        <TableCustum url="/Home/GetCategories" columns={columnsKategori}/>
    
      </CardCustum>
      <ModalCustum footer="" title="add new product" setVisible={changeVisible} visible={visible}>
        <Form form={form} {...layout} name="nest-messages"  onFinish={onFinish}>
          <Form.Item
            name="name"
            label="الأسم"
          >
            <InputCustum placeholder="أدخل أسم القسم" />
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              أرسال
            </Button>
          </Form.Item>
        </Form>
      </ModalCustum>
    </div>
  )
}

export default kategori;