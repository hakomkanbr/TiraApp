import { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaCalendar } from "react-icons/fa";
import { useRouter } from "next/router";
import convertDate from "utils/moment";

const SliderCustum = () => {
    const params = useRouter();
    const path = params.query.category;
    const [state, setState] = useState({
        display: true,
        width: 200
    });
    const [title, setTitle] = useState();
    const [rssEvent, setRssEvent] = useState();
    const [categoryName, setCategoryName] = useState("");

    // useEffect(() => {
    //     var id = path != undefined ? path["0"] : "";
    //     postData(pointsU.getRssEvents, {
    //         "categoryId": parseInt(id.substr(id.lastIndexOf("-")+1 , id.length)) ?? 0,
    //         "pageSize": 5,
    //         "currentPage": 1,
    //         "search": "",
    //         "sortField": "id",
    //         "sortOrder": "asc",
    //         "ids": [
    //             0
    //         ],
    //         "id": 0
    //     }).then((res) => {
    //         setRssEvent(res?.data);
    //         setTitle(res?.title);
    //     });
    //     console.info("id" , id)
    //     setCategoryName(id.substr(0 , id.indexOf("-")));
    // }, []);

    // useEffect(()=>{
    //     var id = path != undefined ? path["0"] : "";
    //     setCategoryName(id.substr(0 , id.indexOf("-")));
    // },[rssEvent])



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <Container className="slide">
            <div
                style={{
                    display: state.display ? "block" : "none"
                }}
            >
                <h1 class="heading_1"><span>{categoryName ?? title}</span></h1>
                <Slider {...settings}>
                    {
                        rssEvent?.map((b, i) => {
                            return (
                                <div className="slide-content" onClick={()=> {window.location.href = b?.link}}>
                                    <img width="100%" height="200px" src={b?.photo ? "data:image/jpeg;base64," + b.photo : "/assets/images/default.png"} />
                                    <b>{b?.title}</b>
                                    <div style={{ display: "flex" }}>   {"  " +convertDate(b?.publishDate)}   <FaCalendar style={{
                                        "width": "11px",
                                        "margin-left": "5px",
                                        "margin-top": "4px"
                                    }} />
                                    </div>
                                    <div>
                                        {b?.description}
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider>
            </div>
        </Container>
    );

}

export default SliderCustum;