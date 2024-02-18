import React, { useReducer } from 'react';
import { MyComponentState, myReducer } from './MyReducer';

const MyComponent: React.FC = () => {
  // Initial state
  const initialState: MyComponentState = { count: 0 };

  // Use useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(myReducer, initialState);

  // Function to dispatch actions
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
