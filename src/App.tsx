
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppSelector, useappDispatch } from './redux/hook';


function App() {

  const dispatch = useappDispatch();
  const {count} = useAppSelector((state) => state.counter)

  const handlerIncrement = (amount : number) =>{
    dispatch(increment(amount));
  }
  const handlerdecrement = () =>{
    dispatch(decrement());
  }
  return (
    <>

      <div >
      <h1>Counter with redux </h1>
      <button onClick={()=>handlerIncrement(1)}>Increment by 1</button>
      <button onClick={()=>handlerIncrement(5)}>Increment by 5</button>
      <button>{count}</button>
      <button onClick={handlerdecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
