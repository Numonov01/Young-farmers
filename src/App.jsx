import { useState } from "react";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  FireFilled,
  HeatMapOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
  getItem(<Link to={"/map"}>Map</Link>, "1", <HeatMapOutlined />),
  getItem(
    <Link to={"/applications"}>Applications</Link>,
    "6",
    <PieChartOutlined />
  ),

  getItem(<Link to={"/devices"}>Host Devices</Link>, "4", <DesktopOutlined />),
  getItem(<Link to={"/logs"}>Agent Logs</Link>, "5", <OrderedListOutlined />),
  getItem("Friwall", "firewall", <FireFilled />, [
    getItem(
      <Link to={"/firewall"}>Firewall list</Link>,
      "3",
      <OrderedListOutlined />
    ),
    getItem(
      <Link to={"/firewall/create"}>Create</Link>,
      "10",
      <PlusCircleOutlined />
    ),
  ]),
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

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/user/Tom">
          <UserOutlined />
          Profile
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link to="/logout">
          <UserOutlined />
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

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
        style={{
          background: "white",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ position: "sticky", top: 0 }}
          items={items}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: "1",
            width: "100%",
            background: "white", //Nav
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="../firewall.png"
              alt="icon"
              style={{
                width: 55,
                marginRight: 10,
              }}
            />
            {/* <Avatar size={40} style={{ marginRight: 10 }}>
              FW
            </Avatar> */}
            <h3 className="brand">Firewall</h3>
          </div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              href="/"
              style={{
                color: "black",
                fontSize: 18,
              }}
            >
              <Avatar src="../Boy.png" size={50} />
              {/* Profile */}
            </a>
          </Dropdown>
        </Header>
        <Content style={{ background: "#EBEDF0", borderRadius: 8 }}>
          <Router />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "#fff",
            height: 50,
          }}
        >
          Firewall ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
