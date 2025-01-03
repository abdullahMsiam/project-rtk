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
        <button onClick={handleDecrement}>Decrement</button>
        <p>{count}</p>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      </div>
    </>
  );
}

export default App;
