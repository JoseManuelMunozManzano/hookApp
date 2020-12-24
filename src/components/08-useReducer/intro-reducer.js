// Idea general de un reducer

// Estado inicial
const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

// Definimos el reducer: es una simple función
// Las acciones del reducer son las que van a modificar el state.
// Por defecto siempre se va a regresar un state.
// Recordar que dentro no se pueden hacer peticiones asíncronas, no puede disparar efectos
// secundarios y tiene que resolverse con los argumentos que tiene.
const todoReducer = (state = initialState, action) => {
  // Procesando acciones
  // Esta es la única manera de modificar el state
  // La interrogación es porque puede que no haya accion --> undefined y sin la
  // interrogacion daría error porque no existe la propiedad.
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state;
};

// Regresa el nuevo listado de todos
let todos = todoReducer();

// Agregando un todo
// Recordar que no se puede modificar el state, por lo tanto no se puede hacer esto:
// todos.push()
// Este newTodo hay que mandarlo de alguna manera al reducer, mediante la acción.
// Porque es dentro del reducer donde se modifica el state
const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

// Nos creamos una acción, que no es más que un objeto.
// Es un estándar que tenga una propiedad llamada type, que dirá al reducer que tipo de
// acción es, si es para agregar, borrar...
// Otro estándar es usar la propiedad payload para los argumentos que le pasamos a la acción
const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo,
};

// Llamamos al reducer con el (nuevo) estado inicial de todos y la acción
todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
