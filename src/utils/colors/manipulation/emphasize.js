import getLuminance from './getLuminance';
import darken from './darken';
import lighten from './lighten';

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @bit
 * @name emphasize
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 * @example
 *  emphasize('rgb(1, 2, 3)', 0.4) // => rgb(102, 103, 103)
 */
export default function emphasize(color, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ?
      darken(color, coefficient) :
      lighten(color, coefficient);
  }