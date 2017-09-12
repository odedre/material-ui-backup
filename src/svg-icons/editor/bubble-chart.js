/** 
 * # BubbleChart SVG Icon. 
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
  
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let EditorBubbleChart = (props) => (
  <SvgIcon {...props}>
    <circle cx="7.2" cy="14.4" r="3.2"/><circle cx="14.8" cy="18" r="2"/><circle cx="15.2" cy="8.8" r="4.8"/>
  </SvgIcon>
);
EditorBubbleChart = pure(EditorBubbleChart);
EditorBubbleChart.displayName = 'EditorBubbleChart';
EditorBubbleChart.muiName = 'SvgIcon';

export default EditorBubbleChart;
