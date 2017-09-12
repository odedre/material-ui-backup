import getLuminance from './getLuminance';

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 * 
 * @bit
 * @name getContrastRatio
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 * @example
 *  getContrastRatio('#000', '#FFF') // => 21
 */
export default function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    const contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  
    return Number(contrastRatio.toFixed(2)); // Truncate at two digits
  }