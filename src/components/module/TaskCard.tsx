// import { useState } from "react";

import { cn } from "@/lib/utils";
import { ITask } from "@/type";
import { Button } from "../ui/button";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  //   const [checked, setChecked] = useState(false);

  //   const handleCheck = () => {
  //     setChecked(!checked);
  //     if (onCheck) {
  //       onCheck(!checked);
  //     }
  //   };
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
          {task.title}
        </div>
        <p>{task.description}</p>
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <input type="checkbox" className="w-6 h-6" />
        <Button className="text-white px-2 py-1 rounded">Delete</Button>
      </div>
    </div>
  );
};

export default TaskCard;
