import TableStyle from "./table.style";
import { Col, Menu, Row, Form, Checkbox, Table } from "antd";
import { useCallback, useEffect, useState } from "react";
import ButtonCustum from "../button/Button";
import debounce from "lodash/debounce";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
// import { IoMdOptions } from "react-icons/io";
import InputCustum from "../input/Input";
import { useSelector } from "react-redux";
import {postData} from "utils/fetchData";

export const filterParams = (params) => {
  delete params.data;
  delete params.pagination;
};

export const getRandomuserParams = (params) => {
  return {
    pageSize: params?.pagination?.pageSize ?? 10,
    currentPage: params?.pagination?.current ?? 1,
    search: params?.pagination?.search ?? "",
    sortField: params?.sortField ?? "id",
    sortOrder: params?.sortOrder ?? "descend",
    ...params,
  };
};

const TableCustum = ({ ...props }) => {
  // parametre come from props
  const { url, params } = props;
  // datatable setting
  const [datatable, setDatatable] = useState({
    pagination: {
      current: 1,
      // itemRender : (_, type, originalElement) => {
      //   if (type === 'prev') {
      //     return <a></a>;
      //   }
      
      //   if (type === 'next') {
      //     return <a></a>;
      //   }
      
      //   return originalElement;
      // },
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: [10, 25, 50, 100, 1000],
      showTotal: (total, range) => {
        return ` يعرض ${range[0]} من ${total} قيود .`;
      },
      sortOrder: "id",
      sortField: "descend",
    },
    sortOrder: "id",
    sortField: "descend",
    data: [],
    Ids: [],
    ...params
  });
  // diger component reload datatable gerekiyorse
  const isReload = useSelector((state) => state.App.reloadDatatable);

  const { Ids } = datatable;

  // loadin table
  const [loading, setLoading] = useState(false);

  // search input
  const [search, setSearch] = useState("");

  // refresh data in table
  const getResults = async function (params = {}) {
    params.search = params.search || search;
    setLoading(true);
    let y = getRandomuserParams(params);
    filterParams(y);
    try {
      let result = await postData(url , y);
      setDatatable({
        ...datatable,
        data: result?.data,
        pagination: {
          ...params.pagination,
          total: result?.total,
        },
      });
      setLoading(false);
    } catch (e) {
      // ErrorProvider(e);
    }
  };

  // change the table  when working
  const handleTableChange = (pagination, filters, sorter) => {
    // pagination change yaparken önce gelmiyordu
    pagination.showTotal= (total, range) => {
      return ` يعرض ${range[0]} من ${total} قيود .`;
    };
    console.info("pagination , filters , sorter");
    console.info(pagination , filters , sorter);
    getResults({
      ...datatable,
      sortField: pagination?.sortField,
      sortOrder: pagination?.sortOrder,
      pagination,
      ...filters,
    });
  };

  const onChangeSelectedCheckBox = (Ids) => {
    setDatatable({
      ...datatable,
      Ids,
    });
  };

  // select rows
  const rowSelection = {
    selectedRowKeys: Ids,
    onChange: onChangeSelectedCheckBox,
  };

  useEffect(() => {
    getResults({ ...datatable });
  }, [isReload]);

  // filter
  const [form] = Form.useForm();
  // filter
  const [isFilterOpen, setIsFilterOpen] = useState(null);
  // search Input
  const [isSearchOpen, setIsSearchOpen] = useState(null);

  // show / hide filter
  const isFilter = (e) => {
    if (!isFilterOpen) {
      setIsFilterOpen(true);
    } else {
      form.resetFields();
      getResults({ ...datatable });
      setIsFilterOpen(false);
    }
  };

  // when submit form in filtere
  const filtereSubmit = (values) => {
    var obj = {};
    Object.keys(values).map((item, index) => {
      if (typeof values[item] === "object" && "value" in values[item]) {
        obj[item] = values[item].value;
        return;
      }
      obj[item] = values[item];
    });
    getResults({ ...datatable, ...obj });
  };

  // when search input in table
  const searchTable = (e) => {
    setSearch(e.target?.value ?? "");
    getResults({ ...datatable, search: e.target?.value ?? "" });
  };
  const dtSearchOpen = (e) => {
    setIsSearchOpen(false);
    getResults({ ...datatable, search: "" });
  };

  //For Download DataTable As Excel File
  const excelIndir = () => {
    var y = getRandomuserParams({ ...datatable });
    apiServices
      .ExcelIndir("/GetBasvurularExcel", {
        ...y,
      })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "Etkinlikler.xlsx";
        document.body.appendChild(a);
        a.click();
      });
  };
  // download item
  const downloadItem = (
    <Menu>
      <Menu.Item>
        <a href="javascript:void(0);" onClick={excelIndir}>
          Excel indir
        </a>
      </Menu.Item>
    </Menu>
  );

  const debouncedChangeHandler = useCallback(debounce(searchTable, 300), []);

  //Show or Hide Selected column
  const [colvisSetting, setColvisSetting] = useState({
    value: false,
    checkedColumns: [],
    visibleMenuSettings: false,
    columns: props.columns,
    initialColumns: [],
  });

  const [arr, setArr] = useState([]);

  const expandedRowRender = (e) => {
    const columns = props.columns;
    let type = ["xxl", "xl", "lg", "md", "sm", "xs"];
    const responsiveMap = {
      xs: 575,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600,
    };
    columns.map((item, i) => {
      let responsive = item.responsive;
      if (responsive && type.map((v, i) => responsive[0] === v)) {
        var s = responsiveMap[responsive[0]];
        if (window.innerWidth < s) {
          delete item["responsive"];
          arr.push(item);
        }
      }
    });

    return (
      <Table
        style={{ padding: "30px" }}
        columns={arr}
        dataSource={[e]}
        pagination={false}
      />
    );
  };

  useEffect(() => {
    setColvisSetting({
      ...colvisSetting,
      initialColumns: colvisSetting.columns,
    });
  }, []);

  const handleVisibleChange = (flag) => {
    setColvisSetting({ ...colvisSetting, visibleMenuSettings: flag });
  };

  const onChange = (e) => {
    var checkedColumns = colvisSetting.checkedColumns;

    if (e.target.checked) {
      checkedColumns = checkedColumns.filter((id) => {
        return id !== e.target.id;
      });
    } else if (!e.target.checked) {
      checkedColumns?.push(e.target.id);
    }

    var filtered = colvisSetting.initialColumns;
    for (var i = 0; i < checkedColumns.length; i++)
      filtered = filtered?.filter((el) => {
        return el.dataIndex !== checkedColumns[i];
      });

    setColvisSetting({
      ...colvisSetting,
      columns: filtered,
      checkedColumns: checkedColumns,
    });
  };

  // // colvis item
  const colvisItem = (
    <Menu>
      <Menu.ItemGroup>
        {props.columns.map((col, index) => (
          <Menu.Item key={index}>
            <Checkbox id={col.dataIndex} onChange={onChange} defaultChecked>
              {" "}
              {col.title}{" "}
            </Checkbox>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <TableStyle>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <InputCustum
            prefix={<SearchOutlined />}
            onChange={debouncedChangeHandler}
            placeholder="search"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          {/* <div className="text-left">
            {Ids?.length != 0 ? (
              <>
                <span className="text-black m-r-10">
                  <span
                    style={{
                      "background-color": "#d0bfbf",
                      color: "rgb(255, 255, 255)",
                      "border-radius": "50%",
                      padding: "2px 7px 2px",
                      "font-size": "10px",
                      position: "relative",
                      top: "-1px",
                    }}
                  >
                    {rowSelection.selectedRowKeys.length}
                  </span>{" "}
                  veri seçildi
                </span>
                <ButtonCustum type="error">
                  <DeleteOutlined />
                </ButtonCustum>
              </>
            ) : (
              ""
            )}

            {props.filtere && !isFilterOpen ? (
              <ButtonCustum onClick={isFilter} className="m-l-5" type="primary">
                <FilterOutlined /> Filtere
              </ButtonCustum>
            ) : (
              ""
            )}

            {props.indir ? (
              <Dropdown overlay={downloadItem} placement="bottomCenter" arrow>
                <ButtonCustum className="m-l-5" type="primary">
                  <DownloadOutlined /> İndir
                </ButtonCustum>
              </Dropdown>
            ) : (
              ""
            )}

            <Dropdown
              overlay={colvisItem}
              placement="bottom"
              onVisibleChange={handleVisibleChange}
              visible={colvisSetting.visibleMenuSettings}
            >
              <ButtonCustum className="m-l-5" type="primary">
                <BsToggles /> Sütünler
              </ButtonCustum>
            </Dropdown>
          </div> */}
        </Col>
      </Row>

      {isFilterOpen && props.filtere ? (
        <>
          <hr style={{ color: "#979191" }} />
          <Form form={form} onFinish={filtereSubmit}>
            <Row justify="space-between" gutter={[16, 24]}>
              <Col className="text-right gutter-row" span={20}>
                {props.filtere}
              </Col>
              <Col className="text-right gutter-row" span={4}>
                <ButtonCustum type="dark" htmlType="submit">
                  {/* <IoMdOptions style={{ marginRight: 2 }} /> */}
                  Raporla
                </ButtonCustum>
                <ButtonCustum onClick={isFilter} className="m-l-5" type="primary">
                  <CloseOutlined />
              </ButtonCustum>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        ""
      )}

      <Table
        size="small"
        columns={colvisSetting.columns}
        style={{ width: "100%", marginTop: 10 }}
        className={props.className}
        dataSource={datatable.data}
        pagination={datatable.pagination}
        loading={loading}
        onChange={handleTableChange}
        // locale={tr_TR}
        expandable={
          props.responsive > window.innerWidth ? { expandedRowRender } : null
        }
        rowSelection={rowSelection}
      />
    </TableStyle>
  );
};

export default TableCustum;