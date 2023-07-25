import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';

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
    store.dispatch({ type: 'increment' });
  }
 
  const onDecrementButtonClicked = () => {
    store.dispatch({ type: 'decrement' });
  }
  
  return (   
    <div>
      <h1> {state} </h1>
      <button onClick={onIncrementButtonClicked}>+</button> 
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  )
}
