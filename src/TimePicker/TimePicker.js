/**
 * @description 
 * time picker is used to input a time by displaying an interface the user can interact with.
 * Also see http://www.material-ui.com/#/components/time-picker
 * 
 * @example 
 * 
 * // Time Picker supports 12 hour and 24 hour formats. In 12 hour format the AM and PM indicators toggle the selected time period. You can also disable the Dialog passing true to the disabled property.
 * 
 * import React from 'react';
 * import TimePicker from 'material-ui/TimePicker';
 * 
 * const TimePickerExampleSimple = () => (
 *   <div>
 *     <TimePicker
 *       hintText="12hr Format"
 *     />
 *     <TimePicker
 *       hintText="12hr Format with auto ok"
 *       autoOk={true}
 *     />
 *     <TimePicker
 *       format="24hr"
 *       hintText="24hr Format"
 *     />
 *     <TimePicker
 *       disabled={true}
 *       format="24hr"
 *       hintText="Disabled TimePicker"
 *     />
 *   </div>
 * );
 * 
 * export default TimePickerExampleSimple;
 * 
 * 
 * @example 
 * 
 * // TimePicker can be used as a controlled component.
 *
 * import React from 'react';
 * import TimePicker from 'material-ui/TimePicker';
 * 
 * export default class TimePickerExampleComplex extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value24: null, value12: null};
 *   }
 * 
 *   handleChangeTimePicker24 = (event, date) => {
 *     this.setState({value24: date});
 *   };
 * 
 *   handleChangeTimePicker12 = (event, date) => {
 *     this.setState({value12: date});
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <TimePicker
 *           format="ampm"
 *           hintText="12hr Format"
 *           value={this.state.value12}
 *           onChange={this.handleChangeTimePicker12}
 *         />
 *         <TimePicker
 *           format="24hr"
 *           hintText="24hr Format"
 *           value={this.state.value24}
 *           onChange={this.handleChangeTimePicker24}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * 
 * @example 
 *  
 * // The buttons can be localised using the cancelLabel and okLabel properties.
 * 
 * 
 * import React from 'react';
 * import TimePicker from 'material-ui/TimePicker';
 * 
 * const TimePickerInternational = () => (
 *   <div>
 *     <TimePicker
 *       hintText="Custom Labels"
 *       okLabel="确定"
 *       cancelLabel="取消"
 *     />
 *   </div>
 * );
 * 
 * export default TimePickerInternational;
 * 
 * 
 * @example 
 * 
 * // The number of minutes on each step can be configured using the minutesStep property.
 * 
 * import React from 'react';
 * import TimePicker from 'material-ui/TimePicker';
 * 
 * const TimePickerExampleStep = () => (
 *   <div>
 *     <TimePicker
 *       hintText="5 minutes step"
 *       minutesStep={5}
 *     />
 *     <TimePicker
 *       hintText="10 minutes step"
 *       minutesStep={10}
 *     />
 *   </div>
 * );
 * 
 * export default TimePickerExampleStep;
 * 
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimePickerDialog from './TimePickerDialog';
import TextField from '../TextField';
import {formatTime} from './timeUtils';

const emptyTime = new Date();
emptyTime.setHours(0);
emptyTime.setMinutes(0);
emptyTime.setSeconds(0);
emptyTime.setMilliseconds(0);

class TimePicker extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} autoOk - If true, automatically accept and close the picker on set minutes.
     */
    autoOk: PropTypes.bool,
    /**
     * @property {PropTypes.node} cancelLabel - Override the label of the 'Cancel' button.
     */
    cancelLabel: PropTypes.node,
    /**
     * @property {PropTypes.object} defaultTime - The initial time value of the TimePicker.
     */
    defaultTime: PropTypes.object,
    /**
     * @property {PropTypes.object} dialogBodyStyle - Override the inline-styles of TimePickerDialog's body element.
     */
    dialogBodyStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} dialogStyle - Override the inline-styles of TimePickerDialog's root element.
     */
    dialogStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} disabled - If true, the TimePicker is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * @property {'ampm'|'24hr'} format - Tells the component to display the picker in `ampm` (12hr) format or `24hr` format.
     */
    format: PropTypes.oneOf(['ampm', '24hr']),
    /**
     * @property {PropTypes.number} minutesStep - How many minutes should be added/subtracted when moving the clock pointer.
     */
    minutesStep: PropTypes.number,
    /**
     * @property {PropTypes.node} okLabel - Override the label of the 'OK' button.
     */
    okLabel: PropTypes.node,
    /**
     * @property {PropTypes.func} onChange - Callback function that is fired when the time value changes. The time value is passed in a Date Object.
     * Since there is no particular event associated with the change the first argument will always be null
     * and the second argument will be the new Date instance.
     */
    onChange: PropTypes.func,
    /**
     * @property {PropTypes.func} onClick - Callback function fired when the TimePicker is tapped or clicked.
     */
    onClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onDismiss - Callback function fired when the TimePicker dialog is dismissed.
     */
    onDismiss: PropTypes.func,
    /**
     * @property {PropTypes.func} onFocus - Callback function fired when the TimePicker `TextField` gains focus.
     */
    onFocus: PropTypes.func,
    /**
     * @property {PropTypes.func} onShow - Callback function fired when the TimePicker dialog is shown.
     */
    onShow: PropTypes.func,
    /**
     * @property {PropTypes.bool} pedantic - If true, uses ("noon" / "midnight") instead of ("12 a.m." / "12 p.m.").
     *
     * It's technically more correct to refer to "12 noon" and "12 midnight" rather than "12 a.m." and "12 p.m."
     * and it avoids confusion between different locales. By default (for compatibility reasons) TimePicker uses
     * ("12 a.m." / "12 p.m.").
     */
    pedantic: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.object} textFieldStyle - Override the inline-styles of TimePicker's TextField element.
     */
    textFieldStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} value - Sets the time for the Time Picker programmatically.
     */
    value: PropTypes.object,
  };

  static defaultProps = {
    autoOk: false,
    cancelLabel: 'Cancel',
    defaultTime: null,
    disabled: false,
    format: 'ampm',
    okLabel: 'OK',
    pedantic: false,
    style: {},
    value: null,
    minutesStep: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    time: null,
    dialogTime: new Date(),
  };

  componentWillMount() {
    this.setState({
      time: this.isControlled() ? this.getControlledTime() : this.props.defaultTime,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        time: this.getControlledTime(nextProps),
      });
    }
  }

  /**
   * Alias for `openDialog()` for an api consistent with TextField.
   */
  focus() {
    this.openDialog();
  }

  openDialog() {
    this.setState({
      dialogTime: this.state.time,
    });
    this.refs.dialogWindow.show();
  }

  handleAcceptDialog = (time) => {
    this.setState({
      time: time,
    });
    if (this.props.onChange) this.props.onChange(null, time);
  };

  handleFocusInput = (event) => {
    event.target.blur();
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleTouchTapInput = (event) => {
    event.preventDefault();

    if (!this.props.disabled) {
      this.openDialog();
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  isControlled() {
    return this.props.value !== null;
  }

  getControlledTime(props = this.props) {
    let result = null;
    if (props.value instanceof Date) {
      result = props.value;
    }
    return result;
  }

  render() {
    const {
      autoOk,
      cancelLabel,
      defaultTime, // eslint-disable-line no-unused-vars
      dialogBodyStyle,
      dialogStyle,
      format,
      okLabel,
      onFocus, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      onShow,
      onDismiss,
      pedantic,
      style,
      textFieldStyle,
      minutesStep,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const {time} = this.state;

    return (
      <div style={prepareStyles(Object.assign({}, style))}>
        <TextField
          {...other}
          style={textFieldStyle}
          ref="input"
          value={time === emptyTime ? null : formatTime(time, format, pedantic)}
          onFocus={this.handleFocusInput}
          onClick={this.handleTouchTapInput}
        />
        <TimePickerDialog
          ref="dialogWindow"
          bodyStyle={dialogBodyStyle}
          initialTime={this.state.dialogTime}
          onAccept={this.handleAcceptDialog}
          onShow={onShow}
          onDismiss={onDismiss}
          format={format}
          okLabel={okLabel}
          cancelLabel={cancelLabel}
          autoOk={autoOk}
          style={dialogStyle}
          minutesStep={minutesStep}
        />
      </div>
    );
  }
}

export default TimePicker;
