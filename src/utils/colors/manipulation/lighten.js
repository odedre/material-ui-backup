import decomposeColor from './decomposeColor';
import convertColorToString from '../convert/colorToString';
import clamp from '../../../../components/number/clamp';

/**
 * Lightens a color.
 *
 * @bit
 * @name lighten
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 * @example
 *  import lighten from 'bit/manipulation/lighten'; 
 * 
 *  lighten('rgb(255, 255, 255)', 0.1) // => 'rgb(255, 255, 255)'
 */
export default function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient, 0, 1);
  
    if (color.type.indexOf('hsl') > -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') > -1) {
      for (let i = 0; i < 3; i++) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }
  
    return convertColorToString(color);
  }