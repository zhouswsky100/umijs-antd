import React from 'react';
import { Layout } from 'antd';
import { Link, useHistory } from 'umi';

const index = (props: { children: React.ReactNode }) => {
  const { location } = useHistory();
  return <Layout className="site-layout">{props.children}</Layout>;
};

export default index;
