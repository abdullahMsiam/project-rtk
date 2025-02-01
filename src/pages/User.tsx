import AddUser from "@/components/module/AddUser";
import UserCard from "@/components/module/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector(selectUsers);
  console.log(users);
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1>User</h1>
        <AddUser />
      </div>
      <div className="grid grid-cols-1 gap-2">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default User;
