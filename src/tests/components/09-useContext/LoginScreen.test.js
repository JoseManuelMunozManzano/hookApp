import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueban en <LoginScreen />', () => {
  const setUser = jest.fn();

  // Si aquí no pasamos el setUser (una función) luego no
  // se puede usar en el onClick ni validarlo en toHaveBeenCalled
  // No está "enlazado" al mount
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de ejecutar el setUser con el argumento esperado', () => {
    // Importantes los () al final para ejecutar el onClick
    // Con el simulate no haría falta.
    //wrapper.find('button').simulate('click');
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'José Manuel',
    });
  });
});
