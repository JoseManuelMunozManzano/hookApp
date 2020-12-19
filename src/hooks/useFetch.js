// Este custom Hook nos permite hacer peticiones a cualquier URL

import { useEffect, useState, useRef } from 'react';

export const useFetch = url => {
  // Solucionando el problema que muestra 1)
  // 2) La idea de isMounted es que mantenga la referencia cuando este hook está vivo o
  //  cuando el componente que lo usa siga montado.
  //  Cuando cambie los valores de isMounted yo no quiero lanzar una renderización del
  //  componente, simplemente estoy manteniendo la referencia del valor.
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // 3) Se añade un nuevo useEffect con dependencia vacía, para que se ejecute sólo al
  //  montarse el componente, la primera vez.
  //  Este useEffect no hace nada, pero cuando se desmonte cambiamos el valor del useRef
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        // 1) Solo a efectos de que tarde y muestre un error
        //    Ejemplo de error en ./04-useRef/RealExampleRef.js
        setTimeout(() => {
          // 4) Usamos el useRef para llamar de manera condicional el setState
          //  Ahora es una llamada segura. Si el componente está montado llama, sino no.
          //
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          } else {
            console.log('setState no se llamó');
          }
        }, 4000);
      });
  }, [url]);

  return state;
};

// Con el uso de useRef ya tenemos más pulido nuestro useFetch para que trabaje de una
// manera segura.
// Incluso para las pruebas supone una gran mejora, ya que ahora no es necesario esperar
// que el setState se llame para terminar la evaluación.
