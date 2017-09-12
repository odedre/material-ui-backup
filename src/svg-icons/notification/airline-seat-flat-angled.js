/** 
 * # AirlineSeatFlatAngled SVG Icon. 
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
 * <svg width="24" height="24" ><path d="M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let NotificationAirlineSeatFlatAngled = (props) => (
  <SvgIcon {...props}>
    <path d="M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z"/>
  </SvgIcon>
);
NotificationAirlineSeatFlatAngled = pure(NotificationAirlineSeatFlatAngled);
NotificationAirlineSeatFlatAngled.displayName = 'NotificationAirlineSeatFlatAngled';
NotificationAirlineSeatFlatAngled.muiName = 'SvgIcon';

export default NotificationAirlineSeatFlatAngled;
