// import { useState } from "react";

import { cn } from "@/lib/utils";
import { ITask } from "@/type";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" border-2 shadow-lg rounded-lg p-4 flex justify-between items-center space-x-4">
      <div className="flex-1">
        <div className={`text-lg font-bold flex items-center gap-2 `}>
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <p>{task.description}</p>
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <Checkbox
          checked={task.isCompleted}
          onClick={() => dispatch(toggleCompleteState(task.id))}
        />

        <Button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-white w-6 rounded"
        >
          <Trash2Icon />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
