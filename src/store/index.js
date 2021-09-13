import { configureStore, createSlice } from '@reduxjs/toolkit'

 const initialState = {
    counter : 0,
    showCounter : true
}


const counterSlice = createSlice({
    name : 'counter',
    initialState : initialState,
    reducers : {
        increment(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounterDisplay(state) {
            state.showCounter = !state.showCounter;
        }
    }
})



// const reducer =  (state = initialState, { type, value }) => {
   
//     switch (type) {
//     case "increment":  
//         return { ...state, counter : state.counter+ value }
//     case "decrement":
//             return { ...state, counter : state.counter-1}
//     case "toggleCounterDisplay" :
//         return {...state, showCounter : !state.showCounter}
//     default:
//         return state
//     }
// }

//const store = createStore(reducer);


const store = configureStore({
    reducer :  counterSlice.reducer
    
});

export const counterActions = counterSlice.actions;
export default store;