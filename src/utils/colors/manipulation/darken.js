import decomposeColor from './decomposeColor';
import convertColorToString from '../convert/colorToString';
import clamp from '../../../../components/number/clamp';

/**
 * Darkens a color.
 *
 * @bit
 * @name darken
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export default function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient, 0, 1);
  
    if (color.type.indexOf('hsl') > -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') > -1) {
      for (let i = 0; i < 3; i++) {
        color.values[i] *= 1 - coefficient;
      }
    }
    return convertColorToString(color);
  }