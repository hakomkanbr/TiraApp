import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import MediaEnums from "../enums/MediaEnums";
import pointsU from "points";
import { FaCalendar } from "react-icons/fa";
import { setSosyalAction } from "redux/app/actions";
import { postData, getData } from "utils/fetchData";
import InputCustum from "./elements/input/Input";
import SelectCustum from "./elements/select/SelectSingle";
import { Checkbox } from "antd";

export default function LeftSidebar() {

    const [sosyal, setSosyal] = useState();
    const [enFazlaOkuyanlar, setEnFazlaOkuyanlar] = useState();
    const [rssEvent, setRssEvent] = useState();
    const dispatch = useDispatch();
    const params = useRouter();
    const adsStore = useSelector(state => state.App?.ads?.leftSidebar ?? []);
    const [count, setCount] = useState(0);
    const bb = adsStore?.length;

    useEffect(() => {
        const getData1 = async () => {
            var res = await postData(pointsU.getRssEvents, {
                "categoryId": parseInt(params?.id) ?? 0,
                "pageSize": 5,
                "currentPage": 1,
                "search": "",
                "sortField": "id",
                "sortOrder": "asc",
                "ids": [
                    0
                ],
                "id": 0
            });
            setRssEvent(res.data);
        }
        const getData2 = async () => {
            var res = await getData(pointsU.getSosyal);
            console.info("1111", res);
            setSosyal(res);
            dispatch(setSosyalAction(res));
        }
        const getData3 = async () => {
            var res = await postData(pointsU.GetMostReadedEvents, {
                "categoryId": parseInt(params?.id) ?? 0,
                "pageSize": 5,
                "currentPage": 1,
                "search": "",
                "sortField": "id",
                "sortOrder": "asc",
                "ids": [
                    0
                ],
                "id": 0
            });
            setEnFazlaOkuyanlar(res.data);

        }
        // getData2();
        // getData1();
        // getData3();
    }, []);

    useEffect(() => {
        setInterval(() => {
            setCount(count + 1);
        }, 5000);
        // return () => clearInterval(interval);
    }, []);

    return (
        <div className="left-content">
            <h1 className="heading_1 leftSideBar" style={{padding : "20px 0 0"}}><span>Filtere</span></h1>
            <div className="p-20">
                <div className="m-b-20">
                    <InputCustum placeholder="width" />
                </div>
                <div className="m-b-20">
                    <InputCustum placeholder="Aspect" />
                </div>
                <div className="m-b-20">
                    <InputCustum placeholder="Diameter" />
                </div>
                <div className="m-b-20">
                    <SelectCustum style={{ width: "100%" }} options={[
                        {
                            label: "label 1",
                            value: "value 1"
                        },
                        {
                            label: "label 2",
                            value: "value 2"
                        },
                        {
                            label: "label 3",
                            value: "value 3"
                        },
                        {
                            label: "label 4",
                            value: "value 4"
                        }
                    ]} placeholder="All Brands">

                    </SelectCustum>
                </div>
                <div className="m-b-20">
                    <SelectCustum style={{ width: "100%" }} options={[
                        {
                            label: "label 1",
                            value: "value 1"
                        },
                        {
                            label: "label 2",
                            value: "value 2"
                        },
                        {
                            label: "label 3",
                            value: "value 3"
                        },
                        {
                            label: "label 4",
                            value: "value 4"
                        }
                    ]} placeholder="All Models">

                    </SelectCustum>
                </div>
                <div className="m-b-20">
                    <SelectCustum style={{ width: "100%" }} options={[
                        {
                            label: "label 1",
                            value: "value 1"
                        },
                        {
                            label: "label 2",
                            value: "value 2"
                        },
                        {
                            label: "label 3",
                            value: "value 3"
                        },
                        {
                            label: "label 4",
                            value: "value 4"
                        }
                    ]} placeholder="All Types">

                    </SelectCustum>
                </div>
                <div className="m-b-20">
                    <SelectCustum style={{ width: "100%" }} options={[
                        {
                            label: "label 1",
                            value: "value 1"
                        },
                        {
                            label: "label 2",
                            value: "value 2"
                        },
                        {
                            label: "label 3",
                            value: "value 3"
                        },
                        {
                            label: "label 4",
                            value: "value 4"
                        }
                    ]} placeholder="Home">

                    </SelectCustum>
                </div>
                <h3 style={{marginBottom : "5px"}}>Home</h3>
                <hr style={{marginTop : "5px"}}/>
                <Checkbox.Group
                    style={{
                        width: '100%',
                    }}
                >
                    <Row>
                        <Col span={8}>
                            <Checkbox value="home">Home</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Group">Group</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </div>
        </div>
    )
}
