import React from 'react';

function Counter({ count, increment, decrement, reset }){
    return(
        <>
        <h1>Counter : {count}</h1>

        <button onClick={increment}>
          Increment
        </button>

        <button onClick={decrement}>
          Decrement
        </button>

         <button onClick={reset}>
          Reset
        </button>

        </>
       
    );
}
export default Counter;