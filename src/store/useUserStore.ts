import { create } from 'zustand';

type User = {
  id: number;
  name: string;
  email: string;
};

type UserState = {
  users: User[];
  addUser: (name: string, email: string) => void;
  removeUser: (id: number) => void;
  userCount: number;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  userCount: 0,

  addUser: (name, email) =>
    set((state) => {
      const newUser = { id: Date.now(), name, email };
      const newUsers = [...state.users, newUser];
      return { users: newUsers, userCount: newUsers.length };
    }),

  removeUser: (id) =>
    set((state) => {
      const newUsers = state.users.filter((u) => u.id !== id);
      return { users: newUsers, userCount: newUsers.length };
    }),
}));