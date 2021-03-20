import * as React from "react";
import User from "./User";
import UserForm from "./UserForm";
import './userList.css';

interface UsersProps {
  userIds: string[]
}

// @react-firebase/database firebase

const UserList: React.FC<UsersProps> = ({userIds}) => {
  return (
    <div className="user-list-page">
      <div style={{padding: '20px'}}>
        <h2>Add new user.</h2>
        <UserForm />
      </div>
      <div className="user-list-wrapper">
        {userIds.map(id => <User userId={id}/>)}
      </div>
    </div>
  )
};

export default UserList;