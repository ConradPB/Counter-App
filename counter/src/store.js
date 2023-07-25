import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';


const increment = () => {
  return {type: 'increment'} 
}

const decrement = () => { 
  return {type: 'decrement'}
}

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state; 
  }
} 

const store = configureStore(counterReducer);

const render = () => {
    ReactDOM.render(
      <CounterApp 
        state={store.getState()}
      />,
      document.getElementById('root')
    )
  }
  render();
  store.subscribe(render);

function CounterApp(props) {
  
  const state = props.state;

  const onIncrementButtonClicked = () => {
    store.dispatch(increment());
  }
 
  const onDecrementButtonClicked = () => {
    store.dispatch(decrement());
  }
  
  return (   
    <div>
      <h1> {state} </h1>
      <button onClick={onIncrementButtonClicked}>+</button> 
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  )
}