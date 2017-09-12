/**
 * Converts a color object with type and values to a string.
 *
 * @bit
 * @name convertColorToString
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 * @example
 *  convertColorToString({type: 'rgba', values: [255, 255, 255, 0.5]}) // => 'rgba(255, 255, 255, 0.5)'
 */
export default function convertColorToString(color) {
    const {type, values} = color;
  
    if (type.indexOf('rgb') > -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      for (let i = 0; i < 3; i++) {
        values[i] = parseInt(values[i]);
      }
    }
  
    let colorString;
  
    if (type.indexOf('hsl') > -1) {
      colorString = `${color.type}(${values[0]}, ${values[1]}%, ${values[2]}%`;
    } else {
      colorString = `${color.type}(${values[0]}, ${values[1]}, ${values[2]}`;
    }
  
    if (values.length === 4) {
      colorString += `, ${color.values[3]})`;
    } else {
      colorString += ')';
    }
  
    return colorString;
  }