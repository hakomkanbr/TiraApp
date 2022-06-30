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
    <div className="home_page">
      <NavbarMenu />
      <Manset />
      <Container>
        <Row>
          <Col md={3}>
            <LeftSidebar/>
          </Col>
          <Col md={9}>
            <Product title={false} products={products} />
            <Product title={false} products={products} />
            <Product title={false} products={products} />
            <Product title={false} products={products} />
            <div className="pagination-content">
              <Pagination onChange={paginationChage}>
                <Pagination.First onClick={(e) => { setActive(1) }} />
                <Pagination.Prev onClick={(e) => { setActive(active - 1) }} />
                <PaginationBasic />
                <Pagination.Next onClick={(e) => { setActive(active + 1) }} />
                <Pagination.Last onClick={(e) => { setActive(total) }} />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
      {
        /*
          <MainComponent/>
          <Footer/> 
        */
      }
    </div>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const products = await getData("/Site/GetProducts");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}
export default Products;

