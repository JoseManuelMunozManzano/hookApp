export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    // Se llama cuando se inicializa
    default:
      return state;
  }
};
