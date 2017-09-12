/**
 * Converts a color from CSS hex format to CSS rgb format.
 * 
 * @bit
 * @name convertHexToRGB
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 * @example
 *  convertHexToRGB('#9f3') // => 'rgb(153, 255, 51)'
 */
export default function convertHexToRGB(color) {
    if (color.length === 4) {
      let extendedColor = '#';
      for (let i = 1; i < color.length; i++) {
        extendedColor += color.charAt(i) + color.charAt(i);
      }
      color = extendedColor;
    }
  
    const values = {
      r:	parseInt(color.substr(1, 2), 16),
      g:	parseInt(color.substr(3, 2), 16),
      b:	parseInt(color.substr(5, 2), 16),
    };
  
    return `rgb(${values.r}, ${values.g}, ${values.b})`;
  }