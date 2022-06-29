import { Col, Container, Row } from 'react-bootstrap'
import { useState } from "react";
import Slider from "react-slick";
import React from 'react';
import { InputNumber, Rate, Space } from 'antd';
import ButtonCustum from './elements/button/Button';

const onChange = (value) => {
  console.log('changed', value);
};

class CenterMode extends React.Component {
    render() {
        const settings = {
            customPaging: function (i, h) {
                return (
                    <a>
                        <img width="100%" src={`/assets/images/indir${i + 1}.jfif`} />
                    </a>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img height={400} width="100%" alt="Img not Found" src={`/assets/images/indir1.jfif`} />
                    </div>
                    <div>
                        <img height={400} width="100%" alt="Img not Found" src={`/assets/images/indir2.jfif`} />
                    </div>
                    <div>
                        <img height={400} width="100%" alt="Img not Found" src={`/assets/images/indir3.jfif`} />
                    </div>
                    <div>
                        <img height={400} width="100%" alt="Img not Found" src={`/assets/images/indir1.jfif`} />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default function IcerIkDetay() {
    const [state, setState] = useState({
        display: true,
        width: 200
    });

    return (
        <Container style={{ padding: "50px 0" }}>
            <Row>
                <Col sm={6}>
                    <div
                        style={{
                            display: state.display ? "block" : "none"
                        }}
                    >
                        <CenterMode />
                    </div>
                </Col>
                <Col sm={6}>
                    <div className='detay-content'>
                        <h3> Piston Rod Clevis </h3>
                        <div>
                            <b className="rate-slide"><Rate defaultValue={4} /></b>{" "}<span> (1 customer review) </span>
                        </div>
                        <div className="price">
                            $53,99 <del>$58,99</del>
                        </div>
                        <div className='desc'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem udantium, totam rem aperiam, eaque ipsa quae abventore veritatis et quasi architecto beatae vitae dicta sunt explicabomo enim ipsam
                        </div>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Make</th>
                                    <td>Chevrolet</td>
                                </tr>
                                <tr className='backGrey'>
                                    <th>Model</th>
                                    <td>Blazer / Classic / Cobalt </td>
                                </tr>
                                <tr>
                                    <th>Year</th>
                                    <td>2016 / 2017 / 2018 / 2019 / 2020</td>
                                </tr>
                                <tr className='backGrey'>
                                    <th>Body Style	</th>
                                    <td> SUP </td>
                                </tr>
                                <tr>
                                    <th>Transmission</th>
                                    <td>Automatic</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div className='m-b-5'>In Stock</div>
                        <Space>
                            <InputNumber
                                defaultValue={1000}
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                        </Space>
                        <div className='btnAddToCart'>
                            <ButtonCustum>Add To Cart</ButtonCustum>
                        </div>
                        <table className='digerTable'>
                            <tbody>
                                <tr>
                                    <th>SKU : </th>
                                    <td>ZRO45VYRT</td>
                                </tr>
                                <tr>
                                    <th>Categories : </th>
                                    <td>Camshafts & Bearing, Suspension Systems</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
