import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';

import { DashboardContainer, DashboardGlobalStyles } from './Dashboard.styles';

const { Content, Footer } = Layout;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '70px 15px 0',
    flexShrink: '0',
    background: '#f1f3f6',
    position: 'relative',
  },
  footer: {
    background: '#ffffff',
    textAlign: 'center',
    borderTop: '1px solid #ededed',
  },
};

export default function Dashboard({children}) {
  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height: "100vh" }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar /> 
          <Layout
            className="isoContentMainLayout"
            // style={{
            //   height: appHeight,
            // }}
          >
            <Content id='site-content' className="isomorphicContent" style={styles.content}>
              {children}
            </Content>
            <Footer style={styles.footer}>{"siteConfig.footerText"}</Footer>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
 

