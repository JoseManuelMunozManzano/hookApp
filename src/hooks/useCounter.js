// customHook no es más que una simple función.
// El convenio establecido es que su nombre comienza por use
import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState); // 10

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialState);
  };

  // El customHook está extrayendo la lógica del contador
  return {
    state,
    increment,
    decrement,
    reset,
  };
};
