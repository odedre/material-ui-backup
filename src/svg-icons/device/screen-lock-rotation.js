/** 
 * # ScreenLockRotation SVG Icon. 
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
 * <svg width="24" height="24" ><path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let DeviceScreenLockRotation = (props) => (
  <SvgIcon {...props}>
    <path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"/>
  </SvgIcon>
);
DeviceScreenLockRotation = pure(DeviceScreenLockRotation);
DeviceScreenLockRotation.displayName = 'DeviceScreenLockRotation';
DeviceScreenLockRotation.muiName = 'SvgIcon';

export default DeviceScreenLockRotation;
