// Aplicación que va a tener un login. Por ahora sólo se graba el usuario
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  // Aquí cambio el valor de user.

  // 1. Obtener la referencia al UserContext
  const { setUser } = useContext(UserContext);

  // 2. El valor que se pasará a setUser
  const login = {
    id: 123,
    name: 'José Manuel',
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      {/* 3. Actualizando el user */}
      <button className="btn btn-primary" onClick={() => setUser(login)}>
        Login
      </button>
    </div>
  );
};
