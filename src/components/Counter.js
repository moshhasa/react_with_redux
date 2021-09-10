import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHadler = () => dispatch({type: 'increment'});
  const decrementHadler = () => dispatch({type: 'decrement'});
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button type="button" onClick={incrementHadler}>Incremtent</button>
        <button type="button" onClick={decrementHadler}>Decremtent</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
