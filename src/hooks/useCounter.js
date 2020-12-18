// customHook no es más que una simple función.
// El convenio establecido es que su nombre comienza por use
import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); // 10

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initialState);
  };

  // El customHook está extrayendo la lógica del contador
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
