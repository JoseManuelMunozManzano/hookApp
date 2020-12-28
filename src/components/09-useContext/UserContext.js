import { createContext } from 'react';

// El UserContext es un Higher Order Component (como el Switch o el Router del fuente
// AppRouter.js)
// Esto significa que se le pueden colocar componentes hijos dentro de el.
export const UserContext = createContext(null);
