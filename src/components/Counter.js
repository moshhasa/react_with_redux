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
