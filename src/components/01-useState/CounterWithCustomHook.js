import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
  // Un contador es muy común y lo ideal sería que se pudiera centralizar su lógica de una
  // manera más abstracta para que se fuera más flexible y se pudiera reutilizar.
  // Ese es el objetivo de un customHook
  // NOTA: Recordar que el orden en la desestructuración de un objeto no importa
  const { state, increment, decrement, reset } = useCounter(100);

  const value = 2;

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      {/* Si se hiciera así se mandaría el event del click */}
      {/* <button onClick={increment} className="btn">+1</button> */}
      <button onClick={() => increment(value)} className="btn">
        +{value}
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
      <button onClick={() => decrement(value)} className="btn">
        -{value}
      </button>
    </>
  );
};
