export interface I_userData {
  name: string
  phone: string
  surname: string
}

export interface I_user extends I_userData {
  id: string
}

export type I_usersState = {
  users: {
    [key: string]: I_user
  }
  usersIds: string[]
  editingUserId: string | null
}