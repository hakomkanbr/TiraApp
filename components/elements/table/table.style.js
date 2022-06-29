import styled from "styled-components";

const TableStyle = styled.div`
table {
    3px;
    thead {
      th {
        background-color: #f6f8fb !important;
        color: #878a99 !important;
        font-size: 12px;
        // padding: 0.75em 0.6em!important;
        font-weight: 700 !important;
        .ant-checkbox-wrapper {
          align-items: center;
        }
        vertical-align: bottom;
        label {
          height: 20px;
        }
      }
      // th:nth-of-type(1){
      //     padding:0px 0px 0px 5px !important;
      //     width:5px !important;
      // }
    }
    tbody {
      td {
        font-size: 13px !important;
        padding: 7px 9px 0 !important;
        color: rgb(109, 108, 108);
      }
    }
 
    .ant-table-selection-column {
      padding-left: 15px !important;
    }
    .ant-table-expand-icon-col {
      width: 32px !important;
    }
    .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
      background: #f7fcff !important;
    }
  }
  .ant-pagination.mini .ant-pagination-total-text,
  .ant-pagination.mini .ant-pagination-simple-pager {
    flex: 1;
    color: #989a9c;
  }
 
  .ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector  , .ant-pagination.mini .ant-pagination-item{
      padding: 6px 7px;
      border-radius: 6px;
      height: 35px;
  }
  .ant-pagination-item-active {
      font-weight: 500;
      background: #5e71b3;
      color: white;
      border-color: #c4d1ff;
  }
  // .custom-tooltip-title{
 
  //     span{
  //         color: #d48806;
  //         background: #fffbe6;
  //         border:1px solid #ffe58f;
  //         padding:5px 10px;
  //         width: 130px;
  //         border-radius: 50px;
  //         auto;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         b{
  //             3px;
  //         }
  //     }
  //     .tooltip{
  //         color: #d48806;
  //         background: #fffbe6;
  //         border:1px solid #ffe58f;
  //         padding:5px 10px;
  //         width: 180px;
  //         border-radius: 50px;
  //         auto;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //     }
  //     table{
  //           10px;
  //          width: 100%;
  //         .he{
  //             background-color: #059da8 !important;
  //             color: white !important;
  //         }
  //         .day{
  //           color: #08979c;
  //           border:1px solid #87e8de;
  //           background-color: #e6fffb;
  //           font-weight: bold;
  //         }
  //         .bassay{
  //           color: #d46b08;
  //           border:1px solid #ffd591;
  //           background-color: #fff7e6;
  //         }
  //         .kalan{
  //           color: #531dab;
  //           border:1px solid #d3adf7;
  //           background-color: #f9f0ff;
  //         }
  //         thead .head{
  //             5px;
  //         }
  //     }
  // }
  // .ant-table-thead>tr>th {
  //     background-color: #f6f8fb;
  // }
  // .ant-table-tbody>tr>td {
  // background-color: #e6f7ff;
  // }
 
`;

export default TableStyle;