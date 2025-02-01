import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/type";
import { useSelector } from "react-redux";

export default function Task() {
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex justify-end items-center mb-3 gap-3">
        <h1 className="mr-auto">Task</h1>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTask />
      </div>
      {tasks.map((task: ITask) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
