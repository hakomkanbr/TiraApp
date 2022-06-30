import { useSelector } from "react-redux";
// import "./footer.scss";
export default function Footer() {
    const kategoriler = useSelector(state => state.App.kategoriler);
    return (
        <div id="footer">
            <footer className="footer-06">
                <div className="container">
                    {/* <div className="row align-items-center align-items-stretch mb-5">
                        <div className="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
                            <div className="w-100">
                                <span className="subheading">أشترك ليصلك كل جديد</span>
                                <h3 className="heading-section"><h2 className="footer-heading"><a href="#" className="logo">Akhbar <span>News</span></a></h2></h3>
                            </div>
                        </div>
                        <div className="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right">
                            <form action="#" className="subscribe-form w-100">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="أدخل البريد الألكتروني"/>
                                        <button type="submit" className="form-control submit"><span>أرسال</span></button>
                                </div>
                            </form>
                        </div>
                    </div> */}
                    <div className="row pt-4">
                        <div className="col-md-3 col-lg-4">
                            <div className="row">
                                <div className="col-md-12 col-lg-9  mb-md-0 mb-4">
                                    <h2 className="footer-heading"><a href="#" className="logo">PRINCE <span>TIRES</span></a></h2>
                                    <p>
                                        Good Deal Tire Ltd.
                                        Unit-12, 2180 Pegasus Way NE
                                        Calgary, AB  T2E8M5
                                        (403) 230-0536
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-9 col-lg-8 roder-md-last">
                            <div className="row">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">الأقسام</h2>
                                    <div className="widget-content">
                                        <ul className="tags">
                                            {
                                                kategoriler?.map((v, i) => (
                                                    <li><a href="#" onClick={(e) => { window.location.assign("/category/" + v.name + "-" + v.id) }} className="py-1 d-block"><span className="ion-ios-checkmark-circle-outline mr-2"></span>{v.name}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">معلومات الأتصال</h2>
                                    <div className="widget-content">
                                        <div style={{ color: "rgb(253 253 253)", letterSpacing: "0.3px" }}> <b style={{ textAlign: "right" }}>الأيميل :</b>      info@ahparyamen.com</div>
                                        <div style={{ color: "rgb(253 253 253)", letterSpacing: "0.3px" }}> <b style={{ textAlign: "right" }}>رقم الجوال :</b> +90 536 623 64 44</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-links">
                                <li><a className="hover-line" href="#">Terms of Use</a></li>
                                <li><a className="hover-line" href="#">Ad Choices</a></li>
                                <li><a className="hover-line" href="#">Licence Footage</a></li>
                                <li><a className="hover-line" href="#">Sitemap</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright">© <script> document.write(new Date().getFullYear())</script>2022 Notizie Powered by DynamicLayers</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
