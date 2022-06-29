import IcerIkDetay from "components/IcerIkDetay";
import LeftSidebar from "components/leftSidebar";
import Manset from "components/page-component/manset/manset";
import Product from "components/page-component/products/product";
import Footer from "layout/web/Footer/Footer";
import NavbarMenu from "layout/web/navbar/Navbar";
import { useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { getData } from "utils/fetchData";

const Products = ({ products }) => {
  const [total, setTotal] = useState(99);
  const [active, setActive] = useState(1);
  const PaginationBasic = () => {
    let items = [];
    for (let number = 1; number <= total; number++) {
      console.warn("totatl", total);
      if (number > Math.ceil(total / 5)) return items;
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
    <div className="detayPage">
      <NavbarMenu />
      <IcerIkDetay/>
      <Footer />
    </div>
  )
}
export default Products;

