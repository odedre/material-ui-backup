/** 
 * # NotificationsActive SVG Icon. 
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
 * <svg width="24" height="24" ><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let SocialNotificationsActive = (props) => (
  <SvgIcon {...props}>
    <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/>
  </SvgIcon>
);
SocialNotificationsActive = pure(SocialNotificationsActive);
SocialNotificationsActive.displayName = 'SocialNotificationsActive';
SocialNotificationsActive.muiName = 'SvgIcon';

export default SocialNotificationsActive;
