import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {
  // Mala práctica
  // React trabaja en base a la posición para saber cual es el primer efecto, el segundo...
  // No trabaja en base a un nombre de una función.
  // Por tanto, tener un hook de forma condicional es una mala práctica y React nos da error
  // if (true) {
  //   const [state, setstate] = useState(0);
  // }
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('formState cambió');
  }, [formState]);

  useEffect(() => {
    // console.log('email cambió');
  }, [email]);

  // desestructurando el evento para obtener el target
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};
