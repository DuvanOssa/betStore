import { h } from 'preact';
import { render } from '@testing-library/preact';

import Home from '../../src/routes/home/index';
import { mount } from 'enzyme';

global.fetch = jest.fn();

describe('Home', () => {
  beforeAll(() => {
    // Setting a mock Promise response
    global.fetch.mockImplementation(
      (path) =>
        new Promise((resolve) => {
          if (path === 'https://front-test-api.herokuapp.com/api/product') {
            console.log(path);
            resolve({
              json: () =>
                new Promise((resolve) =>
                  resolve([
                    {
                      id: 'ZmGrkLRPXOTpxsU4jjAcv',
                      brand: 'Acer',
                      model: 'Iconia Talk S',
                      price: '170',
                      imgUrl:
                        'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
                    },
                    {
                      id: 'cGjFJlmqNPIwU59AOcY8H',
                      brand: 'Acer',
                      model: 'Liquid Z6 Plus',
                      price: '250',
                      imgUrl:
                        'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
                    },
                    {
                      id: '8hKbH2UHPM_944nRHYN1n',
                      brand: 'Acer',
                      model: 'Liquid Z6',
                      price: '120',
                      imgUrl:
                        'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg',
                    },
                    {
                      id: 'xyPoqGJxYR4Nn3yVGQcfI',
                      brand: 'Acer',
                      model: 'Iconia Tab 10 A3-A40',
                      price: '230',
                      imgUrl:
                        'https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
                    },
                  ])
                ),
            });
          }
        })
    );
  });
  test('should render', () => {
    const { container } = render(<Home />);
    expect(container.textContent).toMatch('Lista de productos');
  });

  test('should get the products data', () => {
    return new Promise((done) => {
      const component = mount(<Home />);

      setImmediate(async () => {
        component.update();
        expect(component.debug()).toMatch('Iconia Tab 10 A3-A40');
        expect(component.debug()).toMatch('Liquid Z6');
        expect(component.debug()).toMatch('Liquid Z6 Plus');
        done();
      });
    });
  });
});
