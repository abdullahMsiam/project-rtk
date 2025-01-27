import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { ITask } from "@/type";
import { useSelector } from "react-redux";

export default function Task() {
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1>Task</h1>
        <AddTask />
      </div>
      {tasks.map((task: ITask) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
