import {usersActionTypes} from "./actions";
import {I_usersState} from "../../types/user-types";
import {AppActionsType} from "../store";

export const newUserId = '_NEW_USER';
export const newUser = {
  id: newUserId,
  name: '',
  surname: '',
  phone: ''
};
const initialState:I_usersState = {
  users: {
    [newUserId]: newUser
  },
  usersIds: [],
  editingUserId: null
};

const usersReducer = (state: I_usersState = initialState, action: AppActionsType): I_usersState => {
  switch (action.type) {
    //adding fetched data
    case usersActionTypes.SET_FETCHED_USERS: {
      let newState = {...state};
      const idsArr: string[] = [];
      action.data.forEach(d => {
        newState.users[d.id] = d;
        idsArr.push(d.id);
      });
      newState.usersIds = idsArr;
      return newState;
    }
    case usersActionTypes.UPDATE_USER_SUCCESS: {
      let newState = {...state};
      if (state.users[action.data.id]) {
        newState.users[action.data.id] = {
          ...newState.users[action.data.id],
          ...action.data
        }
      } else {
        newState.usersIds = [...newState.usersIds, action.data.id];
        newState.users[action.data.id] = action.data
      }
      if (state.editingUserId) {
        newState.editingUserId = null;
      }
      return newState;
    }
    case usersActionTypes.DELETE_USER_SUCCESS: {
      let newState = {...state};
      delete newState.users[action.userId];
      newState.usersIds = newState.usersIds.filter(id => id !== action.userId);
      return newState;
    }
    case usersActionTypes.SET_EDITING_USER: {
      return {
        ...state,
        editingUserId: action.data
      }
    }
    default:
      return state;
  }
};

export default usersReducer;