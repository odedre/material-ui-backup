import decomposeColor from './decomposeColor';
import convertColorToString from '../convert/colorToString';
import clamp from '../../../../components/number/clamp';

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @bit
 * @name fade
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export default function fade(color, value) {
    color = decomposeColor(color);
    value = clamp(value, 0, 1);
  
    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }
    color.values[3] = value;
  
    return convertColorToString(color);
  }