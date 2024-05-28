import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };

  const navStyle = {
    backgroundColor: '#1e3a8a', // Tailwind's bg-blue-900 equivalent
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "nav",
      { className: "navbar navbar-expand-lg", style: navStyle },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "button",
          {
            className: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarTogglerDemo01",
            "aria-controls": "navbarTogglerDemo01",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          },
          React.createElement("span", { className: "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarTogglerDemo01" },
          React.createElement(
            Link,
            { className: "navbar-brand", to: "/" },
            "Expense Management App"
          ),
          React.createElement(
            "ul",
            { className: "navbar-nav ms-auto mb-2 mb-lg-0" },
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "h6",
                { className: "nav-link" },
                React.createElement(UserOutlined, null),
                " ",
                loginUser && loginUser.name
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "button",
                { className: "btn btn-danger", onClick: logoutHandler },
                "Logout"
              )
            )
          )
        )
      )
    )
  );
};

export default Header;
