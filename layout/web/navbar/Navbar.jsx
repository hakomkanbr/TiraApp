import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAds, setKategoriler } from "../../../redux/app/actions";
import pointsU from "points";
import { getData } from "utils/fetchData";
import Topbar from "../topbar/topbar";
import { Container, Nav, Navbar } from "react-bootstrap";
import InputCustum from "components/elements/input/Input";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavbarMenu({sosyal}) {
    const [data, setData] = useState();
    const [acil, setAcil] = useState();
    const adsStore = useSelector(state => state.App?.ads?.header ?? []);
    const [count, setCount] = useState(0);
    const bb = adsStore?.length;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAds = async () => {
            var result = await getData(pointsU.siteGetAds);
            var data = result;
            var obj = {};
            var header = [];
            var leftSidebar = [];
            var main = [];
            data?.map((h, k) => {
                if (h?.position === 1) {
                    header.push(h);
                }
                if (h?.position === 2) {
                    leftSidebar.push(h);
                }
                if (h?.position === 3) {
                    main.push(h);
                }
            })
            obj["header"] = header;
            obj["leftSidebar"] = leftSidebar;
            obj["main"] = main;
            console.info("adsStore" , adsStore);
            dispatch(setAds(obj));
        }
        const fetchData = async () => {
            var res = await getData(pointsU.sgetCategorys);
            setData(res);
            dispatch(setKategoriler(res));
        }
        fetchData();
        // fetchAds();
    }, []);

    useEffect(() => {
        setInterval(() => {
            setCount(count + 1);
        }, 5000);
        // return () => clearInterval(interval);
    }, []);


    const IfNotData = () => {
        if (data?.length > 0) return "";
        return (
            <>
                <Link className="nav-link" href={"kategori/"}>اخبار وتقارير</Link>
                <Link className="nav-link" href={"kategori/"}>محليات</Link>
                <Link className="nav-link" href={"kategori/"}>شؤون دولية</Link>
                <Link className="nav-link" href={"kategori/"}>رياضة</Link>
                <Link className="nav-link" href={"kategori/"}>منوعات</Link>
                <Link className="nav-link" href={"kategori/"}>كتابات</Link>
                <Link className="nav-link" href={"kategori/"}>ميديا</Link>
                <Link className="nav-link" href={"kategori/"}>كورونا</Link>
                <Link className="nav-link" href={"kategori/"}>من نحن</Link>
            </>
        )
    }

    return (
        <header>
            <Topbar sosyal={sosyal}/>
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-mid  d-md-block p-0">
                        <Navbar bg="light" expand="lg">
                            <Container>
                                {/* <Navbar.Brand>
                                    <img src="/assets/images/logo.jpg" width="150px" alt="logo"/>
                                </Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Link className="nav-link" href={"/"} active="true" >Home</Link>
                                        {
                                            data?.map((v, i) => (
                                                <Link className="nav-link"  href={`/${v.name}`.toLowerCase()}>{v.name}</Link>
                                            ))
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                                <div className="search">
                                    <InputCustum placeholder="search.." prefix={<AiOutlineSearch />}/>
                                </div>
                            </Container>
                        </Navbar>
                    </div>

                </div>
            </div>
        </header>
    )
}
