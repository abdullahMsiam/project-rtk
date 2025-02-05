import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITask } from "@/type";

export default function Task() {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
      dueDate: "2021-08-01",
      isCompleted: false,
      priority: "high",
      assignedUser: "1",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Task 2 description",
      dueDate: "2021-08-01",
      isCompleted: false,
      priority: "medium",
      assignedUser: "2",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Task 3 description",
      dueDate: "2021-08-01",
      isCompleted: false,
      priority: "low",
      assignedUser: "3",
    },
  ];
  console.log(tasks);
  return (
    <div>
      <div className="flex justify-end items-center mb-3 gap-3">
        <h1 className="mr-auto">Task</h1>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
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
