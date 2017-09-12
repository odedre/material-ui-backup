

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';

function getStyles(props, context, state) {
  const {
    color,
    hoverColor,
  } = props;

  const {baseTheme} = context.muiTheme;
  const offColor = color || baseTheme.palette.textColor;
  const onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: transitions.easeOut(),
    },
  };
}

/**
 * @description 
 * This component will render any icon defined in any stylesheet included in your project. You can use sites like IcoMoon to generate custom font files, or use prebuilt fonts such as Material icons or Font Awesome either included in your project, or served from a public Content Delivery Network.
 *
 * Refer to this [article](http://google.github.io/material-design-icons/#icon-font-for-the-web) to learn how to use font icons from any of the above websites in your project.
 *
 * To use FontIcon, add the icon stylesheet to your project and reference the icon's class in the className prop. If the icon font supports ligatures, reference the font in the className and enclose the icon name in the FontIcon tag.
 * 
 * @example
 * 
 * // This example uses a custom font (not part of Material-UI). The className defines the specific icon. The third example has a hoverColor defined.
 * 
 * import React from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import {blue500, red500, greenA200} from 'material-ui/styles/colors';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const FontIconExampleSimple = () => (
 *   <div>
 *     <FontIcon
 *       className="muidocs-icon-action-home"
 *       style={iconStyles}
 *     />
 * 
 *     <FontIcon
 *       className="muidocs-icon-action-home"
 *       style={iconStyles}
 *       color={blue500}
 *     />
 * 
 *     <FontIcon
 *       className="muidocs-icon-action-home"
 *       style={iconStyles}
 *       color={red500}
 *       hoverColor={greenA200}
 *     />
 *   </div>
 * );
 * 
 * export default FontIconExampleSimple;
 * 
 * 
 * @example
 * 
 * // This example uses the Material icons font, referenced in the <head> of the docs site index page. The className defines the font, and the IconFont tag content defines the specific icon.
 * 
 * import React from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import {red500, yellow500, blue500} from 'material-ui/styles/colors';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const FontIconExampleIcons = () => (
 *   <div>
 *     <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
 *     <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
 *     <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
 *     <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
 *   </div>
 * );
 * 
 * export default FontIconExampleIcons;
 * 
 */

class FontIcon extends Component {
  static muiName = 'FontIcon';

  static propTypes = {
    /**
     * @property {PropTypes.string} color - This is the font color of the font icon. If not specified,
     * this component will default to muiTheme.palette.textColor.
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
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
  };

  handleMouseLeave = (event) => {
    // hover is needed only when a hoverColor is defined
    if (this.props.hoverColor !== undefined) {
      this.setState({hovered: false});
    }
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  handleMouseEnter = (event) => {
    // hover is needed only when a hoverColor is defined
    if (this.props.hoverColor !== undefined) {
      this.setState({hovered: true});
    }
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  render() {
    const {
      hoverColor, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      onMouseEnter, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    return (
      <span
        {...other}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        style={prepareStyles(Object.assign(styles.root, style))}
      />
    );
  }
}

export default FontIcon;
