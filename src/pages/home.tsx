import React, { useState } from "react";
import {
  DashboardOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography, theme } from "antd";
import Head from "next/head";
import Dashboard from "components/dashboard";
import Account from "components/account";
import Settings from "components/settings";
import Misc from "components/misc";
import AuthShowcase from "./auth-showcase";
import SignOutButton from "components/sign-out-button";

const { Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("1");

  const handleMenuClick = (key: string) => {
    setSelectedMenuItem(key);
  };

  let content: React.ReactNode = null;

  switch (selectedMenuItem) {
    case "1":
      content = <Dashboard />;
      break;
    case "2":
      content = <Account />;
      break;
    case "3":
      content = <Settings />;
      break;
    case "4":
      content = <Misc />;
      break;
    default:
      content = <Dashboard />;
  }

  return (
    <Layout>
      <Head>
        <title>Portfolio Manager</title>
      </Head>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Typography.Title level={3} style={{ color: "white" }}>
          Portfolio Manager
        </Typography.Title>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          onClick={({ key }) => handleMenuClick(key)}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Account",
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "4",
              icon: <QuestionCircleOutlined />,
              label: "MISC",
            },
          ]}
        />
        <AuthShowcase />
      </Sider>
      <Layout style={{ height: "100vh" }}>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: colorBgContainer,
            }}
          >
            {content}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
