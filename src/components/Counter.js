import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterDisplay())
  };

  const incrementHadler = (value) => {
    dispatch(counterActions.increment(value));
  } 

  const decrementHadler = () => dispatch(counterActions.decrement());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&<div className={classes.value}>{counter}</div>}
      <div>
        <button type="button" onClick={incrementHadler.bind(null, 1)}>Incremtent</button>
        <button type="button" onClick={incrementHadler.bind(null, 5)}>Incresee by 5</button>
        <button type="button" onClick={decrementHadler}>Decremtent</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// class Counter extends Component{

//  incrementHadler = () =>  this.props.increment()
  

// decrementHadler() {
//     this.props.decrement()
// }

//   toggleCounterHandler() {}


//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button type="button" onClick={this.incrementHadler}>Incremtent</button>
//           <button type="button" onClick={this.decrementHadler.bind(this)}>Decremtent</button>
//           </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement : () => dispatch({type: 'decrement'})
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Counter);
