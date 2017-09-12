import {assert} from 'chai';
import getContrastRatio from './getContrastRatio';

describe('getContrastRatio', () => {
    it('returns a ratio of 21 for black : white', () => {
      assert.strictEqual(
        getContrastRatio('#000', '#FFF'),
        21
      );
    });

    it('returns a ratio of 1 for black : black', () => {
      assert.strictEqual(
        getContrastRatio('#000', '#000'),
        1
      );
    });

    it('returns a ratio of 1 for white : white', () => {
      assert.strictEqual(
        getContrastRatio('#FFF', '#FFF'),
        1
      );
    });

    it('returns a ratio of 3.92 for dark-grey : light-grey', () => {
      assert.strictEqual(
        getContrastRatio('#707070', '#E5E5E5'),
        3.93
      );
    });

    it('returns a ratio of 3.93 for black : light-grey', () => {
      assert.strictEqual(
        getContrastRatio('#000', '#888'),
        5.92
      );
    });
  });