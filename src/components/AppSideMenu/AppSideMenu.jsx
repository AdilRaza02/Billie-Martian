import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  AreaChartOutlined,
  UserOutlined,
  CodeOutlined,
} from "@ant-design/icons";

import styles from "../AppSideMenu/AppSideMenu.module.css";

function AppSideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
    >
      <div
        className={
          collapsed
            ? `${styles.logo} ${styles["logo-small"]}`
            : `${styles.logo}`
        }
      >
        Billie-Martian
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/" icon={<AreaChartOutlined />}>
          <span>Research</span>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="/customers" icon={<UserOutlined />}>
          <span>Customers</span>
          <Link to="/customers" />
        </Menu.Item>
        <Menu.Item key="/codebase" icon={<CodeOutlined />}>
          <a href="https://github.com/AdilRaza02/Billie-Martian-Home-Test">
            Codebase
          </a>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default AppSideMenu;
