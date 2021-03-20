import {I_user} from "../types/user-types";
import * as React from "react";
import {Button, Form, Input} from 'antd';
import './common/common.css';
import {newUserId} from "../redux/users/reducer";
import {useDispatch, useSelector} from "react-redux";
import {onUserUpdate} from "../redux/users/actions";
import {useState} from "react";
import {selectFetchingByKey} from "../redux/app/selectors";
import {AppStateType} from "../redux/store";

interface UserFormProps {
  user?: I_user
}

const UserForm: React.FC<UserFormProps> = ({user}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state: AppStateType) => ({
    loading: selectFetchingByKey(state, 'user')
  }));

  const onFinish = (values: any) => {
    dispatch(onUserUpdate({
      id: user ? user.id : newUserId,
      ...values
    }));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      className="row"
      name="user"
      initialValues={user ? user : {}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="name"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input placeholder="Username"/>
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{required: true, message: 'Please input your phone!'}]}
      >
        <Input placeholder="Phone"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default UserForm;