import {assert} from 'chai';
import lighten from './lighten';
import darken from './darken';
import emphasize from './emphasize';

describe('emphasize', () => {
    it('lightens a dark rgb color with the coefficient provided', () => {
      assert.strictEqual(
        emphasize('rgb(1, 2, 3)', 0.4),
        lighten('rgb(1, 2, 3)', 0.4)
      );
    });

    it('darkens a light rgb color with the coefficient provided', () => {
      assert.strictEqual(
        emphasize('rgb(250, 240, 230)', 0.3),
        darken('rgb(250, 240, 230)', 0.3)
      );
    });

    it('lightens a dark rgb color with the c0efficient 0.15 by default', () => {
      assert.strictEqual(
        emphasize('rgb(1, 2, 3)'),
        lighten('rgb(1, 2, 3)', 0.15)
      );
    });

    it('darkens a light rgb color with the coefficient 0.15 by default', () => {
      assert.strictEqual(
        emphasize('rgb(250, 240, 230)'),
        darken('rgb(250, 240, 230)', 0.15)
      );
    });
  });