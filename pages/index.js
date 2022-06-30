import Contact from "components/page-component/contact/contact";
import Manset from "components/page-component/manset/manset";
import Product from "components/page-component/products/product";
import Section1 from "components/page-component/section/section";
import Footer from "layout/web/Footer/Footer";
import NavbarMenu from "layout/web/navbar/Navbar";
import { getData } from "utils/fetchData";

const Home = ({sosyal}) => {
  return(
    <div className="home_page">
      {/* <NavbarMenu sosyal={sosyal}/> */}
      <Manset/>
      <Section1/>
      {/* <Product title={true} products={products}/>
      <Product title={false} products={products}/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const sosyal = await getData("/Site/GetSocials");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      sosyal : []
    },
  }
}

export default Home;

