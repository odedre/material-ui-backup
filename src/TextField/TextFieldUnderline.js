import React from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';

const propTypes = {
  /**
   * @property {PropTypes.bool} disabled - True if the parent `TextField` is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @property {PropTypes.object} disabledStyle - Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: PropTypes.object,
  /**
   * @property {PropTypes.bool} error - True if the parent `TextField` has an error.
   */
  error: PropTypes.bool,
  /**
   * @property {PropTypes.object} errorStyle - Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: PropTypes.object,
  /**
   * @property {PropTypes.bool} focus - True if the parent `TextField` is focused.
   */
  focus: PropTypes.bool,
  /**
   * @property {PropTypes.object} focusStyle - Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: PropTypes.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: PropTypes.object.isRequired,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {},
};

const TextFieldUnderline = (props) => {
  const {
    disabled,
    disabledStyle,
    error,
    errorStyle,
    focus,
    focusStyle,
    muiTheme,
    style,
  } = props;

  const {
    color: errorStyleColor,
  } = errorStyle;

  const {
    prepareStyles,
    textField: {
      borderColor,
      disabledTextColor,
      errorColor,
      focusColor,
    },
  } = muiTheme;

  const styles = {
    root: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%',
    },
    disabled: {
      borderBottomStyle: 'dotted',
      borderBottomWidth: 2,
      borderColor: disabledTextColor,
    },
    focus: {
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: transitions.easeOut(),
    },
    error: {
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
      transform: 'scaleX(1)',
    },
  };

  let underline = Object.assign({}, styles.root, style);
  let focusedUnderline = Object.assign({}, underline, styles.focus, focusStyle);

  if (disabled) underline = Object.assign({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = Object.assign({}, focusedUnderline, {transform: 'scaleX(1)'});
  if (error) focusedUnderline = Object.assign({}, focusedUnderline, styles.error);

  return (
    <div>
      <hr aria-hidden="true" style={prepareStyles(underline)} />
      <hr aria-hidden="true" style={prepareStyles(focusedUnderline)} />
    </div>
  );
};

TextFieldUnderline.propTypes = propTypes;
TextFieldUnderline.defaultProps = defaultProps;

export default TextFieldUnderline;
