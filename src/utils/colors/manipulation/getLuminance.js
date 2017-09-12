import decomposeColor from './decomposeColor';

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @bit
 * @name getLuminance
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 * @example
 *  getLuminance('rgb(0, 0, 0)') // => 0
 */
export default function getLuminance(color) {
    color = decomposeColor(color);
  
    if (color.type.indexOf('rgb') > -1) {
      const rgb = color.values.map((val) => {
        val /= 255; // normalized
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
    } else if (color.type.indexOf('hsl') > -1) {
      return color.values[2] / 100;
    }
  }