import styled from 'styled-components';
import { palette } from 'styled-theme';
// import { transition, borderRadius } from '@app/lib/helpers/style_utils';

const SidebarWrapper = styled.div`  
  .ant-layout-sider-collapsed{
    flex: 0 0 42px!important;
    max-width: 42px!important;
    min-width: 42px!important;
  }
 
  .isomorphicSidebar {
    z-index: 1000;
    background:#2d3446;
    width: 2 20px;
    flex: 0 0 2 20px;
    .scrollarea {
      height: calc(100vh - 70px);
    }


    @media only screen and (max-width: 767px) {
      width: 240px !important;
      flex: 0 0 240px !important;
    }

    &.ant-layout-sider-collapsed {
      @media only screen and (max-width: 767px) {
        width: 0;
        min-width: 0 !important;
        max-width: 0 !important;
        flex: 0 0 0 !important;
      }
    }

    .isoLogoWrapper {
      height: 60px;
      background: #fff;
      border-right : 1px solid #2d344614;
      border-bottom: 1px solid #2d344614;
      0;
      padding: 0 10px;
      text-align: center;
      overflow: hidden;
      h3 {
        a {
          font-size: 15px;
          font-weight: 100;
          60px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: black;
          display: block;
          text-decoration: none;
          img{
            height : 40px;
          }
        }
      }
    }

    &.ant-layout-sider-collapsed {
      .isoLogoWrapper {
        padding: 0;

        h3 {
          a {
            font-size: 21px;
            font-weight: 500;
            letter-spacing: 0;
          }
        }
      }
    }

    .isoDashboardMenu {
      padding-top: 25px;
      padding-bottom: 35px;
      background: transparent;




      a {
        text-decoration: none;
        font-weight: bold;
      }

      .ant-menu-item {
        width: 90%;
        display: -ms-flexbox;
        display: flex;
        border-radius: 0 7px 7px 0;
        -ms-flex-align: center;
        align-items: center;
        0;
      }

      .isoMenuHolder {
        display: flex;
        align-items: center;
        span{
          margin-left: 8px;
        }
        i {
          font-size: 19px;
          color: inherit;
          ${(props) =>
            props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '3px 10px 0 0'};
          width: 14px;
          color: #fff;
        }
      }

      .anticon {
        font-size: 14px;
        10px;
        color: inherit;
      }

      .nav-text {
        font-size: 13px;
        color: inherit;
        font-weight: 400;
        letter-spacing: 0.1px;
      }

      .ant-menu-item-selected {
        background-color: rgba(117 ,193, 195 , 0.18) !important;
        .anticon {
          color: #05bbc8;
        }

        i {
          color: #e6e6fe;
        }

        .nav-text {
          color: #05bbc8;
        }
      }

      > li {
        &:hover {
          i,
          .nav-text {
            color: #55a0a2;
          }
        }
      }
    }

    .ant-menu-submenu-open > .ant-menu-submenu-title{
      background-color: rgba(117 ,193, 195 , 0.18) !important;
      width: 100%!important;
      border-radius:0!important;
    }
    .ant-menu-submenu-title{

      i{
        top : 55%;
      }
    }
   
    .ant-menu-dark .ant-menu-inline.ant-menu-sub {
      background: ${palette('secondary', 5)};
    }

    .ant-menu-submenu-inline,
    .ant-menu-submenu-vertical {
      > .ant-menu-submenu-title {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 14px!important;

        > span {
          display: flex;
          align-items: center;
        }

        .ant-menu-submenu-arrow {
          left: ${(props) => (props['data-rtl'] === 'rtl' ? '25px' : 'auto')};
          right: ${(props) => (props['data-rtl'] === 'rtl' ? 'auto' : '25px')};

          &:before,
          &:after {
            width: 8px;
          }

          &:before {
            transform: rotate(-45deg) translateX(3px);
          }

          &:after {
            transform: rotate(45deg) translateX(-3px);
          }

          ${'' /* &:after {
            content: '\f123';
            'Ionicons' !important;
            font-size: 16px;
            color: inherit;
            left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
            right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
          } */};
        }

        &:hover {
          .ant-menu-submenu-arrow {
            &:before,
            &:after {
              color: #ffffff;
            }
          }
        }
      }


      .ant-menu-inline,
      .ant-menu-submenu-vertical {
        > li:not(.ant-menu-item-group) {
          padding-left: ${(props) =>
            props['data-rtl'] === 'rtl' ? '0px !important' : '50px !important'};
          padding-right: ${(props) =>
            props['data-rtl'] === 'rtl' ? '50px !important' : '0px !important'};
          font-size: 13px;
          font-weight: 400;
          0;
          color: inherit;

          &:hover {
            a {
              color: #ffffff !important;
            }
          }
        }

        .ant-menu-item-group {
          padding-left: 0;

          .ant-menu-item-group-title {
            padding-left: 100px !important;
          }
          .ant-menu-item-group-list {
            .ant-menu-item {
              padding-left: 125px !important;

            }
          }
        }
      }

      .ant-menu-sub {
        box-shadow: none;
        background-color: transparent !important;
      }
    }

    &.ant-layout-sider-collapsed {
      .nav-text {
        display: none;
      }

      .ant-menu-submenu-inline > {
        .ant-menu-submenu-title:after {
          display: none;
        }
      }

      .ant-menu-submenu-vertical {
        > .ant-menu-submenu-title:after {
          display: none;
        }

        .ant-menu-sub {
          background-color: transparent !important;

          .ant-menu-item {
            height: 35px;
          }
        }
      }
    }
  }
`;

export default SidebarWrapper;