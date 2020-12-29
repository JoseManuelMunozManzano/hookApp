import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  // La ventaja de hacerlo como un snapshot es que se toma la fotografía de como esta el
  // componente, por si acaso el día de mañana alguien actualiza/borra algo, será
  // atrapado por nuestro snapshot.
  // Sería: así esta el componente y quiero que se mantenga así
  test('debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar la información', () => {
    // Empezamos con el customHook useFetch
    // Le decimos a Jest que realmente no me interesa lo que suceda en este useFetch.
    // Sólo me interesa la información que va a retornar (el mock de arriba)
    useFetch.mockReturnValue({
      data: [
        {
          author: 'José Manuel',
          quote: 'Hola Mundo',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    //console.log(wrapper.html());

    // Otras formas de hacer búsquedas en el wrapper

    // La clase alert no debería existir
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-2').text().trim()).toBe('Hola Mundo');
    expect(wrapper.find('footer').text().trim()).toBe('José Manuel');
  });
});
