import {assert} from 'chai';
import decomposeColor from './decomposeColor';

describe('decomposeColor', () => {
    it('converts an rgb color string to an object with `type` and `value` keys', () => {
      const {type, values} = decomposeColor('rgb(255, 255, 255)');
      assert.strictEqual(type, 'rgb');
      assert.deepEqual(values, [255, 255, 255]);
    });

    it('converts an rgba color string to an object with `type` and `value` keys', () => {
      const {type, values} = decomposeColor('rgba(255, 255, 255, 0.5)');
      assert.strictEqual(type, 'rgba');
      assert.deepEqual(values, [255, 255, 255, 0.5]);
    });

    it('converts an hsl color string to an object with `type` and `value` keys', () => {
      const {type, values} = decomposeColor('hsl(100, 50%, 25%)');
      assert.strictEqual(type, 'hsl');
      assert.deepEqual(values, [100, 50, 25]);
    });

    it('converts an hsla color string to an object with `type` and `value` keys', () => {
      const {type, values} = decomposeColor('hsla(100, 50%, 25%, 0.5)');
      assert.strictEqual(type, 'hsla');
      assert.deepEqual(values, [100, 50, 25, 0.5]);
    });
  });