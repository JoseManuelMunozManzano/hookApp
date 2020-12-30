import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
  const user = {
    name: 'José Manuel',
    email: 'xxxx@gmail.com',
  };
  // Cómo se establece un contexto?
  // Se añade tal y como se hace en MainApp.js
  // Es doble llave en value porque es igual que en MainApp.js, estamos
  // devolviendo un objeto
  //
  // NOTA: el shallow sólo va a renderizar el primer componente, en este caso
  // UserContext, que lo único que hace es que internamente está renderizando
  // el HomeScreen. Por eso el snapshot generado tiene como resultado:
  // exports[`Pruebas en <HomeScreen /> debe de mostrarse correctamente 1`] = `<HomeScreen />`;
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
