import React, { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('componente montado');

    // Qué es lo que retorna un useEffect?
    // Retorna una función que se va a disparar cuando el componente se desmonta o, dicho de
    // otro modo, deja de existir. Es una función que se ejecuta para hacer una limpieza.
    return () => {
      console.log('componente desmontado');
    };
  }, []);

  return (
    <div>
      <h3>Eres genial</h3>
    </div>
  );
};
