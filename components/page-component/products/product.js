import { useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { Rate } from "antd";
import ButtonCustum from "components/elements/button/Button";

const Product = ({products , title}) => {
    const params = useRouter();
    const path = params.query.category;
    const [state, setState] = useState({
        display: true,
        width: 200
    });
    const [rssEvent, setRssEvent] = useState();
    const [categoryName, setCategoryName] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="slide-content m-t-50">
            <div>
                {
                    title ? (
                        <>
                            <div className="desc_1">{products?.description}</div>
                            <h1 className="heading_1" style={{width: "340px",margin: "0 auto 7px;"}}><span>{products?.title} {products.data.length}</span></h1>
                        </>
                    ) : ""
                }
                <Slider {...settings}>
                    {
                        products.data?.map((b, i) => {
                            if(i >= 3) return "";
                            return (
                                <div className="slide-content">
                                    <img width="100%" height="200px" src={b?.photo ? b.photo : "/assets/images/default.png"} />
                                    <div className="body">
                                        <b className="rate-slide"><Rate defaultValue={b.rate}/></b>
                                        <div className="title">{b?.title}</div>
                                        <div className="description">
                                            {b?.description}...
                                        </div>
                                        <div className="bottom">
                                            <div className="price">
                                                {b?.discount} <del>{b?.price}</del>
                                            </div>
                                            <div className="addToCartBtn">
                                                <ButtonCustum>
                                                    Add to Cart
                                                </ButtonCustum>
                                            </div>
                                            <div className="detailsBtn">
                                                <ButtonCustum>
                                                    details
                                                </ButtonCustum>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider>
                {/* <Slider {...settings}>
                    {
                        products.data?.map((b, i) => {
                            if(i < 10 || i > 20) return "";
                            return (
                                <div className="slide-content">
                                    <img width="100%" height="200px" src={b?.photo ? b.photo : "/assets/images/default.png"} />
                                    <div className="body">
                                        <b className="rate-slide"><Rate defaultValue={b.rate}/></b>
                                        <div className="title">{b?.title}</div>
                                        <div className="description">
                                            {b?.description}...
                                        </div>
                                        <div className="bottom">
                                            <div className="price">
                                                {b?.discount} <del>{b?.price}</del>
                                            </div>
                                            <div className="addToCartBtn">
                                                <ButtonCustum>
                                                    Add to Cart
                                                </ButtonCustum>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider>
                <Slider {...settings}>
                    {
                        products.data?.map((b, i) => {
                            if(i < 20 || i > 30) return "";
                            return (
                                <div className="slide-content">
                                    <img width="100%" height="200px" src={b?.photo ? b.photo : "/assets/images/default.png"} />
                                    <div className="body">
                                        <b className="rate-slide"><Rate defaultValue={b.rate}/></b>
                                        <div className="title">{b?.title}</div>
                                        <div className="description">
                                            {b?.description}...
                                        </div>
                                        <div className="bottom">
                                            <div className="price">
                                                {b?.discount} <del>{b?.price}</del>
                                            </div>
                                            <div className="addToCartBtn">
                                                <ButtonCustum>
                                                    Add to Cart
                                                </ButtonCustum>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider> */}
            </div>
        </div>
    );

}

export default Product;