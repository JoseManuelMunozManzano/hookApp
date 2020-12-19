import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
  // El uso básico de useRef, que no es tan común, es mantener una referencia mutable.
  // El parámetro initial value que tiene el ref si no se informa vale
  // {current: undefined}
  // Lo interesante del useRef es que se puede cambiar a lo que apunta sin necesidad de
  // disparar una renderización en la parte de React. Es decir, tenemos una variable que
  // cambia.
  const inputRef = useRef();

  // Hay varias formas de establecer el foco en React.
  const handleClick = () => {
    // La forma tradicional es cuando se hace click en un botón (onClick de abajo)
    // hace un focus() o un select(), que además de poner el foco selecciona el texto.
    //document.querySelector('input').focus();
    //document.querySelector('input').select();

    // La forma React es usar el useRef
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      ></input>
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
