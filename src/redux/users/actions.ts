import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "../store";
import {I_user} from "../../types/user-types";
import {usersAPI} from "./api";
import {fetchHandler} from "./fetchHandler";
import {newUserId} from "./reducer";

export const usersActionTypes: {
  SET_FETCHED_USERS: 'users/SET_FETCHED_USERS'
  SET_EDITING_USER: 'users/SET_EDITING_USER'
  UPDATE_USER_SUCCESS: 'users/UPDATE_USER_SUCCESS'
  DELETE_USER_SUCCESS: 'users/DELETE_USER_SUCCESS'
} = {
  SET_FETCHED_USERS: 'users/SET_FETCHED_USERS',
  SET_EDITING_USER: 'users/SET_EDITING_USER',
  UPDATE_USER_SUCCESS: 'users/UPDATE_USER_SUCCESS',
  DELETE_USER_SUCCESS: 'users/DELETE_USER_SUCCESS'
};

export type I_usersActions = I_setFetchedUsers | I_setEditingUser | I_updateUserSuccess |
  I_deleteUserSuccess

//interfaces
interface I_setFetchedUsers {
  type: typeof usersActionTypes.SET_FETCHED_USERS,
  data: Array<I_user>
}
interface I_setEditingUser {
  type: typeof usersActionTypes.SET_EDITING_USER,
  data: string | null
}
interface I_updateUserSuccess {
  type: typeof usersActionTypes.UPDATE_USER_SUCCESS,
  data: I_user
}

interface I_deleteUserSuccess {
  type: typeof usersActionTypes.DELETE_USER_SUCCESS,
  userId: string
}

//Internal ACTIONS CREATORS
export const setEditingUser = (data: string | null): I_setEditingUser =>
  ({type: usersActionTypes.SET_EDITING_USER, data});

export const _updateUserSuccess = (data: I_user): I_updateUserSuccess =>
  ({type: usersActionTypes.UPDATE_USER_SUCCESS, data});

export const _deleteUserSuccess = (userId: string): I_deleteUserSuccess =>
  ({type: usersActionTypes.DELETE_USER_SUCCESS, userId});

export const _setFetchedUsers = (data: I_user[]): I_setFetchedUsers =>
  ({type: usersActionTypes.SET_FETCHED_USERS, data});


//API ACTIONS
export const fetchUsers = () =>
  fetchHandler(
    'fetchUsers',
    async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
      const res = await usersAPI.getUsers();
      if (res) {
        dispatch(_setFetchedUsers(res));
        return true;
      }
  });


export const onUserUpdate = (user: I_user) =>
  fetchHandler(
    'user',
    async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
      let res;
      if (user.id === newUserId) {
        res = await usersAPI.addUser(user);
      } else {
        res = await usersAPI.updateUser(user);
      }
      if (res) {
        dispatch(_updateUserSuccess(res));
        return true;
      }
    });

export const onUserDelete = (userId: string) =>
  fetchHandler(
    'user',
    async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
      const res = await usersAPI.deleteUser(userId);
      if (res) {
        dispatch(_deleteUserSuccess(userId));
        return true;
      }
    });