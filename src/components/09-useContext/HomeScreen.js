// Donde tenemos la información del usuario
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
  // Si aquí necesito acceso al usuario
  // Esto le dice al useContext que busque la siguiente instancia en el arbol de
  // componentes que sea del tipo UserContext
  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
    </div>
  );
};
