// Aplicación como tal
import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

// Si enmarco el AppRouter en el componente UserContext, significa que lo que se defina
// en UserContext va a estar disponible a lo largo de todos sus hijos (<AppRouter /> en
// este caso)
// Importante el .Provider. Sirve para proveer información a lo largo de todos sus
// componentes hijos. Lo que se desea compartir se debe hacer a través de una propiedad
// llamada value

export const MainApp = () => {
  const user = {
    id: 1234,
    name: 'José Manuel',
    email: 'xxxxxx@hotmail.es',
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};
