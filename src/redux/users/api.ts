import db from '../firebase';
import {I_user, I_userData} from "../../types/user-types";
export const usersAPI = {
  getUsers: async (): Promise<never | I_user[]> => {
    let res:I_user[] = [];
    const snapshot = await  db.collection("users").get();
    snapshot.forEach((doc) => {
      let id = doc.id;
      let user = doc.data() as I_user;
      res.push({...user, id});
    });
    return res;
  },
  async addUser(user: I_user): Promise<never | undefined | I_user> {
    let toSend: I_userData = {
      name: user.name,
      phone: user.phone,
      surname: 'surname',
    };
    const res = await db.collection("users").add(toSend);
    if (res && res.id) {
      return {...toSend, id: res.id};
    }
  },
  async updateUser(user: I_user): Promise<never | I_user> {
    await db.collection("users").doc(user.id).set(user);
    return user;
  },
  async deleteUser(userId: string): Promise<never | boolean> {
    await db.collection("users").doc(userId).delete();
    return true;
  }
};