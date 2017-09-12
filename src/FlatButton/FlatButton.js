import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';
import {fade} from '../utils/colorManipulator';
import EnhancedButton from '../internal/EnhancedButton';
import FlatButtonLabel from './FlatButtonLabel';

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && (props.label !== 0 && !props.label) && !props.icon) {
      return new Error(`Required prop label or children or icon was not specified in ${componentName}.`);
    }
  }
}

/**
 * @description 
 * Flat Buttons are used for general functions and reduce the amount of layering on the screen, making it more readable.
 * Also see http://www.material-ui.com/#/components/flat-button
 * 
 * @example 
 * // FlatButton with default color, primary, secondary and disabled props applied.
 * 
 * import React from 'react';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * const FlatButtonExampleSimple = () => (
 *   <div>
 *     <FlatButton label="Default" />
 *     <FlatButton label="Primary" primary={true} />
 *     <FlatButton label="Secondary" secondary={true} />
 *     <FlatButton label="Disabled" disabled={true} />
 *     <br />
 *     <br />
 *     <FlatButton label="Full width" fullWidth={true} />
 *   </div>
 * );
 * 
 * export default FlatButtonExampleSimple;
 * 
 * 
 * @example 
 * 
 * // The first example uses an input as a child component. The second example has an SVG Icon, with the label positioned after. The final example uses a Font Icon, and is wrapped in an anchor tag.
 * 
 * import React from 'react';
 * import FlatButton from 'material-ui/FlatButton';
 * import FontIcon from 'material-ui/FontIcon';
 * import ActionAndroid from 'material-ui/svg-icons/action/android';
 * 
 * const styles = {
 *   uploadButton: {
 *     verticalAlign: 'middle',
 *   },
 *   uploadInput: {
 *     cursor: 'pointer',
 *     position: 'absolute',
 *     top: 0,
 *     bottom: 0,
 *     right: 0,
 *     left: 0,
 *     width: '100%',
 *     opacity: 0,
 *   },
 * };
 * 
 * const FlatButtonExampleComplex = () => (
 *   <div>
 *     <FlatButton
 *       label="Choose an Image"
 *       labelPosition="before"
 *       style={styles.uploadButton}
 *       containerElement="label"
 *     >
 *       <input type="file" style={styles.uploadInput} />
 *     </FlatButton>
 *     <FlatButton
 *       label="Label before"
 *       labelPosition="before"
 *       primary={true}
 *       icon={<ActionAndroid />}
 *     />
 *     <FlatButton
 *       href="https://github.com/callemall/material-ui"
 *       target="_blank"
 *       label="GitHub Link"
 *       secondary={true}
 *       icon={<FontIcon className="muidocs-icon-custom-github" />}
 *     />
 *   </div>
 * );
 * 
 * export default FlatButtonExampleComplex;
 * 
 * 
 * @example 
 * 
 * // Examples of Flat Buttons using an icon without a label. The first example uses an SVG Icon, and has the default color. The second example shows how the icon and background color can be changed. The final example uses a Font Icon, and is wrapped in an anchor tag.
 * 
 * import React from 'react';
 * import FlatButton from 'material-ui/FlatButton';
 * import FontIcon from 'material-ui/FontIcon';
 * import ActionAndroid from 'material-ui/svg-icons/action/android';
 * import {fullWhite} from 'material-ui/styles/colors';
 * 
 * const style = {
 *   margin: 12,
 * };
 * 
 * const FlatButtonExampleIcon = () => (
 *   <div>
 *     <FlatButton
 *       icon={<ActionAndroid />}
 *       style={style}
 *     />
 *     <FlatButton
 *       backgroundColor="#a4c639"
 *       hoverColor="#8AA62F"
 *       icon={<ActionAndroid color={fullWhite} />}
 *       style={style}
 *     />
 *     <FlatButton
 *       href="https://github.com/callemall/material-ui"
 *       target="_blank"
 *       secondary={true}
 *       icon={<FontIcon className="muidocs-icon-custom-github" />}
 *       style={style}
 *     />
 *   </div>
 * );
 * 
 * export default FlatButtonExampleIcon;
 * 
 */

class FlatButton extends Component {
  static muiName = 'FlatButton';

  static propTypes = {
    /**
     * @property {PropTypes.string} backgroundColor - Color of button when mouse is not hovering over it.
     */
    backgroundColor: PropTypes.string,
    /**
     * @property {PropTypes.node} children - This is what will be displayed inside the button.
     * If a label is specified, the text within the label prop will
     * be displayed. Otherwise, the component will expect children
     * which will then be displayed. (In our example,
     * we are nesting an `<input type="file" />` and a `span`
     * that acts as our label to be displayed.) This only
     * applies to flat and raised buttons.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {string|element} containerElement - The element to use as the container for the FlatButton. Either a string to
     * use a DOM element or a ReactElement. This is useful for wrapping the
     * FlatButton in a custom Link component. If a ReactElement is given, ensure
     * that it passes all of its given props through to the underlying DOM
     * element and renders its children prop for proper integration.
     */
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    /**
     * @property {PropTypes.bool} disableTouchRipple - If true, the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,
    /**
     * @property {PropTypes.bool} disabled - Disables the button if set to true.
     */
    disabled: PropTypes.bool,
    /**
     * @property {PropTypes.bool} fullWidth - If true, the button will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * @property {PropTypes.string} hoverColor - Color of button when mouse hovers over.
     */
    hoverColor: PropTypes.string,
    /**
     * @property {PropTypes.string} href - The URL to link to when the button is clicked.
     */
    href: PropTypes.string,
    /**
     * @property {PropTypes.node} icon - Use this property to display an icon.
     */
    icon: PropTypes.node,
    /**
     * @property {custom} label - Label for the button.
     */
    label: validateLabel,
    /**
     * @property {['before','after']} labelPosition - Place label before or after the passed children.
     */
    labelPosition: PropTypes.oneOf([
      'before',
      'after',
    ]),
    /**
     * @property {PropTypes.object} labelStyle - Override the inline-styles of the button's label element.
     */
    labelStyle: PropTypes.object,
    /**
     * @property {PropTypes.func} onClick - Callback function fired when the button is touch-tapped.
     *
     * @param {object} event TouchTap event targeting the button.
     */
    onClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onKeyboardFocus - Callback function fired when the element is focused or blurred by the keyboard.
     *
     * @param {object} event `focus` or `blur` event targeting the element.
     * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
     */
    onKeyboardFocus: PropTypes.func,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /** @ignore */
    onTouchStart: PropTypes.func,
    /**
     * @property {PropTypes.bool} primary - If true, colors button according to
     * primaryTextColor from the Theme.
     */
    primary: PropTypes.bool,
    /**
     * @property {PropTypes.string} rippleColor - Color for the ripple after button is clicked.
     */
    rippleColor: PropTypes.string,
    /**
     * @property {PropTypes.bool} secondary - If true, colors button according to secondaryTextColor from the theme.
     * The primary prop has precendent if set to true.
     */
    secondary: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    disabled: false,
    fullWidth: false,
    labelStyle: {},
    labelPosition: 'after',
    onKeyboardFocus: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onTouchStart: () => {},
    primary: false,
    secondary: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
    isKeyboardFocused: false,
    touch: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.setState({
        hovered: false,
      });
    }
  }

  handleKeyboardFocus = (event, isKeyboardFocused) => {
    this.setState({isKeyboardFocused: isKeyboardFocused});
    this.props.onKeyboardFocus(event, isKeyboardFocused);
  };

  handleMouseEnter = (event) => {
    // Cancel hover styles for touch devices
    if (!this.state.touch) this.setState({hovered: true});
    this.props.onMouseEnter(event);
  };

  handleMouseLeave = (event) => {
    this.setState({hovered: false});
    this.props.onMouseLeave(event);
  };

  handleTouchStart = (event) => {
    this.setState({touch: true});
    this.props.onTouchStart(event);
  };

  render() {
    const {
      backgroundColor,
      children,
      disabled,
      fullWidth,
      hoverColor,
      icon,
      label,
      labelStyle,
      labelPosition,
      primary,
      rippleColor,
      secondary,
      style,
      ...other
    } = this.props;

    const {
      borderRadius,
      button: {
        height: buttonHeight,
        minWidth: buttonMinWidth,
        textTransform: buttonTextTransform,
      },
      flatButton: {
        buttonFilterColor,
        color: buttonColor,
        disabledTextColor,
        fontSize,
        fontWeight,
        primaryTextColor,
        secondaryTextColor,
        textColor,
        textTransform = buttonTextTransform || 'uppercase',
      },
    } = this.context.muiTheme;
    const defaultTextColor = disabled ? disabledTextColor :
      primary ? primaryTextColor :
      secondary ? secondaryTextColor :
      textColor;

    const defaultHoverColor = fade(buttonFilterColor, 0.2);
    const defaultRippleColor = buttonFilterColor;
    const buttonHoverColor = hoverColor || defaultHoverColor;
    const buttonRippleColor = rippleColor || defaultRippleColor;
    const buttonBackgroundColor = backgroundColor || buttonColor;
    const hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

    const mergedRootStyles = Object.assign({}, {
      height: buttonHeight,
      lineHeight: `${buttonHeight}px`,
      minWidth: fullWidth ? '100%' : buttonMinWidth,
      color: defaultTextColor,
      transition: transitions.easeOut(),
      borderRadius,
      userSelect: 'none',
      overflow: 'hidden',
      backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
      padding: 0,
      margin: 0,
      textAlign: 'center',
    }, style);

    let iconCloned;
    const labelStyleIcon = {};

    if (icon) {
      const iconStyles = Object.assign({
        verticalAlign: 'middle',
        marginLeft: label && labelPosition !== 'before' ? 12 : 0,
        marginRight: label && labelPosition === 'before' ? 12 : 0,
      }, icon.props.style);
      iconCloned = React.cloneElement(icon, {
        color: icon.props.color || mergedRootStyles.color,
        style: iconStyles,
        key: 'iconCloned',
      });

      if (labelPosition === 'before') {
        labelStyleIcon.paddingRight = 8;
      } else {
        labelStyleIcon.paddingLeft = 8;
      }
    }

    const mergedLabelStyles = Object.assign({
      letterSpacing: 0,
      textTransform: textTransform,
      fontWeight: fontWeight,
      fontSize: fontSize,
    }, labelStyleIcon, labelStyle);

    const labelElement = label ? (
      <FlatButtonLabel key="labelElement" label={label} style={mergedLabelStyles} />
    ) : undefined;

    // Place label before or after children.
    const enhancedButtonChildren = labelPosition === 'before' ?
    [
      labelElement,
      iconCloned,
      children,
    ] :
    [
      children,
      iconCloned,
      labelElement,
    ];

    return (
      <EnhancedButton
        {...other}
        disabled={disabled}
        focusRippleColor={buttonRippleColor}
        focusRippleOpacity={0.3}
        onKeyboardFocus={this.handleKeyboardFocus}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        onTouchStart={this.handleTouchStart}
        style={mergedRootStyles}
        touchRippleColor={buttonRippleColor}
        touchRippleOpacity={0.3}
      >
        {enhancedButtonChildren}
      </EnhancedButton>
    );
  }
}

export default FlatButton;
