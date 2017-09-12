import {assert} from 'chai';
import getLuminance from './getLuminance';

describe('getLuminance', () => {
    it('returns a luminance of 1 for rgb white', () => {
      assert.strictEqual(
        getLuminance('rgb(0, 0, 0)'),
        0
      );
    });

    it('returns a luminance of 1 for rgb white', () => {
      assert.strictEqual(
        getLuminance('rgb(255, 255, 255)'),
        1
      );
    });

    it('returns a valid luminance for rgb mid-grey', () => {
      assert.strictEqual(
        getLuminance('rgb(127, 127, 127)'),
        0.212
      );
    });

    it('returns a valid luminance for an rgb color', () => {
      assert.strictEqual(
        getLuminance('rgb(255, 127, 0)'),
        0.364
      );
    });

    it('returns a normalized luminance from an hsl color', () => {
      assert.strictEqual(
        getLuminance('hsl(100, 100%, 50%)'),
        0.5
      );
    });
  });