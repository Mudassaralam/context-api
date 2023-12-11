import React, { useContext } from 'react';
import { AppContext } from '../context';

function Home() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className='text-center flex gap-4 justify-center flex-col items-center'>
      <h2>Couter: {state.counterState?.count}</h2>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className='bg-blue-300  p-2'
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className='bg-blue-300  p-2'
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'LOGIN_SUCCESS' })}
        className='bg-blue-300  p-2'
      >
        Login
      </button>
    </div>
  );
}

export default Home;
