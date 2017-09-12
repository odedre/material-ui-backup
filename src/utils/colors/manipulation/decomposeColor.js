import convertHexToRGB from '../convert/hexToRgb';

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values and color names.
 *
 * @bit
 * @name decomposeColor
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 * @example
 *  decomposeColor('rgb(255, 255, 255)') // => { type: 'rgb', values: [ 255, 255, 255 ] }
 */
export default function decomposeColor(color) {
    if (color.charAt(0) === '#') {
      return decomposeColor(convertHexToRGB(color));
    }
  
    const marker = color.indexOf('(');
  
    warning(marker !== -1, `Material-UI: The ${color} color was not parsed correctly,
    because it has an unsupported format (color name or RGB %). This may cause issues in component rendering.`);
  
    const type = color.substring(0, marker);
    let values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map((value) => parseFloat(value));
  
    return {type, values};
  }