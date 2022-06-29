

import { Dropdown, Menu } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";
import ButtonCustum from "../elements/button/Button";
import Link from "next/link";
import { reloadDatatable, setKategoriId } from "../../redux/app/actions";
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { postData } from "utils/fetchData";

const Tablemenuitems = (props) => {

  const dispatch = useDispatch()
  var { detay } = props;
  const deleteItem = () => {
    try {
      Swal.fire({
        title: "هل أنت متأكد أنك تريد الحذف ?",
        icon: "warning",
        // text: "devam etmek istiyor musunuz?",
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: "لا",
        confirmButtonText: "نعم",
      }).then(async confirm => {
        if (confirm.isConfirmed) {
          var t = await postData(props.sil?.url , {
            ids: [props.sil?.id],
            currentPage: 1,
            pageSize: 10,
            search: "",
            sortField: "descend",
            sortOrder: "id"
          } , true);
          dispatch(reloadDatatable());
          Swal.fire({
            title: "تم الحذف",
            icon: "success",
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonText: "تمام",
          })
        }
      });
    } catch (err) {
      // ErrorProvider(err);
    }
  }

  var Main = (
    <>
          {props?.detay ? (
        <ButtonCustum onClick={() => {
          // console.info(detay?.subStr(detay.lastIndexOf("/")+1))
          dispatch(setKategoriId(props.sil?.id));
          window.sessionStorage.setItem("kategoriId", props.sil?.id);
          window.sessionStorage.setItem("kategori", props.sil?.text);
        }}>
          <Link href={props.detay}><a><SearchOutlined/></a></Link>
        </ButtonCustum>
      ) : ""}
      {
        props.duzenle ? (
          <ButtonCustum>
            <Link href={props.duzenle ?? "notfound"}><EditOutlined /></Link>
          </ButtonCustum>
        ) : ""
      }
      {props?.sil ? (
        <ButtonCustum disabled={props?.sil?.disabled ? true : false}>
          <a onClick={deleteItem}  href="#"><DeleteOutlined /></a>
        </ButtonCustum>
      ) : ""}

    </>
  )

  return Main;

  return (
    <span>
      <Dropdown
        overlay={
          <Menu>
            {props.duzenle ? (
              <Menu.Item>
                <Link href={props.duzenle}>تعديل</Link>
              </Menu.Item>
            ) : ""}
            {props.sil ? (
              <Menu.Item>
                <Link onClick={deleteItem} href="#">مسح</Link>
              </Menu.Item>
            ) : ""}
            {
              props.digerComponentContent ? (
                props.digerComponentContent
              ) : ""
            }
            {props.detay ? (
              <Menu.Item onClick={() => {
                // console.info(detay?.subStr(detay.lastIndexOf("/")+1))
                dispatch(setKategoriId(props.sil?.id));
                window.sessionStorage.setItem("kategoriId", props.sil?.id);
              }}>
                <Link href={props.detay}>التفاصيل</Link>
              </Menu.Item>
            ) : ""}

          </Menu>
        }
        placement="bottomLeft"
        arrow
      >
        <ButtonCustum type="default">
          <AiOutlineEllipsis />
        </ButtonCustum>
      </Dropdown>
    </span>
  );
};


export default Tablemenuitems;
