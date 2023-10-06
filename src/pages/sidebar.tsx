// AntDesignSidebar.tsx
import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider width={200} theme="dark" style={{ height: "100vh" }}>
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
