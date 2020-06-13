import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Button, Table, Tag, Space } from 'antd';
import axios, { AxiosResponse } from 'axios';
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

  interface Data {
    id: string;
    name: string;
    age: number;
    address: string;
  }
  const [userData, setDatas] = useState<Data[]>([] as Data[]);

  useEffect(() => {
    //没有回调会一直执行
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get('/api/tableList').then((res: AxiosResponse<Data[]>) => {
      setDatas(res.data);
    });
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={userData}
        rowKey={(userData: { id: string }) => userData.id}
      ></Table>
    </div>
  );
};
