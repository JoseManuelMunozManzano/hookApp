import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

// El init ayuda a computar el estado inicial y que no se esté ejecutando cada vez que
// hay cambios.
const init = () => {
  // Leyendo localStorage
  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Aprender React',
  //     done: false,
  //   },
  // ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  // Se quiere grabar en localStorage cuando los todo cambian
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
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
