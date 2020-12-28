// Donde tenemos la información del usuario
import React from 'react';

export const HomeScreen = () => {
  // El router lo implementaremos aquí para que la aplicación sepa que rutas tiene.
  // Un router sirve para, al crear una SPA, si se quiere navegar a HomeScreen o al
  // AboutScreen o a LoginScreen, no quiero que haga una petición al servidor y que este
  // me devuelva todas las páginas nuevamente, porque retornará código y estilos y cosas
  // que ya tiene el navegador web.
  // La idea es que unicamente cambie lo que es independiente de esa pantalla, dependiendo
  // del url del navegador web.

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
    </div>
  );
};
