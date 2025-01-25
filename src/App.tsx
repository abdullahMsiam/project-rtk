// import { Button } from "./components/ui/button";
// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

function App() {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter);
  // const handleIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
