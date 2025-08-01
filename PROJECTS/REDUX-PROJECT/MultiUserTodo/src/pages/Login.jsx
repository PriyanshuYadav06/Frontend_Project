import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "antd/dist/reset.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const onFinish = (values) => {
    dispatch(login({ email: values.username, password: values.password }));
    setTimeout(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      if (loggedInUser) {
        toast.success("Login", {
          duration: 2000,
        });
        navigate("/todos");
      } else {
        toast.error("Invalid credentials!", {
          duration: 2000,
        });
      }
    }, 100);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
          Welcome back
        </h1>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="mr-1" />}
              placeholder="Username"
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="mr-1" />}
              placeholder="Password"
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item className="!mb-0">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="!bg-indigo-600 hover:!bg-indigo-700 !rounded-md"
            >
              Log in
            </Button>
            or <a href="/register">Register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
