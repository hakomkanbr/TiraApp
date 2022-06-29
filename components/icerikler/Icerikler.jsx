import React, { useEffect, useState } from 'react'
import CardCustum from "components/elements/card/Card";
import TableCustum from 'components/elements/table/Table';
import Link  from "next/link";
import Tablemenuitems from 'components/utility/datatableSettingButton';
import ModalCustum from 'components/elements/modal/Modal';
import ButtonCustum from 'components/elements/button/Button';
import pointsU from 'points';
import _app from 'utils/_app';


const columns = [
    // {
    //     title: 'الصورة',
    //     dataIndex: 'photo',
    //     render : (data)=>{
    //         return (
    //             <img width={40} height={40} src='https://marka-logo.com/wp-content/uploads/2020/04/Nike-Logo.png' alt='not found'/>
    //         )
    //     }
    // },
    {
        title: 'العنوان',
        dataIndex: 'title',
    },
    {
        title: 'الوصف',
        dataIndex: 'description',
    },
    {
        title: 'التاريخ',
        dataIndex: 'date',
        render : function(data){
            return convertDate(data);
        }
    },
    {
        title: 'الحالة',
        dataIndex: 'published',
        render : (data) => data ? "منشور" : "غير منشور" 
    },
    {
        title: 'الأحداث',
        align : "left",
        dataIndex: 'id',
        render : (data , tow , three) => {
            return (
                <Tablemenuitems sil={{url : pointsU.deleteEvent , id : data}} duzenle={"/admin/content/" + data}/>
            )
        }
    }
];

export default function Icerikler() {
    const [id,setId] = useState(_app.getSessionItem("kategoriId"));

    return (
        <>
            <CardCustum extra={
                <>
                    <ButtonCustum type="primary">
                        <Link href="/admin/content/create"><a>أضف محتوى جديد</a></Link>
                    </ButtonCustum>
                </>
            } title={"جميع محتوى :" + "(" +  _app.getSessionItem("kategori") + ")" }>
                <TableCustum params={{categoryId : parseInt(id)}} url={pointsU.getEvents} columns={columns} />
            </CardCustum>
        </>
    )
}