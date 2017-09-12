/** 
 * # AirlineSeatFlat SVG Icon. 
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
 * <svg width="24" height="24" ><path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let NotificationAirlineSeatFlat = (props) => (
  <SvgIcon {...props}>
    <path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z"/>
  </SvgIcon>
);
NotificationAirlineSeatFlat = pure(NotificationAirlineSeatFlat);
NotificationAirlineSeatFlat.displayName = 'NotificationAirlineSeatFlat';
NotificationAirlineSeatFlat.muiName = 'SvgIcon';

export default NotificationAirlineSeatFlat;
