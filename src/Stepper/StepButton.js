import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';
import EnhancedButton from '../internal/EnhancedButton';
import StepLabel from './StepLabel';

const isLabel = (child) => {
  return child && child.type && child.type.muiName === 'StepLabel';
};

const getStyles = (props, context, state) => {
  const {hovered} = state;
  const {backgroundColor, hoverBackgroundColor} = context.muiTheme.stepper;

  const styles = {
    root: {
      padding: 0,
      backgroundColor: hovered ? hoverBackgroundColor : backgroundColor,
      transition: transitions.easeOut(),
    },
  };

  if (context.stepper.orientation === 'vertical') {
    styles.root.width = '100%';
  }

  return styles;
};

class StepButton extends Component {

  static propTypes = {
    /**
     * @property {PropTypes.bool} active - Passed from `Step` Is passed to StepLabel.
     */
    active: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - Can be a `StepLabel` or a node to place inside `StepLabel` as children.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.bool} completed - Sets completed styling. Is passed to StepLabel.
     */
    completed: PropTypes.bool,
    /**
     * @property {PropTypes.bool} disabled - Disables the button and sets disabled styling. Is passed to StepLabel.
     */
    disabled: PropTypes.bool,
    /**
     * @property {element|string|number} icon - The icon displayed by the step label. {element|string}
     */
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    /**
     * @property {PropTypes.object} iconContainerStyle - Override the inline-styles of the icon container element.
     */
    iconContainerStyle: PropTypes.object,
    /** @ignore */
    last: PropTypes.bool,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /** @ignore */
    onTouchStart: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-style of the root element.
     */
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    stepper: PropTypes.object,
  };

  state = {
    hovered: false,
    touched: false,
  };

  handleMouseEnter = (event) => {
    const {onMouseEnter} = this.props;
    // Cancel hover styles for touch devices
    if (!this.state.touched) {
      this.setState({hovered: true});
    }
    if (typeof onMouseEnter === 'function') {
      onMouseEnter(event);
    }
  };

  handleMouseLeave = (event) => {
    const {onMouseLeave} = this.props;
    this.setState({hovered: false});
    if (typeof onMouseLeave === 'function') {
      onMouseLeave(event);
    }
  };

  handleTouchStart = (event) => {
    const {onTouchStart} = this.props;
    if (!this.state.touched) {
      this.setState({touched: true});
    }
    if (typeof onTouchStart === 'function') {
      onTouchStart(event);
    }
  };

  render() {
    const {
      active,
      children,
      completed,
      disabled,
      icon,
      iconContainerStyle,
      last, // eslint-disable-line no-unused-vars
      onMouseEnter, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      onTouchStart, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context, this.state);

    const child = isLabel(children) ? children : <StepLabel>{children}</StepLabel>;

    return (
      <EnhancedButton
        disabled={disabled}
        style={Object.assign(styles.root, style)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart}
        {...other}
      >
        {React.cloneElement(child, {active, completed, disabled, icon, iconContainerStyle})}
      </EnhancedButton>
    );
  }
}

export default StepButton;
