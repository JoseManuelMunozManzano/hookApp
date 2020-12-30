import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
  let wrapper = shallow(<RealExampleRef />);

  beforeEach(() => {
    wrapper = shallow(<RealExampleRef />);
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    // Evaluamos si existe el componente MultipleCustomHooks
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('desde de mostrar el componente <MultipleCustomHooks />', () => {
    const button = wrapper.find('button');
    button.simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
