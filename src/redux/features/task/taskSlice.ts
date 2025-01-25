import { RootState } from "@/redux/store";
import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  tasks: ITask[];
}
const initialState: IInitialState = {
  tasks: [
    {
      id: "taksk-1",
      title: "task 1",
      description: "task 1 description",
      dueDate: "2023-01-01",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "taksk-2",
      title: "task 2",
      description: "task 1 description",
      dueDate: "2023-01-01",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "taksk-3",
      title: "task 2",
      description: "task 1 description",
      dueDate: "2023-01-01",
      isCompleted: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
