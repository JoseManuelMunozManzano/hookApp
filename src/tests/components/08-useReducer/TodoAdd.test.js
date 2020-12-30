import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('NO debe de llamar handleAddTodo', () => {
    // Se va a simular la petición del submit del formulario. Por defecto no
    // hay ningún value en la descripción.
    // Hay un if donde se valida que la descripción debe tener longitud mayor
    // a 1. Por tanto esa validación no la va a pasar y no llamará a
    // handleAddTodo

    // Esta forma de hacer el test (con prop) sirve para librerías de terceros
    const formSubmit = wrapper.find('form').prop('onSubmit');

    // Debe decir Function
    //console.log(formSubmit);

    // Pasando preventDefault() para que funcione
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe de llamar la función handleAddTodo', () => {
    // Cambiando el input para tener una descripción
    const value = 'Aprender React';

    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    // Esta era la primera forma que vimos de hacer el test (simulate)
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);

    // Se ha llamado con cualquier objeto
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));

    // Necesitamos pasar la prueba de que se haya llamado con un objeto concreto
    // El problema es que el id del argumento tiene como valor
    // new Date().getTime() y esto va a cambiar y es difícil
    // evaluarlo contra un objeto
    //
    // Hay que decirle a Jest que el id no me importa su valor, pero tiene
    // que ser un número
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    // Asegurarnos de que llamó al reset, no validando su llamada, sino
    // validando sus efectos, que es que la descripción quede a blancos
    // en el value del input.
    // RECORDAR: Nosotros vamos a estar evaluando los efectos de las cosas
    // que nosotros llamamos, no directamente de que se haya llamado el reset()
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
