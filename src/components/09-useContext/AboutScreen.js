// Para revisar información que otras páginas van a trabajar.
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// Una vez se pulse el botón de Logout se actualiza el user a {}
// Y automáticamente se actualiza la página.
// Esto es gracias al useContext, ya que este sufrió una modificación y entonces notifica
// a todos sus hijos con el erspectivo cambio y eso va a forzar el renderizado de cada una
// de las partes afectadas.
export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-warning" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
