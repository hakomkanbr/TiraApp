
import React from 'react';
import { Link } from 'next';
import { useDispatch } from 'react-redux';
import TopbarDropdownWrapper from './TopbarDropdown.styles';
import { Popover } from 'antd';
import { removeToken } from 'utils/services';

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  const dispatch = useDispatch();
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="isoUserDropdown">
      {/* <Link className="isoDropdownLink" to={'/dashboard/my-profile'}>
        Profil
      </Link>
      <Link className="isoDropdownLink" to={PRIVATE_ROUTE}>
        Ayarlar
      </Link> */}
      {/* <a className="isoDropdownLink" href=''>
        Message
      </a>
      <a className="isoDropdownLink" href=''>
        Help
      </a> */}
      <div onClick={()=>{
        removeToken();
      }} className="isoDropdownLink">
        Çıkış Yap
      </div>
    </TopbarDropdownWrapper>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      arrowPointAtCenter={true}
      placement="bottomLeft"
    >
      <div className="isoImgWrapper">
        <img alt="user" src="ds.png" />
        <span className="userActivity online" />
      </div>
    </Popover>
  );
}