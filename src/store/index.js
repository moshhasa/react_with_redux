import { createSlice } from '@reduxjs/toolkit'
import {createStore} from 'redux'


 const initialState = {
    counter : 0,
    showCounter : true
}

const reducer =  (state = initialState, { type, value }) => {
   
    switch (type) {
    case "increment":  
        return { ...state, counter : state.counter+ value }
    case "decrement":
            return { ...state, counter : state.counter-1}
    case "toggleCounterDisplay" :
        return {...state, showCounter : !state.showCounter}
    default:
        return state
    }
}

const store = createStore(reducer);

export default store;