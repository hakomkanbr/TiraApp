import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import appActions from '../../../redux/app/actions';
// import TopbarNotification from './TopbarNotification';
// import TopbarMessage from './TopbarMessage';
// import TopbarSearch from './TopbarSearch';
import TopbarUser from './TopbarUser';
import TopbarWrapper from './Topbar.styles';
import { MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { toggleCollapsed } = appActions;

export default function Topbar() {
  const [selectedItem, setSelectedItem] = React.useState('');
  //const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
  const customizedTheme = {
    backgroundColor : "#fff",
    textColor : "#444"
  }
  const { collapsed, openDrawer } = useSelector(state => state.App);
  const dispatch = useDispatch();
  const handleToggle = React.useCallback(() => dispatch(toggleCollapsed()), [
    dispatch,
  ]);
  const isCollapsed = collapsed && !openDrawer;
  const styling = {
    background: customizedTheme.backgroundColor,
    position: 'fixed',
    width: '100%',
    height: 60,
  };
  return (
    <TopbarWrapper data-rtl="rtl">
      <Header
        style={styling}
        
        className={
          isCollapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
        }
      >
        <div className="isoLeft">
          <button
            className={
              isCollapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
            }
            style={{ color: customizedTheme.textColor }}
            onClick={handleToggle}
          ><MenuUnfoldOutlined/></button>
        </div>

        <ul className="isoRight">
          {/* <li className="isoSearch">
            <TopbarSearch />
          </li> */}

          {/* <li
            onClick={() => setSelectedItem('notification')}
            className={selectedItem ? 'isoNotify active' : 'isoNotify'}
          >
            <TopbarNotification />
          </li> */}

          {/* <li onClick={() => setSelectedItem('message')} className="isoMsg">
            <TopbarMessage />
          </li> */}

          <li onClick={() => setSelectedItem('user')} className="isoUser">
            <TopbarUser />
          </li>
        </ul>
      </Header>
    </TopbarWrapper>
  );
}