import React, { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = todoId => {
    // Crear la action
    const action = {
      type: 'delete',
      payload: todoId,
    };

    // Dispatch
    dispatch(action);
  };

  const handleToggle = todoId => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validación
    if (description.trim().length <= 1) {
      return;
    }

    // Creamos un nuevo Todo
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // Creamos una acción con un tipo y un payload que será el nuevo Todo
    const action = {
      type: 'add',
      payload: newTodo,
    };

    // Mandar la acción al reducer usando dispatch
    dispatch(action);

    // Inicializar input
    reset();
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender ..."
              autoComplete="off"
              onChange={handleInputChange}
              value={description}
            />
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
