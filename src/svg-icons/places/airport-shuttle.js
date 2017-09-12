/** 
 * # AirportShuttle SVG Icon. 
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
 * <svg width="24" height="24" ><path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/></svg> 
 */
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let PlacesAirportShuttle = (props) => (
  <SvgIcon {...props}>
    <path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/>
  </SvgIcon>
);
PlacesAirportShuttle = pure(PlacesAirportShuttle);
PlacesAirportShuttle.displayName = 'PlacesAirportShuttle';
PlacesAirportShuttle.muiName = 'SvgIcon';

export default PlacesAirportShuttle;
