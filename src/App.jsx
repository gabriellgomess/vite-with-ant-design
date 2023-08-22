import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, ConfigProvider, Typography } from 'antd';
const { Header, Sider, Content } = Layout;

import Home from './Pages/Home';

const theme = {
  token: {
    colorPrimary: "#e9434b",
    colorSuccess: "#38a900",
    colorWarning: "#ffdd00",
    colorError: "#f67c7e",
    colorInfo: "#e9434b",
    colorTextBase: "#313131",
    colorBgMenus: "#74c3bb",
    borderRadius: '8px'
  },
};

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const { Title } = Typography;


  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {/* <div className="demo-logo-vertical" /> */}
          <Menu
            style={{ backgroundColor: theme.token.colorBgMenus, height: '100vh', color: theme.token.colorTextBase }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              backgroundColor: theme.token.colorBgMenus             
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              height: 'calc(100vh - 112px)',

            }}
          >
            <Home />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
