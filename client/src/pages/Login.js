import React, { useState, useEffect } from "react";
import { Form, Input, message} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form submission handler
  const submitHandler = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      console.log(data);
      setLoading(false);
      message.success("Login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  // Redirect if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-page">
      {loading && <Spinner />}
      
        <div className="login-form">
          <h2>Welcome to My Expense Tracker</h2>
          <Form layout="vertical" onFinish={submitHandler}>
            <h1>Login Form</h1>
            <Form.Item label="Email" name="email">
              <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password"  required />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/register">Not a user? Click here to register!</Link>
              <button className="btn">Login</button>
            </div>
          </Form>
        </div>
      </div>
    
  );
};

export default Login;