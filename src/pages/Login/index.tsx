import React, { Fragment } from 'react';
import { Input, Button, Form, Row } from 'antd';
import { userLogin } from '@/services/baseApi';
import { Response } from '@/utils/type';
import styles from './index.scss';
const FormItem = Form.Item;

const index = () => {
  const login = (params: object) => {
    userLogin(params).then((res: Response) => {});
  };
  return (
    <Fragment>
      <div className={styles.form}>
        <div className={styles.logo}>
          <span>登录</span>
        </div>
        <Form onFinish={login}>
          <FormItem name="username " rules={[{ required: true }]} hasFeedback>
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem name="password " rules={[{ required: true }]} hasFeedback>
            <Input type="password" placeholder="请输入密码" />
          </FormItem>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
};

export default index;
