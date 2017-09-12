import {assert} from 'chai';
import convertHexToRGB from './hexToRgb';

describe('convertHexToRGB', () => {
    it('converts a short hex color to an rgb color` ', () => {
      assert.strictEqual(
        convertHexToRGB('#9f3'),
        'rgb(153, 255, 51)'
      );
    });

    it('converts a long hex color to an rgb color` ', () => {
      assert.strictEqual(
        convertHexToRGB('#A94FD3'),
        'rgb(169, 79, 211)'
      );
    });
  });