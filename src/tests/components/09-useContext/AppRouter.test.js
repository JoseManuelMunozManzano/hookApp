import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {
  const user = {
    id: 1,
    name: 'José Manuel',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

// No se va a probar si el <Router> funciona, es decir, no vamos a evaluar
// si el url cambia, entonces sea otro componente el que se renderiza,
// porque entonces estaríamos haciendo pruebas sobre el <Switch> y sobre
// el mismo <Router> y la gente de react-router ya hizo sus pruebas con eso.

// La prueba que todavía no estamos preparados para hacer es:
// Tener una ruta que necesite argumentos: /about/:variable
// Para eso se usará <MemoryRouter>
// Ver: https://reactrouter.com/web/guides/testing
// En estos ejemplos no se da el caso de recibir argumentos en las rutas.
