////TYPE Checkers
import {I_user, I_userData} from "./user-types";

export function hasOwnProperty<X extends {}, Y extends PropertyKey>
(obj: X, prop: Y): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop)
}

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export function isUser(data: I_user | I_userData): data is I_user {
  return hasOwnProperty(data, 'id');
}
