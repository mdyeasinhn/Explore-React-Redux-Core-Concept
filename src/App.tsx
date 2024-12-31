
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppSelector, useappDispatch } from './redux/hook';


function App() {

  const dispatch = useappDispatch();
  const {count} = useAppSelector((state) => state.counter)

  const handlerIncrement = () =>{
    dispatch(increment());
  }
  const handlerdecrement = () =>{
    dispatch(decrement());
  }
  return (
    <>

      <div >
      <h1>Counter with redux </h1>
      <button onClick={handlerIncrement}>Increment</button>
      <button>{count}</button>
      <button onClick={handlerdecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
