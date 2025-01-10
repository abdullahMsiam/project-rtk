import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div>
        <Button onClick={handleDecrement}>Decrement</Button>
        <p>{count}</p>
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
      </div>
    </>
  );
}

export default App;
