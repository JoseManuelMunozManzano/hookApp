// Fichero con las rutas de la aplicación
// Una app puede tener más de un router.
// El <div> dentro del <Router> se aconseja siempre crearlo. Sirve para contener toda
// la información que el router va a manejar, y puede haber más de uno. Se puede poner
// también un <Fragment> ó <>
// Para ver que ruta se usa, usamos el <Switch>
// La Ruta en si es el <Route> donde aparecerá el path (lo que aparece en el navegdor) y
// que componente renderiza. La mostrada en pantalla es una forma de hacerlo. En la
// documentación (https://reactrouter.com/web/guides/quick-start) aparece otra similar.
//
// Se sugiere colocar la ruta más general abajo, aunque no siempre va a ser el caso.
// Esto es porque si no se pone la propiedad exact, entonces el path no hace falta
// que sea el mismo, solo que contenga ese texto, y la ruta "/" contiene a todas las demás.
//
// Al poner exact={true} o exact solamente, estamos diciendo que el path tiene que ser
// exactamente ese.
//
// Los 3 componentes HomeScreen, LoginScreen y AboutScreen son como hermanos, están
// contenidos en el mismo nivel.
// Por tanto, si un componente generara información que necesito pasársela al HomeScreen,
// cómo lo hago? Con el context

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomeScreen} />

          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />

          {/* Si la ruta es erronea se puede: */}

          {/* 1. Hacer el default del switch */}
          {/* <Route component={HomeScreen} /> */}

          {/* 2. Hacer un redirect (recomendado porque la url del navegador queda bien) */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
