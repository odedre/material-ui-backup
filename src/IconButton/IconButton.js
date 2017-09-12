


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';
import propTypes from '../utils/propTypes';
import EnhancedButton from '../internal/EnhancedButton';
import FontIcon from '../FontIcon';
import Tooltip from '../internal/Tooltip';
import {extendChildren} from '../utils/childUtils';

function getStyles(props, context) {
  const {baseTheme} = context.muiTheme;

  return {
    root: {
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: transitions.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0,
    },
    tooltip: {
      boxSizing: 'border-box',
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'default',
    },
  };
}

/**
 * 
 * @description
 * 
 * An Icon Button generates a button element around an icon. Also, focus styles will happen on tab but not on click. There are three ways to add an icon:
 * 
 * 1. For icon font stylesheets: Set the prop iconClassName to the classname for your icon. Certain icon fonts support ligatures, allowing the icon to be specified as a string. Refer to this [article](#) to learn more about including font icons in your project.
 * 2. For SVG icons: Insert the SVG component as a child of icon buttons.
 * 3. Alternative: You can also insert a [FontIcon](#) component as a child of IconButton. This is similar to how the iconClassName prop from method 1 is handled.
 * 
 * Also see http://www.material-ui.com/#/components/icon-button
 * 
 * @example 
 * 
 * // An Icon Button using an icon specified with the iconClassName property, and a disabled example.
 *
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * 
 * const IconButtonExampleSimple = () => (
 *   <div>
 *     <IconButton iconClassName="muidocs-icon-custom-github" />
 *     <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
 *   </div>
 * );
 * 
 * export default IconButtonExampleSimple;
 * 
 * 
 * @example 
 * 
 * // An Icon Button using a nested [Font Icon](#), a nested [SVG Icon](#) and an icon font ligature.
 * 
 * import React from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import IconButton from 'material-ui/IconButton';
 * import ActionHome from 'material-ui/svg-icons/action/home';
 * 
 * const IconButtonExampleComplex = () => (
 *   <div>
 *     <IconButton tooltip="Font Icon">
 *       <FontIcon className="muidocs-icon-action-home" />
 *     </IconButton>
 * 
 *     <IconButton tooltip="SVG Icon">
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconClassName="material-icons"
 *       tooltip="Ligature"
 *     >
 *       home
 *     </IconButton>
 *   </div>
 * );
 * 
 * export default IconButtonExampleComplex;
 * 
 * @example 
 * 
 * // Examples of Icon Button in different sizes.
 * 
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * import ActionHome from 'material-ui/svg-icons/action/home';
 * 
 * const styles = {
 *   smallIcon: {
 *     width: 36,
 *     height: 36,
 *   },
 *   mediumIcon: {
 *     width: 48,
 *     height: 48,
 *   },
 *   largeIcon: {
 *     width: 60,
 *     height: 60,
 *   },
 *   small: {
 *     width: 72,
 *     height: 72,
 *     padding: 16,
 *   },
 *   medium: {
 *     width: 96,
 *     height: 96,
 *     padding: 24,
 *   },
 *   large: {
 *     width: 120,
 *     height: 120,
 *     padding: 30,
 *   },
 * };
 * 
 * const IconButtonExampleSize = () => (
 *   <div>
 *     <IconButton>
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconStyle={styles.smallIcon}
 *       style={styles.small}
 *     >
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconStyle={styles.mediumIcon}
 *       style={styles.medium}
 *     >
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconStyle={styles.largeIcon}
 *       style={styles.large}
 *     >
 *       <ActionHome />
 *     </IconButton>
 *   </div>
 * );
 * 
 * export default IconButtonExampleSize;
 * 
 * 
 * @example 
 * 
 * // Icon Buttons showing the available tooltip positions.
 * 
 * 
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * 
 * const IconButtonExampleTooltip = () => (
 *   <div>
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
 *       tooltipPosition="bottom-right"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
 *       tooltipPosition="bottom-center"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
 *       tooltipPosition="bottom-left"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="top-right"
 *       tooltipPosition="top-right"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="top-center"
 *       tooltipPosition="top-center"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="top-left"
 *       tooltipPosition="top-left"
 *     />
 *   </div>
 * );
 * 
 * export default IconButtonExampleTooltip;
 * 
 * 
 * @example 
 * 
 * // The touch property adjusts the tooltip size for better visibility on mobile devices.
 * 
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * import ActionGrade from 'material-ui/svg-icons/action/grade';
 * 
 * const IconButtonExampleTouch = () => (
 *   <div>
 *     <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
 *       <ActionGrade />
 *     </IconButton>
 *   </div>
 * );
 * 
 * export default IconButtonExampleTouch;
 * 
 */

class IconButton extends Component {
  static muiName = 'IconButton';

  static propTypes = {
    /**
     * @property {PropTypes.node} children - Can be used to pass a `FontIcon` element as the icon for the button.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.bool} disableTouchRipple - If true, the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,
    /**
     * @property {PropTypes.bool} disabled - If true, the element will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * @property {PropTypes.bool} hoveredStyle - Override the inline-styles of the root element when the component is hovered.
     */
    hoveredStyle: PropTypes.object,
    /**
     * @property {PropTypes.string} href - The URL to link to when the button is clicked.
     */
    href: PropTypes.string,
    /**
     * @property {PropTypes.string} iconClassName - The CSS class name of the icon. Used for setting the icon with a stylesheet.
     */
    iconClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} iconStyle - Override the inline-styles of the icon element.
     * Note: you can specify iconHoverColor as a String inside this object.
     */
    iconStyle: PropTypes.object,
    /** @ignore */
    onBlur: PropTypes.func,
    /**
     * @property {PropTypes.func} onClick - Callback function fired when the button is touch-tapped.
     *
     * @param {object} event TouchTap event targeting the button.
     */
    onClick: PropTypes.func,
    /** @ignore */
    onFocus: PropTypes.func,
    /**
     * @property {PropTypes.func} onKeyboardFocus - Callback function fired when the element is focused or blurred by the keyboard.
     *
     * @param {object} event `focus` or `blur` event targeting the element.
     * @param {boolean} keyboardFocused Indicates whether the element is focused.
     */
    onKeyboardFocus: PropTypes.func,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /** @ignore */
    onMouseOut: PropTypes.func,
    /** @ignore */
    onTouchStart: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.node} tooltip - The text to supply to the element's tooltip.
     */
    tooltip: PropTypes.node,
    /**
     * @property {PropTypes.custom} tooltipPosition - The vertical and horizontal positions, respectively, of the element's tooltip.
     * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
     * "bottom-left", and "top-left".
     */
    tooltipPosition: propTypes.cornersAndCenter,
    /**
     * @property {PropTypes.object} tooltipStyles - Override the inline-styles of the tooltip element.
     */
    tooltipStyles: PropTypes.object,
    /**
     * @property {PropTypes.bool} touch - If true, increase the tooltip element's size. Useful for increasing tooltip
     * readability on mobile devices.
     */
    touch: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    disableTouchRipple: false,
    iconStyle: {},
    tooltipPosition: 'bottom-center',
    touch: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
    isKeyboardFocused: false,
    // Not to be confonded with the touch property.
    // This state is to determined if it's a mobile device.
    touch: false,
    tooltipShown: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.setState({hovered: false});
    }
  }

  setKeyboardFocus() {
    this.button.setKeyboardFocus();
  }

  showTooltip() {
    if (this.props.tooltip) {
      this.setState({tooltipShown: true});
    }
  }

  hideTooltip() {
    if (this.props.tooltip) this.setState({tooltipShown: false});
  }

  handleBlur = (event) => {
    this.hideTooltip();
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = (event) => {
    this.showTooltip();
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleMouseLeave = (event) => {
    if (!this.button.isKeyboardFocused()) {
      this.hideTooltip();
    }
    this.setState({hovered: false});
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  handleMouseOut = (event) => {
    if (this.props.disabled) this.hideTooltip();
    if (this.props.onMouseOut) this.props.onMouseOut(event);
  };

  handleMouseEnter = (event) => {
    this.showTooltip();

    // Cancel hover styles for touch devices
    if (!this.state.touch) {
      this.setState({hovered: true});
    }
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  handleTouchStart = (event) => {
    this.setState({touch: true});

    if (this.props.onTouchStart) {
      this.props.onTouchStart(event);
    }
  };

  handleKeyboardFocus = (event, isKeyboardFocused) => {
    const {disabled, onFocus, onBlur, onKeyboardFocus} = this.props;
    if (isKeyboardFocused && !disabled) {
      this.showTooltip();
      if (onFocus) {
        onFocus(event);
      }
    } else {
      this.hideTooltip();
      if (onBlur) {
        onBlur(event);
      }
    }

    this.setState({isKeyboardFocused});
    if (onKeyboardFocus) {
      onKeyboardFocus(event, isKeyboardFocused);
    }
  };

  render() {
    const {
      disabled,
      hoveredStyle,
      disableTouchRipple,
      children,
      iconClassName,
      style,
      tooltip,
      tooltipPosition: tooltipPositionProp,
      tooltipStyles,
      touch,
      iconStyle,
      ...other
    } = this.props;
    let fonticon;

    const styles = getStyles(this.props, this.context);
    const tooltipPosition = tooltipPositionProp.split('-');

    const hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

    const mergedRootStyles = Object.assign(
      styles.root,
      style,
      hovered ? hoveredStyle : {}
    );

    const tooltipElement = tooltip ? (
      <Tooltip
        label={tooltip}
        show={this.state.tooltipShown}
        touch={touch}
        style={Object.assign(styles.tooltip, tooltipStyles)}
        verticalPosition={tooltipPosition[0]}
        horizontalPosition={tooltipPosition[1]}
      />
    ) : null;

    if (iconClassName) {
      const {
        iconHoverColor,
        ...iconStyleFontIcon
      } = iconStyle;

      fonticon = (
        <FontIcon
          className={iconClassName}
          hoverColor={disabled ? null : iconHoverColor}
          style={Object.assign(
            {},
            disabled && styles.disabled,
            iconStyleFontIcon
          )}
          color={this.context.muiTheme.baseTheme.palette.textColor}
        >
          {children}
        </FontIcon>
      );
    }

    const childrenStyle = disabled ? Object.assign({}, iconStyle, styles.disabled) : iconStyle;

    return (
      <EnhancedButton
        ref={(ref) => this.button = ref}
        {...other}
        centerRipple={true}
        disabled={disabled}
        onTouchStart={this.handleTouchStart}
        style={mergedRootStyles}
        disableTouchRipple={disableTouchRipple}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
        onKeyboardFocus={this.handleKeyboardFocus}
      >
        {tooltipElement}
        {fonticon}
        {extendChildren(children, {
          style: childrenStyle,
        })}
      </EnhancedButton>
    );
  }
}

export default IconButton;
