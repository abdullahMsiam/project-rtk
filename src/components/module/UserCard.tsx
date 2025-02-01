import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { IUser } from "@/type";
import { useAppDispatch } from "@/redux/hook";
import { removeUser } from "@/redux/features/user/userSlice";

interface IProps {
  user: IUser;
}
export default function UserCard({ user }: IProps) {
  console.log(user);

  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center space-x-4">
      <h1>{user.name}</h1>
      <Button onClick={() => dispatch(removeUser(user.id))} className="px-2">
        <Trash2 />
      </Button>
    </div>
  );
}
