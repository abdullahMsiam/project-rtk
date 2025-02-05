import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { IUser } from "@/type";

interface IProps {
  user: IUser;
}
export default function UserCard({ user }: IProps) {
  console.log(user);

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center space-x-4">
      <h1>{user.name}</h1>
      <Button className="px-2">
        <Trash2 />
      </Button>
    </div>
  );
}
