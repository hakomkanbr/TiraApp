import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import pointsU from "points";
import { getData } from "utils/fetchData";
import LeftSidebar from "components/leftSidebar";
import { useRouter } from "next/router";

export default function IcerıkDetay() {
    const [data , setData] = useState();
    useEffect(()=>{
        const path = window.location.pathname;
        var path2 = path.substr(path.lastIndexOf("/") +1 , path.length);
        var path3 = path2.substr(path2.lastIndexOf("-")+1 , path2.length)
        getData(pointsU.sgetIcerik + "?eventId=" + path3).then((res)=>{
            setData(res);
        });
    },[]);

    return (
        <Container className="mt-100">
            <Row>
                <Col sm={8}>
                    <div id='detay'>
                        {
                            data?.photo64 ? (
                                <img src={data.photo64} alt={data?.title} />
                            ) : ""
                        }
                        <h2>{data?.title}</h2>
                        {parse(`${data?.body}`)}
                    </div>
                </Col>
                <LeftSidebar />
            </Row>
        </Container>
    )
}
