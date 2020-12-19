// useLayoutEffect no se usa muy a menudo
// https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect
// El objetivo del useLayoutEffect es que después de que se renderiza algo, se puede
// sacar mediciones de como quedaron divs o diferentes componentes, o sea los tamaños,
// o en sí, ejecutar código después de que se renderiza todo el HTML
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../05-useLayoutEffect/layoutEffect.css';

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  // 2) Necesito mantener la referencia al párrafo
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  // 3) Se puede utilizar como dependencia cuando el quote cambie.
  //  Cuando quote cambia significa que cambia el tamaño de la caja que contiene el quote
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      {/* 1) Queremos sacar por pantalla la medición de la caja de texto */}
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente quote
      </button>
    </div>
  );
};
