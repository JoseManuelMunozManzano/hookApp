import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />);

  // mock de local storage
  Storage.prototype.setItem = jest.fn(() => {});

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de agregar un TODO', () => {
    // El mount se usa cuando se quiere probar toda la aplicación en contexto,
    // ya todo en general
    // Funciona parecido al shallow. La diferencia está en el nivel en el cual
    // es renderizada la aplicación. El shallow es más básico, sólo el componente.
    // En el mount se necesita más información, de sus hijos... y el contexto en el
    // cual está corriendo.
    const wrapper = mount(<TodoApp />);

    // El act nos asegura que las manipulaciones al DOM sean aplicadas.
    // Al hacer el mount() nos hace falta probar el comportamiento que el
    // usuario vería en el navegador
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( 2 )`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('debe de eliminar un TODO', () => {
    // Añado 1 y luego lo elimino
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( 0 )`);
  });
});
