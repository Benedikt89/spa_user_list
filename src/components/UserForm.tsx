import {I_user} from "../types/user-types";
import * as React from "react";
import {Button, Form, Input, Select} from 'antd';
import './common/common.css';
import {newUserId} from "../redux/users/reducer";
import {useDispatch, useSelector} from "react-redux";
import {onUserUpdate} from "../redux/users/actions";
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

  const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const defaultPrefix = "86";

  const onFinish = (values: any) => {
    dispatch(onUserUpdate({
      ...values,
      id: user ? user.id : newUserId,
      phone: `+${values.prefix ? values.prefix : defaultPrefix}-${values.phone}`,
    }));
    console.log('Success:', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={defaultPrefix}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  let getSplittedPhone = (string: string) => {
    let [prefix, ...rest] = string.split("-");
    let validPrefix = prefix.length === 3;
    if (!validPrefix) {
      rest.unshift(prefix)
    }
    return {prefix: validPrefix ? prefix : defaultPrefix, phone: rest.join('')};
  };

  let defaults = user ? {
    ...user,
    ...getSplittedPhone(user.phone)
  } : {};
  return (
    <Form
      className="row"
      name="user"
      initialValues={defaults}
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
        rules={[
          {required: true, message: 'Please input your phone!'},
          {pattern: phoneRegExp,
            message: 'Please enter a valid Phone *** *** ****',}
          ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Phone" />
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