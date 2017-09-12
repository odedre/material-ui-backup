import {assert} from 'chai';
import convertColorToString from './colorToString';

describe('convertColorToString', () => {
    it('converts a decomposed rgb color object to a string` ', () => {
      assert.strictEqual(
        convertColorToString({type: 'rgb', values: [255, 255, 255]}),
        'rgb(255, 255, 255)'
      );
    });

    it('converts a decomposed rgba color object to a string` ', () => {
      assert.strictEqual(
        convertColorToString({type: 'rgba', values: [255, 255, 255, 0.5]}),
        'rgba(255, 255, 255, 0.5)'
      );
    });

    it('converts a decomposed hsl color object to a string` ', () => {
      assert.strictEqual(
        convertColorToString({type: 'hsl', values: [100, 50, 25]}),
        'hsl(100, 50%, 25%)'
      );
    });

    it('converts a decomposed hsla color object to a string` ', () => {
      assert.strictEqual(
        convertColorToString({type: 'hsla', values: [100, 50, 25, 0.5]}),
        'hsla(100, 50%, 25%, 0.5)'
      );
    });
  });