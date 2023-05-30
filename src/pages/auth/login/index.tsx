import { Button, Col, Form, Input, Row, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuthLoginMutation } from "~/app/services/authService";
import { setAuthState } from "~/app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Text } = Typography;
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useAuthLoginMutation();
  const handleLogin = async () => {
    const result: any = await login({
      email: "lappham1408@gmail.com",
      password: "Lappham1408",
    });
    console.log("result", result);
    dispatch(setAuthState(result?.data));
    router.push("/store");
  };
  return (
    <>
      <article id="login-page">
        <Row justify="center" className="w-100 mb-30">
          <Col span={6}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                // remember: true,
                email: "lappham1408@gmail.com",
                password: "Lappham1408",
              }}
              onFinish={handleLogin}
            >
              <div className="logo">
                <img
                  width={500}
                  src="https://news.vmogroup.com/wp-content/uploads/2023/04/VMO_Logo_Positive.png"
                  alt="image"
                />
              </div>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "ID is required" }]}
              >
                <Input
                  suffix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter your ID"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input.Password placeholder="input password" />
              </Form.Item>
              <Text type="danger" hidden={!error}>
                The username or password is incorrect
              </Text>
              <Form.Item className="text-center" noStyle>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isLoading}
                >
                  <b>Login</b>
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </article>
    </>
  );
}
