import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

// Se necesita renderizar un componente de manera condicional.
export const RealExampleRef = () => {
  // En la carpeta /03-examples/MultipleCustomHooks ya tenemos un ejemplo creado.
  // Ahí se ejecutaba un custom Hook llamada useFetch y dentro de useFetch se ejecuta un
  // useEffect.
  // El problema que tenía ese useEffect es que cuando nosotros estamos cargando la
  // información, puede que la persona diga que ya no quiere hacer nada en la página y se
  // salga o que la petición (el fetch) tarde mucho y la persona cierre el componente, pero
  // luego se llama al setState (dentro del fetch) y eso va a disparar un error.

  // Aquí se va a generar intencionadamente ese error.
  // Para ello en useFetch se va a hacer que la información tarde en generarse 4 segundos.
  // Si se pulsa el botón Show/Hide, vemos que empieza a generarse el dato (Loading...) y
  // volvemos a pulsar el botón Show/Hide y esperamos a que terminen los 4 segundos, veremos
  // un error en consola que dice
  // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  // Como se ha dicho, el error aparece porque se desmonta el componente y después se está
  // haciendo el setState.

  // Este error es lo que soluciona useRef.
  // Para ver la solución, ir al custom Hook en la ruta hooks/useFetch.js

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
