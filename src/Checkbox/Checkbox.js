import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EnhancedSwitch from '../internal/EnhancedSwitch';
import transitions from '../styles/transitions';
import CheckboxOutline from '../svg-icons/toggle/check-box-outline-blank';
import CheckboxChecked from '../svg-icons/toggle/check-box';

function getStyles(props, context) {
  const {checkbox} = context.muiTheme;
  const checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize,
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: `${transitions.easeOut('450ms', 'opacity', '0ms')}, ${
          transitions.easeOut('0ms', 'transform', '450ms')
        }`,
      fill: checkbox.checkedColor,
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: `${transitions.easeOut('0ms', 'opacity', '0ms')}, ${
          transitions.easeOut('800ms', 'transform', '0ms')
        }`,
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor,
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: transitions.easeOut('1000ms', 'opacity', '200ms'),
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: transitions.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor,
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor,
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor,
    },
  };
}

/**
 * @description A checkbox is used to verify which options you want selected from a group.
 * Also see https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox
 * 
 * @example 
 * // The second example is selected by default using the `defaultChecked` property. The third example is disabled using the `disabled` property. The fourth example uses custom icons through the `checkedIcon` and `uncheckedIcon` properties. The final example uses the `labelPosition` property to position the label on the left.
 * 
 * import React from 'react';
 * import Checkbox from 'material-ui/Checkbox';
 * import ActionFavorite from 'material-ui/svg-icons/action/favorite';
 * import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
 * import Visibility from 'material-ui/svg-icons/action/visibility';
 * import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
 * 
 * const styles = {
 *   block: {
 *     maxWidth: 250,
 *   },
 *   checkbox: {
 *     marginBottom: 16,
 *   },
 * };
 * 
 * class CheckboxExampleSimple extends React.Component {
 *   state = {
 *     checked: false,
 *   }
 * 
 *   updateCheck() {
 *     this.setState((oldState) => {
 *       return {
 *         checked: !oldState.checked,
 *       };
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <div style={styles.block}>
 *         <Checkbox
 *           label="Simple"
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Simple with controlled value"
 *           checked={this.state.checked}
 *           onCheck={this.updateCheck.bind(this)}
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           checkedIcon={<ActionFavorite />}
 *           uncheckedIcon={<ActionFavoriteBorder />}
 *           label="Custom icon"
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           checkedIcon={<Visibility />}
 *           uncheckedIcon={<VisibilityOff />}
 *           label="Custom icon of different shapes"
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Disabled unchecked"
 *           disabled={true}
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Disabled checked"
 *           checked={true}
 *           disabled={true}
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Label on the left"
 *           labelPosition="left"
 *           style={styles.checkbox}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default CheckboxExampleSimple;
 * 
 */
class Checkbox extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} checked - Checkbox is checked if true.
     */
    checked: PropTypes.bool,
    /**
     * @property {PropTypes.element} checkedIcon - The SvgIcon to use for the checked state.
     * This is useful to create icon toggles.
     */
    checkedIcon: PropTypes.element,
    /**
     * @property {PropTypes.bool} defaultChecked - The default state of our checkbox component.
     * **Warning:** This cannot be used in conjunction with `checked`.
     * Decide between using a controlled or uncontrolled input element and remove one of these props.
     * More info: https://fb.me/react-controlled-components
     */
    defaultChecked: PropTypes.bool,
    /**
     * @property {PropTypes.bool} disabled - Disabled if true.
     */
    disabled: PropTypes.bool,
    /**
     * @property {PropTypes.object} iconStyle - Overrides the inline-styles of the icon element.
     */
    iconStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} inputStyle - Overrides the inline-styles of the input element.
     */
    inputStyle: PropTypes.object,
    /**
     * @property {PropTypes.oneOf(['left', 'right'])} labelPosition - Where the label will be placed next to the checkbox.
     */
    labelPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * @property {PropTypes.object} labelStyle - Overrides the inline-styles of the Checkbox element label.
     */
    labelStyle: PropTypes.object,
    /**
     * @property {PropTypes.func} onCheck - Callback function that is fired when the checkbox is checked.
     *
     * @param {object} event `change` event targeting the underlying checkbox `input`.
     * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
     */
    onCheck: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.element} uncheckedIcon - The SvgIcon to use for the unchecked state.
     * This is useful to create icon toggles.
     */
    uncheckedIcon: PropTypes.element,
    /**
     * @property {PropTypes.object} valueLink - ValueLink for when using controlled checkbox.
     */
    valueLink: PropTypes.object,
  };

  static defaultProps = {
    labelPosition: 'right',
    disabled: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    switched: false,
  };

  componentWillMount() {
    const {checked, defaultChecked, valueLink} = this.props;

    if (checked || defaultChecked || (valueLink && valueLink.value)) {
      this.setState({
        switched: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        switched: nextProps.checked,
      });
    }
  }

  isChecked() {
    return this.refs.enhancedSwitch.isSwitched();
  }

  setChecked(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
  }

  handleStateChange = (newSwitched) => {
    this.setState({
      switched: newSwitched,
    });
  };

  handleCheck = (event, isInputChecked) => {
    if (this.props.onCheck) {
      this.props.onCheck(event, isInputChecked);
    }
  };

  render() {
    const {
      iconStyle,
      onCheck, // eslint-disable-line no-unused-vars
      checkedIcon,
      uncheckedIcon,
      ...other
    } = this.props;
    const styles = getStyles(this.props, this.context);
    const boxStyles =
      Object.assign(
        styles.box,
        this.state.switched && styles.boxWhenSwitched,
        iconStyle,
        this.props.disabled && styles.boxWhenDisabled);
    const checkStyles =
      Object.assign(
        styles.check,
        this.state.switched && styles.checkWhenSwitched,
        iconStyle,
        this.props.disabled && styles.checkWhenDisabled);

    const checkedElement = checkedIcon ? React.cloneElement(checkedIcon, {
      style: Object.assign(checkStyles, checkedIcon.props.style),
    }) : React.createElement(CheckboxChecked, {
      style: checkStyles,
    });

    const unCheckedElement = uncheckedIcon ? React.cloneElement(uncheckedIcon, {
      style: Object.assign(boxStyles, uncheckedIcon.props.style),
    }) : React.createElement(CheckboxOutline, {
      style: boxStyles,
    });

    const checkboxElement = (
      <div>
        {unCheckedElement}
        {checkedElement}
      </div>
    );

    const rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
    const mergedIconStyle = Object.assign(styles.icon, iconStyle);

    const labelStyle = Object.assign(
      styles.label,
      this.props.labelStyle
    );

    const enhancedSwitchProps = {
      ref: 'enhancedSwitch',
      inputType: 'checkbox',
      switched: this.state.switched,
      switchElement: checkboxElement,
      rippleColor: rippleColor,
      iconStyle: mergedIconStyle,
      onSwitch: this.handleCheck,
      labelStyle: labelStyle,
      onParentShouldUpdate: this.handleStateChange,
      labelPosition: this.props.labelPosition,
    };

    return (
      <EnhancedSwitch
        {...other}
        {...enhancedSwitchProps}
      />
    );
  }
}

export default Checkbox;
