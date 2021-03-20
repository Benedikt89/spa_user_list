import {AppStateType} from "../store";
import {I_user} from "../../types/user-types";

export const selectUserByKey = (state: AppStateType, key: string): I_user | null =>
  !!state.users.users[key] ? state.users.users[key] as I_user : null;

export const selectIsEditing = (state: AppStateType, id: string): boolean =>
  state.users.editingUserId === id;