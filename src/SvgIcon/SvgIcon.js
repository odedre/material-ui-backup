

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';

/**
 * @description
 * 
 * The SvgIcon component takes an SVG path element as its child, and converts it to a React component which displays the path and allows the icon to be styled and respond to mouse events.
 *
 * The resulting icon can be used as is, or included as a child for other Material-UI components that use icons, such as Icon Button.
 *
 * For convenience, the full set of google Material icons are available in Material-UI as pre-built SVG Icon components. Each icon path is already wrapped with SvgIcon, and can be imported and used directly as a React component. Any properties supplied are passed to SvgIcon.
 * The import path for each Material icons component includes the category and icon name, with spaces substituted with dashes. For example to use the 3d rotation icon component, import material-ui/svg-icons/action/3d-rotation.
 * For more info go to http://www.material-ui.com/#/components/svg-icon
 * 
 * @example 
 * 
 * // This example uses a custom svg icon. The third example has a hoverColor defined.
 *
 * import React from 'react';
 * import {blue500, red500, greenA200} from 'material-ui/styles/colors';
 * import SvgIcon from 'material-ui/SvgIcon';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const HomeIcon = (props) => (
 *   <SvgIcon {...props}>
 *     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
 *   </SvgIcon>
 * );
 * 
 * const SvgIconExampleSimple = () => (
 *   <div>
 *     <HomeIcon style={iconStyles} />
 *     <HomeIcon style={iconStyles} color={blue500} />
 *     <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
 *   </div>
 * );
 * 
 * export default SvgIconExampleSimple;
 * 
 * 
 * @example 
 * 
 * // This examples demonstrates how to use the included Material icon components.
 *
 * import React from 'react';
 * import ActionHome from 'material-ui/svg-icons/action/home';
 * import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
 * import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
 * import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
 * import {red500, yellow500, blue500} from 'material-ui/styles/colors';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const SvgIconExampleIcons = () => (
 *   <div>
 *     <ActionHome style={iconStyles} />
 *     <ActionFlightTakeoff style={iconStyles} color={red500} />
 *     <FileCloudDownload style={iconStyles} color={yellow500} />
 *     <HardwareVideogameAsset style={iconStyles} color={blue500} />
 *   </div>
 * );
 * 
 * export default SvgIconExampleIcons;
 * 
 */

class SvgIcon extends Component {
  static muiName = 'SvgIcon';

  static propTypes = {
    /**
     * @property {PropTypes.node} children - Elements passed into the SVG Icon.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} color - This is the fill color of the svg icon.
     * If not specified, this component will default
     * to muiTheme.palette.textColor.
     */
    color: PropTypes.string,
    /**
     * @property {PropTypes.string} hoverColor - This is the icon color when the mouse hovers over the icon.
     */
    hoverColor: PropTypes.string,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.string} viewBox - Allows you to redefine what the coordinates
     * without units mean inside an svg element. For example,
     * if the SVG element is 500 (width) by 200 (height), and you
     * pass viewBox="0 0 50 20", this means that the coordinates inside
     * the svg will go from the top left corner (0,0) to bottom right (50,20)
     * and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
  };

  handleMouseLeave = (event) => {
    this.setState({hovered: false});
    this.props.onMouseLeave(event);
  };

  handleMouseEnter = (event) => {
    this.setState({hovered: true});
    this.props.onMouseEnter(event);
  };

  render() {
    const {
      children,
      color,
      hoverColor,
      onMouseEnter, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      style,
      viewBox,
      ...other
    } = this.props;

    const {
      svgIcon,
      prepareStyles,
    } = this.context.muiTheme;

    const offColor = color ? color : 'currentColor';
    const onColor = hoverColor ? hoverColor : offColor;

    const mergedStyles = Object.assign({
      display: 'inline-block',
      color: svgIcon.color,
      fill: this.state.hovered ? onColor : offColor,
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: transitions.easeOut(),
    }, style);

    return (
      <svg
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={prepareStyles(mergedStyles)}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
