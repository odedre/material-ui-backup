/** 
 * # LaptopChromebook SVG Icon. 
 * @property {node} children -  Elements passed into the SVG Icon.
 * @property {string} color - This is the fill color of the svg icon.
 * If not specified, this component will default to muiTheme.palette.textColor.
 * @property {string} hoverColor - This is the icon color when the mouse hovers over the icon.
 * @property {object} style	- Override the inline-styles of the root element.
 * @property {string} viewBox  - Allows you to redefine what the coordinates
 * without units mean inside an svg element. For example,
 * if the SVG element is 500 (width) by 200 (height),
 * and you pass viewBox="0 0 50 20", this means that the coordinates inside
 * the svg will go from the top left corner (0,0) to bottom right (50,20)
 * and each unit will be worth 10px. 
 * @example 
 * <svg width="24" height="24" ><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let HardwareLaptopChromebook = (props) => (
  <SvgIcon {...props}>
    <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>
  </SvgIcon>
);
HardwareLaptopChromebook = pure(HardwareLaptopChromebook);
HardwareLaptopChromebook.displayName = 'HardwareLaptopChromebook';
HardwareLaptopChromebook.muiName = 'SvgIcon';

export default HardwareLaptopChromebook;
