import { h } from 'preact';
import { render } from '@testing-library/preact';

import Product from '../../src/routes/product/index';
import { mount } from 'enzyme';
import HeaderProvider from '../../src/context/headerContext';

global.fetch = jest.fn();

describe('Product', () => {
  beforeAll(() => {
    // Setting a mock Promise response
    global.fetch.mockImplementation(
      (path) =>
        new Promise((resolve) => {
          if (
            path ===
            'https://front-test-api.herokuapp.com/api/product/xyPoqGJxYR4Nn3yVGQcfI'
          ) {
            console.log(path);
            resolve({
              json: () =>
                new Promise((resolve) =>
                  resolve({
                    id: 'xyPoqGJxYR4Nn3yVGQcfI',
                    brand: 'Acer',
                    model: 'Iconia Tab 10 A3-A40',
                    price: '230',
                    imgUrl:
                      'https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
                    networkTechnology: 'No cellular connectivity',
                    networkSpeed: '',
                    gprs: 'No',
                    edge: 'No',
                    announced: '2016  April',
                    status: 'Available. Released 2016  June',
                    dimentions: '259 x 167 x 8.9 mm (10.20 x 6.57 x 0.35 in)',
                    weight: '',
                    sim: 'No',
                    displayType: 'IPS LCD capacitive touchscreen  16M colors',
                    displayResolution:
                      '10.1 inches (~68.4% screen-to-body ratio)',
                    displaySize: '1920 x 1200 pixels (~224 ppi pixel density)',
                    os: 'Android 6.0 (Marshmallow)',
                    cpu: 'Quad-core 1.3 GHz Cortex-A53',
                    chipset: 'Mediatek MT8163A',
                    gpu: 'Mali-T720 MP2',
                    externalMemory: 'microSD  up to 256 GB (dedicated slot)',
                    internalMemory: ['16 GB', '32 GB', '64 GB'],
                    ram: '2 GB RAM',
                    primaryCamera: ['5 MP'],
                    secondaryCmera: '2 MP',
                    speaker: 'Yes with stereo speakers (4 speakers)',
                    audioJack: 'Yes',
                    wlan: ['Wi-Fi 802.11 a/b/g/n/ac', 'dual-band', 'hotspot'],
                    bluetooth: 'Yes',
                    gps: '',
                    nfc: '',
                    radio: 'No',
                    usb: 'microUSB 2.0',
                    sensors: 'Accelerometer',
                    battery: 'Non-removable Li-Ion battery',
                    colors: ['Black'],
                    options: {
                      colors: [
                        {
                          code: 1000,
                          name: 'Black',
                        },
                      ],
                      storages: [
                        {
                          code: 2000,
                          name: '16 GB',
                        },
                        {
                          code: 2001,
                          name: '32 GB',
                        },
                        {
                          code: 2002,
                          name: '64 GB',
                        },
                      ],
                    },
                  })
                ),
            });
          }
        })
    );
  });

  test('should get the product data', () => {
    return new Promise((done) => {
      const component = mount(
        <HeaderProvider>
          <Product id={'xyPoqGJxYR4Nn3yVGQcfI'} />
        </HeaderProvider>
      );

      setImmediate(async () => {
        component.update();
        expect(component.debug()).toMatch('Iconia Tab 10 A3-A40');
        expect(component.debug()).toMatch('Acer');
        expect(component.debug()).toMatch('Quad-core 1.3 GHz Cortex-A53');
        expect(component.debug()).toMatch('2 GB RAM');
        expect(component.debug()).toMatch('Android 6.0 (Marshmallow)');
        done();
      });
    });
  });
});
