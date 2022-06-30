import { useRouter } from "next/router";
import pointsU from "points";
import { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { postData } from "utils/fetchData";
import SliderCustum from "./imageSilde";
import LeftSidebar from "./leftSidebar";
import CardLg from "./page-component/cardLg/CardLg";



export default function MainComponent() {
    // const params = useParams();
    const [data, setData] = useState([]);
    const [active, setActive] = useState(1);
    const [total, setTotal] = useState(1);
    const [categoryName, setCategoryName] = useState(``);
    const params = useRouter();
    const path = params.query.category;

    useEffect(async () => {
        var id = path != undefined ? path["0"] : "";
        const fetchData = async ()=>{
            var t = {
                "categorySystemId" : "1",
                "pageSize": 5,
                "currentPage": active,
                "search": "",
                "sortField": "id",
                "sortOrder": "asc",
                "ids": [
                  0
                ],
                "id": 0
            }
            if(id){
                t.categoryId = id.substr(id.lastIndexOf("-")+1 , id.length);
                delete t.categorySystemId;
            }
            setCategoryName(id.substr(0 , id.indexOf("-")));
            var res = await postData(pointsU.sgetCardContent , { ...t });
            console.info("____res" , res);
            setData(res?.data);
            setTotal(res?.total);
        }
        fetchData();
        console.warn("id" , id);
    }, [path , active]);
    
    const PaginationBasic = () => {
        let items = [];
        for (let number = 1; number <= total; number++) {
            console.warn("totatl" , total);
            if(number > Math.ceil(total / 5)) return items;
            items.push(
                <Pagination.Item onClick={paginationChage} key={number} active={number === parseInt(active)}>
                    {number}
                </Pagination.Item>,
            );
        }

        return items;
    }
    const paginationChage = (e) => {
        var key = e.target.innerText;
        setActive(key);
    }


    return (
        <Container className="mt-100">
            <Row>
                {/* <RightSidebar/> */}
                <Col sm={8}>
                    <h1 className="heading_1"><span>{categoryName}</span></h1>
                    <CardLg data={data}></CardLg>
                    <Pagination onChange={paginationChage}>
                        <Pagination.First onClick={(e)=>{setActive(1)}}/>
                        <Pagination.Prev onClick={(e)=>{setActive(active-1)}}/>
                        <PaginationBasic />
                        <Pagination.Next onClick={(e)=>{setActive(active+1)}}/>
                        <Pagination.Last onClick={(e)=>{setActive(total)}}/>
                    </Pagination>
                </Col>
                <LeftSidebar />
            </Row>
            <SliderCustum/>
        </Container>
    )
}
