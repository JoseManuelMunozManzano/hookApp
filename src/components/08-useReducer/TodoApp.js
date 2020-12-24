// Primero vamos a hacer todo en un solo componente.
//
// useReducer es una alternativa al useState.
// Cuando se esta manejando estados simples o son pocas cosas las que van a cambiar,
// podemos usar el useState.
// Pero si es algo bastante grande o que tiene muchas acciones y tenemos que estar
// cambiándolas o intercambiándolas a otros componentes mediante el props, podría crearse
// un reducer y trabajar en base a eso.
// https://es.reactjs.org/docs/hooks-reference.html#usereducer
import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
  },
];

export const TodoApp = () => {
  // El init es usado para crear el estado inicial de manera diferida.
  // Esto permite extraer la lógica para calcular el estado inicial fuera del reductor.
  // El dispatch ayuda a disparar las acciones hacia el reducer.
  //const [state, dispatch] = useReducer(reducer, initialState, init);

  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

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

          <form>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender ..."
              autoComplete="off"
            />
            <div class="d-grid gap-2">
              <button className="btn btn-outline-primary mt-1">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
