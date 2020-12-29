// Aplicación como tal
import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

// Si enmarco el AppRouter en el componente UserContext, significa que lo que se defina
// en UserContext va a estar disponible a lo largo de todos sus hijos (<AppRouter /> en
// este caso)
// Importante el .Provider. Sirve para proveer información a lo largo de todos sus
// componentes hijos. Lo que se desea compartir se debe hacer a través de una propiedad
// llamada value.
// UserContext también va a estar pendiente de los cambios que sucedan en sus objetos, y
// va a notificar a sus hijos en caso de que el usuario cambie.

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};
