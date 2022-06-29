import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postData } from "utils/fetchData";
import router from "next/router";
import SignInStyleWrapper from "styles/Login.style";


const SingIn = () => {

  const [username, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  // const isError = useSelector((state) => state.Auth.error);
  // const errorMessage = useSelector((state) => state.Auth.errorMessage);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try{
      var res = await postData("/Authenticate/login" , {...values});
      window.localStorage.setItem(process.env.TOKEN_NAME , res?.token);
      router.push("/admin");
    }catch(err){
      console.info("catch" , err);
    }   
  }
  // useEffect(()=>{
  //   fetch("http://localhost:5000/api/Authenticate/login" , {
  //     method : "post"
  //   })
  // },[])

  return (
    <SignInStyleWrapper>
      <div id="login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
          labelCol={{ span: 24 }}
          onFinish={onFinish}
        >
          {/* <div className="logo">
            <img src={logo} alt="not found"/>
          </div> */}
          <h4>تسجيل الدخول</h4>
          {/* {errorMessage ? (
            <Alert
              style={{ marginBottom: 15 }}
              message={errorMessage}
              type="info"
            />
          ) : (
            ""
          )} */}
          <div id="error-content"></div>
          <Form.Item
            name="username"
            label="أسم المستخدم"
            rules={[
              { required: true, message: "يرجى ملئ هذا الحقل" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={(e) => SetUserName(e.target.value)}
              placeholder="أسم المستخدم"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="كلمة السر"
            rules={[{ required: true, message: "يرجى ملئ هذا الحقل" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={(e) => SetPassword(e.target.value)}
              placeholder="Parola"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>تذكرني</Checkbox>
            </Form.Item>
          </Form.Item>

          {/* <Form.Item name="remember" valuePropName="checked" noStyle>
            <NavLink className="login-form-forgot" to="dasdfasf">
              Parolamı unuttum?
            </NavLink>
          </Form.Item> */}

          <Form.Item className="register">
            <Button type="primary" block htmlType="submit" className="login-form-button" >
              تسجيل الدخول
            </Button>
            {/* <span>
              Üye değilse ? <NavLink to="fsafsad">Kayıt Ol</NavLink>
            </span> */}
          </Form.Item>
        </Form>
      </div>
    </SignInStyleWrapper>
  );
};

export default SingIn;