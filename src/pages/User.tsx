import AddUser from "@/components/module/AddUser";
import UserCard from "@/components/module/UserCard";

const User = () => {
  const users = [
    {
      id: "1",
      name: "John Doe",
    },
    {
      id: "2",
      name: "Jane Doe",
    },
    {
      id: "3",
      name: "John Smith",
    },
    {
      id: "4",
      name: "Jane Smith",
    },
  ];
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
