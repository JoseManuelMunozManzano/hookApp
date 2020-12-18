import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {
  // Vamos a crear un custom Hook que se encargue de manejar tanto la información del
  // formulario como la función handleInputChange
  // Se repite aquí que los custom Hooks tienen mucho poder para centralizar la lógica.
  // Ahora, si quisiera crear un nuevo formulario utilizaría mi useForm
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  // Ahora manejamos un efecto cuando cambia el email que está trabajando con el custom Hook
  useEffect(() => {
    console.log('email cambió');
  }, [email]);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
