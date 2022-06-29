import React, { useState } from 'react'
import CardCustum from "components/elements/card/Card";
import TableCustum from 'components/elements/table/Table';
import Link  from "next/link";
import Tablemenuitems from 'components/utility/datatableSettingButton';
import ButtonCustum from 'components/elements/button/Button';
import pointsU from 'points';
import _app from 'utils/_app';
import convertDate from 'utils/moment';

const columns = [
    {
      title: 'أسم القناة',
      dataIndex: 'name',
    },
    {
        title: 'الرابط',
        dataIndex: 'url',
    },
    {
        title: 'أكثر عدد',
        dataIndex: 'max',
    },
    {
        title: 'التاريخ',
        dataIndex: 'date',
        render : function(data){
            return convertDate(data);
        }
    },
    {
        title: 'الترتيب',
        dataIndex: 'sorting',
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
                <Tablemenuitems sil={{url : pointsU.icerikSil_rss , id : data}} duzenle={"/admin/rssContent/edit/" + data}/>
            )
        }
    }
];

export default function RssIcerikler() {
    const [id,setId] = useState(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));
    return (
        <>
            <CardCustum extra={
                <>
                    <ButtonCustum type="primary">
                        <Link href="/admin/rssContent"> أضف محتوى جديد  </Link>
                    </ButtonCustum>
                </>
            } title={"جميع المحتوى (RSS)" + "(" +  _app.getSessionItem("kategori") + ")"}>
                <TableCustum params={{categoryId : parseInt(id)}} url={pointsU.rssgetIcerikler} columns={columns} />
            </CardCustum>
        </>
    )
}