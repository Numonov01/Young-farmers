// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Router from "./router";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to={"/OptionOne"}>OptionOne</Link>, "1", <PieChartOutlined />),
  getItem(<Link to={"/OptionTwo"}>OptionTwo</Link>, "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem(<Link to={"/user/Tom"}>Tom</Link>, "3"),
    getItem(<Link to={"/user/Bill"}>Bill</Link>, "4"),
    getItem(<Link to={"/user/Alex"}>Alex</Link>, "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem(<Link to={"/TeamOne"}>TeamOne</Link>, "6"),
    getItem(<Link to={"/TeamTwo"}>TeamTwo</Link>, "8"),
  ]),
  getItem(<Link to={"/Files"}>Files</Link>, "9", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Router />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
