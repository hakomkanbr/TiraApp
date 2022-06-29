import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import appActions from '../../../redux/app/actions';
import SidebarWrapper from './Sidebar.styles';
import Link from "next/link";
import {
  AppstoreOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

var { toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed } = appActions;

export default function Sidebar() {
  const dispatch = useDispatch();
  const {
    view,
    openKeys,
    collapsed,
    openDrawer,
    current,
    height,
  } = useSelector(state => state.App);
  //   const customizedTheme = useSelector(
  //     state => state.ThemeSwitcher.sidebarTheme
  //   );

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));
    if (view === 'MobileView') {
      setTimeout(() => {
        dispatch(toggleCollapsed());
        // dispatch(toggleOpenDrawer());
      }, 100);

      // clearTimeout(timer);
    }
  }
  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(
      key => !(openKeys.indexOf(key) > -1)
    );
    console.info(openKeys);
    const latestCloseKey = openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }
    dispatch(changeOpenKeys(nextOpenKeys));
  }
  const getAncestorKeys = key => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  const isCollapsed = collapsed && !openDrawer;
  const mode = isCollapsed === true ? 'vertical' : 'inline';
  const onMouseEnter = event => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
  const styling = {
    backgroundColor: "#0b0b37",
  };
  const submenuStyle = {
    backgroundColor: '',
    color: "rgb(200 200 200)",
  };
  const submenuColor = {
    color: "rgb(200 200 200)",
  };
  return (
    <SidebarWrapper style={styling}>
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={isCollapsed}
        width={240}
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={styling}
      >
        <h1 style={{
          fontSize: 28,
          padding : "20px 0px 0px",
          textAlign: "center",
          "font-family": "fantasy",
          "letter-spacing": "3px"
        }} className='text-white'>{!isCollapsed ? 
        <>PRINCE <span style={{color : "red"}}> TIRES </span> </>: "P"}</h1>
        {/* <Logo collapsed={isCollapsed} /> */}
        {/* <Scrollbars style={{ height: height - 70 }}> */}
        <Menu
          onClick={handleClick}
          theme="dark"
          className="isoDashboardMenu"
          mode={mode}
          // openKeys={isCollapsed ? [] : openKeys}
          selectedKeys={current}
        // onOpenChange={onOpenChange}
        >
          <Menu.Item key={1} >
            <Link href="/admin/product">
              <span className="isoMenuHolder" style={submenuColor}>
               <AppstoreOutlined /> 
                <span className="nav-text">
                  product  
                </span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key={2} >
            <Link href="/admin/ads">
              <span className="isoMenuHolder" style={submenuColor}>
               <AppstoreOutlined /> 
                <span className="nav-text">
                 ads  
                </span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key={3} >
            <Link href="/admin/sitting">
              <span className="isoMenuHolder" style={submenuColor}>
               <AppstoreOutlined /> 
                <span className="nav-text">
                  sitting  
                </span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key={4} >
            <Link href="/admin/security">
              <span className="isoMenuHolder" style={submenuColor}>
               <AppstoreOutlined /> 
                <span className="nav-text">
                security  
                </span>
              </span>
            </Link>
          </Menu.Item>
        </Menu>
        {/* </Scrollbars> */}
      </Sider>
    </SidebarWrapper>
  );
}
