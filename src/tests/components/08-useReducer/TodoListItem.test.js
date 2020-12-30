import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos, demoTodosToggle } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {
  const mockFunction = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={mockFunction}
      handleToggle={mockFunction}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar la función handleDelete', () => {
    wrapper.find('button').simulate('click');

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de llamar la función handleToggle', () => {
    wrapper.find('p').simulate('click');

    expect(mockFunction).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de mostrar el texto correctamente', () => {
    const p = wrapper.find('p').text().trim();

    const pShouldBe = `1. ${demoTodos[0].desc}`;

    expect(p).toBe(pShouldBe);
  });

  test('debe de tener la clase complete si el TODO.done = true', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={demoTodosToggle[0]}
        index={0}
        handleDelete={mockFunction}
        handleToggle={mockFunction}
      />
    );

    const p = wrapper.find('p');

    expect(p.hasClass('complete')).toBe(true);
  });
});
