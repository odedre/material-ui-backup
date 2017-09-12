import {assert} from 'chai';
import darken from './darken';

describe('darken', () => {
    it("doesn't modify rgb black", () => {
      assert.strictEqual(
        darken('rgb(0, 0, 0)', 0.1),
        'rgb(0, 0, 0)'
      );
    });

    it("doesn't overshoot if an above-range coefficient is supplied", () => {
      assert.strictEqual(
        darken('rgb(0, 127, 255)', 1.5),
        'rgb(0, 0, 0)'
      );
    });

    it("doesn't overshoot if a below-range coefficient is supplied", () => {
      assert.strictEqual(
        darken('rgb(0, 127, 255)', -0.1),
        'rgb(0, 127, 255)'
      );
    });

    it('darkens rgb white to black when coefficient is 1', () => {
      assert.strictEqual(
        darken('rgb(255, 255, 255)', 1),
        'rgb(0, 0, 0)'
      );
    });

    it('retains the alpha value in an rgba color', () => {
      assert.strictEqual(
        darken('rgb(0, 0, 0, 0.5)', 0.1),
        'rgb(0, 0, 0, 0.5)'
      );
    });

    it('darkens rgb white by 10% when coefficient is 0.1', () => {
      assert.strictEqual(
        darken('rgb(255, 255, 255)', 0.1),
        'rgb(229, 229, 229)'
      );
    });

    it('darkens rgb red by 50% when coefficient is 0.5', () => {
      assert.strictEqual(
        darken('rgb(255, 0, 0)', 0.5),
        'rgb(127, 0, 0)'
      );
    });

    it('darkens rgb grey by 50% when coefficient is 0.5', () => {
      assert.strictEqual(
        darken('rgb(127, 127, 127)', 0.5),
        'rgb(63, 63, 63)'
      );
    });

    it("doesn't modify rgb colors when coefficient is 0", () => {
      assert.strictEqual(
        darken('rgb(255, 255, 255)', 0),
        'rgb(255, 255, 255)'
      );
    });

    it('darkens hsl red by 50% when coefficient is 0.5', () => {
      assert.strictEqual(
        darken('hsl(0, 100%, 50%)', 0.5),
        'hsl(0, 100%, 25%)'
      );
    });

    it("doesn't modify hsl colors when coefficient is 0", () => {
      assert.strictEqual(
        darken('hsl(0, 100%, 50%)', 0),
        'hsl(0, 100%, 50%)'
      );
    });

    it("doesn't modify hsl colors when l is 0%", () => {
      assert.strictEqual(
        darken('hsl(0, 50%, 0%)', 0.5),
        'hsl(0, 50%, 0%)'
      );
    });
  });