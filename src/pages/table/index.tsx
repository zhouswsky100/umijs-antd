import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Button, Table, Tag, Space } from 'antd';
import axios from 'axios';
export default () => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'name',
      key: 'id',
      render: (record: { id: string }) => <a href="www.baidu.com">编辑 </a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a href="www.baidu.com">百度 </a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const [userData, setDatas] = useState([]);

  useEffect(() => {
    getUserData();
  });

  const getUserData = () => {
    axios.get('/api/tableList').then(
      (res: any) => {
        console.log(res);
        setDatas(res.data);
      },
      err => {},
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={userData}></Table>
      fdsfdf
    </div>
  );
};
