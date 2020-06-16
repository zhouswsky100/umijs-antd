import React, { useState, useEffect } from 'react';
import { Table, Input, Button, message } from 'antd';
import { getList, deleteCourse } from '@/services/courseApi';
import { Data, Response } from '@/utils/type';
import { history, Link } from 'umi';

const { Search } = Input;

const index = () => {
  const [datas, setDatas] = useState<Data[]>([] as Data[]);
  const [keywords, setKeywords] = useState('');

  const handleRemove = (id: string) => {
    deleteCourse({ id }).then((res: Response) => {
      if (res && res.success) {
        message.success(res.msg);
        getDatas({ keywords });
        return;
      }
      message.warning(res ? res.msg : '删除异常');
    });
  };

  let columns = [
    {
      title: '用户id',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '用户名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '用户年龄',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: '用户角色',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '用户地址',
      dataIndex: 'address',
      key: 'address',
      render: (text: string) => (
        <>
          <a target="blank" href={text}>
            查看详情
          </a>
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (record: { id: string }) => (
        <>
          <Link to={`/user/edit/${record.id}`}>编辑</Link> &nbsp;
          <a onClick={() => handleRemove(record.id)}>删除</a>
        </>
      ),
    },
  ];

  useEffect(() => {
    getDatas({ keywords });
  }, [keywords]);

  const getDatas = (params: object) => {
    getList(params).then((res: Response) => {
      // console.log(res.datas);
      setDatas(res.datas as Data[]);
    });
  };

  const handleSearch = (keywords: string) => {
    // console.log(keywords);
    setKeywords(keywords);
    // 搜索
    // getDatas({ keywords });
  };

  const handleAdd = () => {
    history.push('/user/add');
  };

  return (
    <div>
      <Button type="primary" onClick={handleAdd}>
        添加用户
      </Button>
      <Search
        placeholder="请输入用户名"
        onSearch={handleSearch}
        style={{ width: 200 }}
      />
      <Table
        columns={columns}
        dataSource={datas}
        rowKey={(datas: { id: string }) => datas.id}
      />
    </div>
  );
};

export default index;
