import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {UserOutlined, DeleteOutlined, CloseCircleOutlined} from '@ant-design/icons';
import {selectIsEditing, selectUserByKey} from "../redux/users/selectors";
import UserForm from "./UserForm";
import './userList.css';
import {useCallback} from "react";
import {onUserDelete, setEditingUser} from "../redux/users/actions";

interface UserProps {
  userId: string
}

const User: React.FC<UserProps> = ({userId}) => {
  const {user, isEditing} = useSelector((state:AppStateType) =>
    ({
      user: selectUserByKey(state, userId),
      isEditing: selectIsEditing(state, userId)
    }));
  const dispatch = useDispatch();

  const setEditing = useCallback(() => {
    dispatch(setEditingUser(isEditing ? null : userId))
  }, [isEditing]);

  const deleteItem = useCallback(() => {
      dispatch(onUserDelete(userId))
    }, [isEditing]);

  return !user ? null : isEditing ? (
    <div className="user-item-wrapper">
      <UserForm user={user} />
      <CloseCircleOutlined onClick={setEditing} className="fixed-delete-button" />
    </div>
  ) : (
    <div className="user-item-wrapper">
      <UserOutlined className="user-info-icon"/>
      <div className="row user-info" onDoubleClick={setEditing}>
        <span>
          <small style={{margin: '0 1rem'}}>Name:</small>
          {user.name}
        </span>
        <span>
        <small style={{margin: '0 1rem'}}>Phone:</small>
        {user.phone}
      </span>
      </div>

      <DeleteOutlined style={{color: "#ff0000"}} onClick={deleteItem} className="fixed-delete-button"/>
    </div>
  )
};

export default User;