import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'José Manuel',
    email: 'xxxx@hotmail.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;

    // toEqual porque es un objeto
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Adriana',
        },
      });
    });

    const [values] = result.current;
    //expect(values).toEqual({ name: 'Adriana', email: 'xxxx@hotmail.com' });
    expect(values).toEqual({ ...initialForm, name: 'Adriana' });
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const handleInputChange = result.current[1];
    const reset = result.current[2];

    act(() => {
      const target = {
        name: 'name',
        value: 'Adriana',
      };
      handleInputChange({ target });
      reset();
    });

    const values = result.current[0];
    expect(values).toEqual(initialForm);
  });
});
