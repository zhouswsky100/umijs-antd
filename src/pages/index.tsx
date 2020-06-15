import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'umi';

const index = (props: { children: React.ReactNode }) => {
  const { location } = useHistory();
  return <Layout>{props.children}</Layout>;
};

export default index;
