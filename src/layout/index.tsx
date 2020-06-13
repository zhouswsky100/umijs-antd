import React from 'react';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
import styles from './index.scss';
import { Link, useHistory } from 'umi';
export const index = (props: { children: React.ReactNode }) => {
  const { location } = useHistory();
  return (
    <Layout className="{styles.layout}">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div>罗湖卫生局</div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/about">
            <Link to="./about">关于</Link>
          </Menu.Item>
          <Menu.Item key="/table">
            <Link to="./table">表格</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          卫生管理系统
        </Header>
        <Content
          className="site-layout-background"
          style={{ padding: 24, minHeight: 'max-content', margin: '24px 16px' }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>罗湖卫生局plus</Footer>
      </Layout>
    </Layout>
  );
};

export default index;
