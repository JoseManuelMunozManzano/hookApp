// No hay HTML por lo que no se evalúa ningún snapshot
import { renderHook, act } from '@testing-library/react-hooks';
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

  test('debe de tener el counter a 100', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      // Este segundo increment si funcionará porque en useCounter.js
      // si se actualiza el counter haciendo uso del callback
      // https://github.com/testing-library/react-hooks-testing-library/issues/216#issuecomment-551452320
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(102);
  });

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      // Este segundo decrement no funcionará porque en useCounter.js
      // no se actualiza el counter haciendo uso del callback
      //decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test('debe de establecer el contador en 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
