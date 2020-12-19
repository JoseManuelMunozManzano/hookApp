import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Memorize = () => {
  // Para entender el memorize es necesario que algo dispare la renderización de este
  // componente. Se va a usar el custom Hook useCounter y se crea un componente llamado
  // Small que se va a llamar
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  // Vamos a crear un caso donde no debe llamarse al nuevo componente Small

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      {/* Notar que cuando se pulsa el botón se vuelve a disparar la 
        renderización de componentes y vuelve a aparecer el texto en consola
        Me volví a llamar :() */}
      {/* Esto es porque nota que hay un cambio en el state y vuelve a dibujar
        el componente */}
      {/* ¿Cómo podemos prevenir que este componente se vuelva a renderizar si
        sus properties son las mismas? */}
      {/* Aquí es donde entra el método Memo. Ver Small.js */}
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
