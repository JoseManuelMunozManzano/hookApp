// No hay HTML por lo que no se evalúa ningún snapshot

import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

// Se va a probar la lógica y el retorno de valores
describe('Pruebas en useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
});
