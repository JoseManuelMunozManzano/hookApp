import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener cantidad de <TodoListItem /> correctos', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

    //console.log(wrapper.find('TodoListItem').at(0).props());
    //console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'));

    // No se puede usar el toBe porque son objetos, y aunque sean iguales apuntan
    // a dos espacios de memoria diferentes
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
