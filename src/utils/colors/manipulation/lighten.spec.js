import {assert} from 'chai';
import lighten from './lighten';

describe('lighten', () => {
    it("doesn't modify rgb white", () => {
      assert.strictEqual(
        lighten('rgb(255, 255, 255)', 0.1),
        'rgb(255, 255, 255)'
      );
    });

    it("doesn't overshoot if an above-range coefficient is supplied", () => {
      assert.strictEqual(
        lighten('rgb(0, 127, 255)', 1.5),
        'rgb(255, 255, 255)'
      );
    });

    it("doesn't overshoot if a below-range coefficient is supplied", () => {
      assert.strictEqual(
        lighten('rgb(0, 127, 255)', -0.1),
        'rgb(0, 127, 255)'
      );
    });

    it('lightens rgb black to white when coefficient is 1', () => {
      assert.strictEqual(
        lighten('rgb(0, 0, 0)', 1),
        'rgb(255, 255, 255)'
      );
    });

    it('retains the alpha value in an rgba color', () => {
      assert.strictEqual(
        lighten('rgb(255, 255, 255, 0.5)', 0.1),
        'rgb(255, 255, 255, 0.5)'
      );
    });

    it('lightens rgb black by 10% when coefficient is 0.1', () => {
      assert.strictEqual(
        lighten('rgb(0, 0, 0)', 0.1),
        'rgb(25, 25, 25)'
      );
    });

    it('lightens rgb red by 50% when coefficient is 0.5', () => {
      assert.strictEqual(
        lighten('rgb(255, 0, 0)', 0.5),
        'rgb(255, 127, 127)'
      );
    });

    it('lightens rgb grey by 50% when coefficient is 0.5', () => {
      assert.strictEqual(
        lighten('rgb(127, 127, 127)', 0.5),
        'rgb(191, 191, 191)'
      );
    });

    it("doesn't modify rgb colors when coefficient is 0", () => {
      assert.strictEqual(
        lighten('rgb(127, 127, 127)', 0),
        'rgb(127, 127, 127)'
      );
    });

    it('lightens hsl red by 50% when coefficient is 0.5', () => {
      assert.strictEqual(
        lighten('hsl(0, 100%, 50%)', 0.5),
        'hsl(0, 100%, 75%)'
      );
    });

    it("doesn't modify hsl colors when coefficient is 0", () => {
      assert.strictEqual(
        lighten('hsl(0, 100%, 50%)', 0),
        'hsl(0, 100%, 50%)'
      );
    });

    it("doesn't modify hsl colors when `l` is 100%", () => {
      assert.strictEqual(
        lighten('hsl(0, 50%, 100%)', 0.5),
        'hsl(0, 50%, 100%)'
      );
    });
  });