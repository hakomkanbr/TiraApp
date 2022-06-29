import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss';
import LayoutAdmin from '../layout/admin/index';
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ConfigProvider } from 'antd';
import { useRouter } from 'next/router';
import LayoutWeb from '../layout/web';
import { useEffect } from 'react';

const admin = ["/admin"];
const notLayout = ["/login"];

const ChangeLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // login controller
    // let isAuthed = isAuthorization();
    // if (!isAuthed && router.pathname.includes(admin)) {
    //   router.push("/login");
    // }
  })

  if (router.pathname.includes(admin)) {
    return (
      <LayoutAdmin>
        {children}
      </LayoutAdmin>
    )
  } else if (router.pathname.includes(notLayout)) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <LayoutWeb>
        {children}
      </LayoutWeb>
    )
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider dir="ltr">
        <ChangeLayout>
          <Component {...pageProps} />
        </ChangeLayout>
      </ConfigProvider>
    </Provider>
  )
}

export default MyApp
