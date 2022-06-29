import { Button, Col, Row } from "react-bootstrap";
import styles from "./section.module.scss";

export default function Section1() {
    return (
        <div  className={styles.section1}>
            <Row>
                <Col>
                    <div className={styles.textContent}>
                        <div className="heading_1"> <span>MODERN EQUIPMENT</span> </div>
                        <h3> Professionel washing and cleaning of you car </h3>
                        <p> For your car we will do everything – advice, repairs and maintenance. We are the preferred choice by many car owners because our experience and knowledge is self-evident. </p>
                        <h5> Call for book : <span className={styles.number}>0538 201 50 72</span></h5>
                        <Button className={styles.readMore}>
                            READ MORE
                        </Button>
                    </div>
                </Col>
                <Col className="p-r-0">
                    <img alt="fill" width="100%" src="/assets/images/img1.png"/>
                </Col>
            </Row>
        </div>
    )
}
