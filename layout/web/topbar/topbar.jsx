
import MediaEnums from "enums/MediaEnums";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./topbar.module.scss";

export default function Topbar({ sosyal }) {
    // if(!data.length) return "";
    return (
        <>
            <div className={styles.topbar}>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} className={styles.logo}>
                            <img src="/assets/images/logo.jpg" className="d-block mx-auto mx-md-0" width="150px" alt="logo" />
                        </Col>
                        <Col>
                            <div className="text-right" style={{height : "100%"}}>
                                <div className={styles.socialIcons}>
                                    {
                                        sosyal?.map((n, i) => {
                                            return (
                                                <div className={n?.name}> <a href={n?.url ?? "#"}>
                                                    {
                                                        MediaEnums?.map(m => {
                                                            if (n?.name === m?.value) {
                                                                return (
                                                                    m.icon
                                                                )
                                                            }
                                                        })
                                                    }
                                                </a> </div>
                                            )
                                        })
                                    }
                                </div>
                                {/* <div className={styles.search}>
                                    <InputCustum placeholder="search.." className={styles.inputContent} prefix={<AiOutlineSearch />}/>
                                </div> */}
                                <div className={styles.callSupport}>
                                    <span>call support</span>
                                    <div>+ 90 538 201 5072</div>
                                </div>
                                {/* <div className={styles.icon}>
                                    <span>13</span>
                                    <AiOutlineShoppingCart/> 
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
