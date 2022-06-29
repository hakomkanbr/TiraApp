import styled from 'styled-components';
import { palette } from 'styled-theme';
//import bgImage from '@app/assets/img/sign.jpg';
// background: u rl(${bgImage}) no-repeat center center;

const SignInStyleWrapper = styled.div`
        #login{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f1f8fb;
          .login-form{
              width: 400px;
              padding: 33px 33px !important;
              // border: 1px solid #0591aa;
              border: 1px solid #f5f3f2;
              border-radius: 5px;
              transition: 0.5s;
              background-color: white;
              // box-shadow: rgba(0,0,0,0.15) 1.95px 1.95px 2.6px;
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

              &:hover{
                  border-color:#00adcc;
              }
              .logo{
                text-align: center;
              }
              .ant-form-item-label{
                  padding: 0;
                  color: #1a3353;
                  font-weight: 700;
              }
              .ant-form-item{
                  color: #1a3353;
                  font-weight: 700;
              }
              h4{
                  text-align: center;
                  10px;
                  color: #0591aa;
                  font-weight: 600;
                  font-size: 20px;
              }
              a{
                  color: #00adcc;
                  font-weight: 600;
                  font-size: 14px;
                  transition: 0.5;
                  &:hover{
                      color: #0591aa;
                  }
              }
              .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
                  border-color: #00adcc;
              }
              .ant-checkbox-checked .ant-checkbox-inner {
                  background-color: #00adcc;
                  border-color: #0591aa;
                  &:hover{
                  border-color: #0591aa;
                  }
              }
              .ant-input-affix-wrapper:focus{
                  border-color: #00adcc;
              }
              .ant-checkbox-checked::after {
                  border: 1px solid #00adcc;

              }
              .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
                  border-color: #00adcc;
              }
              .register{
                  text-align: center;
                  button{
                      15px 0;
                      color: #fff;
                      border-color: #0591aa;
                      background: #0591aa;
                      &:hover{
                          color: #fff;
                          border-color: #00adcc;
                          background: #00adcc;
                      }
                  }
              }
          }
          @media (min-width: 1367px){
            .login-form{
                -250px;
            }
          }
        }
  }
`;

export default SignInStyleWrapper;