import { RootState } from "@/redux/store";
import { IUser } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [
    {
      id: "lkjglakj0-slkjgl",
      name: "Abdullah Muhammad Siam",
    },
    {
      id: "lkjglak-slkjgl",
      name: "Muhammad Siam",
    },
  ],
};

type TUserDraft = Pick<IUser, "name">;

const createUser = (userData: TUserDraft): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
