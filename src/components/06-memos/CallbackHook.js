import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

// El useCallback Hook tiene dos casos de uso principales.
// 1. Cuando mandamos una función a un componente hijo (ShowIncrement)
// 2. Cuando hay un useEffect y el efecto tiene una dependencia y esa dependencia es la
//    función.
export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // Al renderizarse el componente CallbackHook se vuelve a generar esta función.
  // Esta función es realmente una constante que está almacenada en memoria.
  // Por tanto, cuando se vuelve a ejecutar se vuelve a crear un nuevo espacio de memoria.
  // Y por tanto rodear ShowIncrement con React.memo no sirve de nada porque literalmente
  // es una nueva función y siempre se vuelve a disparar.
  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // Esto se soluciona con el useCallback
  // En el useCallback se ejecutará lo que quiero, en este caso mi lógica de incrementar.
  // Así como está el useCallback va a regresar una versión memorizada de esa función que
  // me va a servir para mandarla como argumento en otros lugares y React va a saber que la
  // función no ha cambiado si la dependencia no ha cambiado.
  //
  // Tal y como está da un warning indicando que counter es una dependencia que hace falta.
  // Pero si la pongo, cuando pulse el botón counter cambiará y se ejecutará la función
  // siempre, cosa que no quiero.
  // const increment = useCallback(() => {
  //   setCounter(counter + 1);
  // }, [setCounter]);
  //
  // Por tanto, el setCounter se hará así para evitar ese problema.
  const increment = useCallback(
    num => {
      setCounter(c => c + num);
    },
    [setCounter]
  );

  // Si esto no se hiciera con el useCallback este efecto se dispararía cada vez que se
  // renderice o se vuelva a construir esa función.
  useEffect(() => {
    //????
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      {/* Al pulsar el botón aparecerá el texto Me volví a generar :( */}
      <ShowIncrement increment={increment} />
    </div>
  );
};
