import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState = 0;
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
      <span id="counter">{state}</span>
      <button id="increment-btn" onClick={()=> dispatch({type:"INCREMENT"})}>increment</button>
      <button id="decrement-btn" onClick={()=> dispatch({type:"DICREMENT"})}>decrement</button>

    </div>
  )
}


export default App;
