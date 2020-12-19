import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  // 1. Un proceso pesado que se ejecuta al inicio y cuando se pulsa el botón +1
  // También cuando se pulsa el botón Show/Hide, aunque no debiera en este caso
  // El fuente puede verse arriba en la importación.
  // procesoPesado(counter);

  // 4.Arreglando el problema con useMemo
  // useMemo recibe una función (callback) y luego viene un input que son las dependencias,
  // es decir, muy parecido a los efectos, que si algo cambia quiero memorizar el nuevo
  // resultado.
  // En este ejemplo, si el counter cambia necesito una nueva versión memorizada del
  // resultado de esa función
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      {/* 5. En vez de llamar a procesoPesado, se pasa el memoProcesoPesado */}
      {/* <p>{procesoPesado(counter)}</p> */}
      {/* Con este arreglo ya no se dispara procesoPesado si pulso el botón Show/Hide  */}
      <p>{memoProcesoPesado}</p>

      {/* 2. El proceso pesado se dispara si pulso este botón */}
      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      {/* 3. El proceso pesado se dispara cuando pulse este botón, aunque no debería porque
      este botón no tiene nada que ver con ese monto procesado 
      Sería útil decirle a React que memorice el resultado si los argumentos son
      iguales, pero si cambian, entonces sí hay que reprocesarlo
      Ese es el problema que vamos a solucionar con useMemo */}
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
