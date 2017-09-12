/** 
 * # SkipPrevious SVG Icon. 
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
 * <svg width="24" height="24" ><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let AvSkipPrevious = (props) => (
  <SvgIcon {...props}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
  </SvgIcon>
);
AvSkipPrevious = pure(AvSkipPrevious);
AvSkipPrevious.displayName = 'AvSkipPrevious';
AvSkipPrevious.muiName = 'SvgIcon';

export default AvSkipPrevious;
