import {assert} from 'chai';
import fade from './fade';

describe('fade', () => {
    it('converts an rgb color to an rgba color with the value provided', () => {
      assert.strictEqual(
        fade('rgb(1, 2, 3)', 0.4),
        'rgba(1, 2, 3, 0.4)'
      );
    });

    it('updates an rgba color with the alpha value provided', () => {
      assert.strictEqual(
        fade('rgba(255, 0, 0, 0.2)', 0.5),
        'rgba(255, 0, 0, 0.5)'
      );
    });

    it('converts an hsl color to an hsla color with the value provided', () => {
      assert.strictEqual(
        fade('hsl(0, 100%, 50%)', 0.1),
        'hsla(0, 100%, 50%, 0.1)'
      );
    });

    it('updates an hsla color with the alpha value provided', () => {
      assert.strictEqual(
        fade('hsla(0, 100%, 50%, 0.2)', 0.5),
        'hsla(0, 100%, 50%, 0.5)'
      );
    });
  });