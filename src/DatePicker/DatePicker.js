import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {dateTimeFormat, formatIso, isEqualDate} from './dateUtils';
import DatePickerDialog from './DatePickerDialog';
import TextField from '../TextField';

/**
 * @description Date Pickers are used to select a single date for an input.
 * Also see https://www.google.com/design/spec/components/pickers.html#pickers-date-pickers
 * 
 * @example 
 * 
 * // The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * // You can also disable the Dialog passing `true` to the `disabled` property.
 * // To display the year selection first, set the `openToYearSelection` property to `true`.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * const DatePickerExampleSimple = () => (
 *   <div>
 *     <DatePicker hintText="Portrait Dialog" />
 *     <DatePicker hintText="Landscape Dialog" mode="landscape" />
 *     <DatePicker hintText="Dialog Disabled" disabled={true} />
 *     <DatePicker hintText="Open to Year" openToYearSelection={true} />
 *   </div>
 * );
 * 
 * export default DatePickerExampleSimple;
 * 
 * 
 * @example 
 * // Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * const DatePickerExampleInline = () => (
 *   <div>
 *     <DatePicker hintText="Portrait Inline Dialog" container="inline" />
 *     <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
 *   </div>
 * );
 * 
 * export default DatePickerExampleInline;
 * 
 * 
 * @example 
 * //This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * import Toggle from 'material-ui/Toggle';
 * 
 * const optionsStyle = {
 *   maxWidth: 255,
 *   marginRight: 'auto',
 * };
 * 
 * export default class DatePickerExampleToggle extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     const minDate = new Date();
 *     const maxDate = new Date();
 *     minDate.setFullYear(minDate.getFullYear() - 1);
 *     minDate.setHours(0, 0, 0, 0);
 *     maxDate.setFullYear(maxDate.getFullYear() + 1);
 *     maxDate.setHours(0, 0, 0, 0);
 * 
 *     this.state = {
 *       minDate: minDate,
 *       maxDate: maxDate,
 *       autoOk: false,
 *       disableYearSelection: false,
 *     };
 *   }
 * 
 *   handleChangeMinDate = (event, date) => {
 *     this.setState({
 *       minDate: date,
 *     });
 *   };
 * 
 *   handleChangeMaxDate = (event, date) => {
 *     this.setState({
 *       maxDate: date,
 *     });
 *   };
 * 
 *   handleToggle = (event, toggled) => {
 *     this.setState({
 *       [event.target.name]: toggled,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <DatePicker
 *           floatingLabelText="Ranged Date Picker"
 *           autoOk={this.state.autoOk}
 *           minDate={this.state.minDate}
 *           maxDate={this.state.maxDate}
 *           disableYearSelection={this.state.disableYearSelection}
 *         />
 *         <div style={optionsStyle}>
 *           <DatePicker
 *             onChange={this.handleChangeMinDate}
 *             autoOk={this.state.autoOk}
 *             floatingLabelText="Min Date"
 *             defaultDate={this.state.minDate}
 *             disableYearSelection={this.state.disableYearSelection}
 *           />
 *           <DatePicker
 *             onChange={this.handleChangeMaxDate}
 *             autoOk={this.state.autoOk}
 *             floatingLabelText="Max Date"
 *             defaultDate={this.state.maxDate}
 *             disableYearSelection={this.state.disableYearSelection}
 *           />
 *           <Toggle
 *             name="autoOk"
 *             value="autoOk"
 *             label="Auto Ok"
 *             toggled={this.state.autoOk}
 *             onToggle={this.handleToggle}
 *           />
 *           <Toggle
 *             name="disableYearSelection"
 *             value="disableYearSelection"
 *             label="Disable Year Selection"
 *             toggled={this.state.disableYearSelection}
 *             onToggle={this.handleToggle}
 *           />
 *         </div>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // `DatePicker` can be implemented as a controlled input, where `value` is handled by state in the parent component.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * export default class DatePickerExampleControlled extends React.Component {
 *   
 *     constructor(props) {
 *       super(props);
 *   
 *       this.state = {
 *         controlledDate: null,
 *       };
 *     }
 *   
 *     handleChange = (event, date) => {
 *       this.setState({
 *         controlledDate: date,
 *       });
 *     };
 *   
 *     render() {
 *       return (
 *         <DatePicker
 *           hintText="Controlled Date Input"
 *           value={this.state.controlledDate}
 *           onChange={this.handleChange}
 *         />
 *       );
 *     }
 *   }
 * 
 * 
 * @example 
 * // `DatePicker` can disable specific dates based on the return value of a callback.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * function disableWeekends(date) {
 *   return date.getDay() === 0 || date.getDay() === 6;
 * }
 * 
 * function disableRandomDates() {
 *   return Math.random() > 0.7;
 * }
 * 
 * const DatePickerExampleDisableDates = () => (
 *   <div>
 *     <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends} />
 *     <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates} />
 *   </div>
 * );
 * 
 * export default DatePickerExampleDisableDates;
 * 
 * 
 * @example 
 * // `DatePicker` can be localised using the `locale` property. The first example is localised in French.
 * // Note that the buttons must be separately localised using the `cancelLabel` and `okLabel` properties.
 *
 * //The second example shows `firstDayOfWeek` set to `0`, (Sunday), and `locale` to `en-US` which matches the
 * //behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require `DateTimeFormat` to be supplied.
 *
 * // The final example displays the resulting date in a custom format using the `formatDate` property.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * import areIntlLocalesSupported from 'intl-locales-supported';
 * import persianUtils from 'material-ui-persian-date-picker-utils';
 * 
 * let DateTimeFormat;
 * 
 * // Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 * if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
 *   DateTimeFormat = global.Intl.DateTimeFormat;
 * } else {
 *   const IntlPolyfill = require('intl');
 *   DateTimeFormat = IntlPolyfill.DateTimeFormat;
 *   require('intl/locale-data/jsonp/fr');
 *   require('intl/locale-data/jsonp/fa-IR');
 * }
 * 
 * const DatePickerExampleInternational = () => (
 *   <div>
 *     <DatePicker
 *       hintText="fr locale"
 *       DateTimeFormat={DateTimeFormat}
 *       okLabel="OK"
 *       cancelLabel="Annuler"
 *       locale="fr"
 *     />
 *     <DatePicker
 *       hintText="fa-IR locale"
 *       DateTimeFormat={DateTimeFormat}
 *       okLabel="تایید"
 *       cancelLabel="لغو"
 *       locale="fa-IR"
 *       firstDayOfWeek={6}
 *       utils={persianUtils}
 *     />
 *     <DatePicker
 *       hintText="en-US locale"
 *       locale="en-US"
 *       firstDayOfWeek={0}
 *     />
 *     <DatePicker
 *       hintText="Custom date format"
 *       firstDayOfWeek={0}
 *       formatDate={new DateTimeFormat('en-US', {
 *         day: 'numeric',
 *         month: 'long',
 *         year: 'numeric',
 *       }).format}
 *     />
 *   </div>
 * );
 * 
 * export default DatePickerExampleInternational;
 * 
 */
class DatePicker extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.func} DateTimeFormat - Constructor for date formatting for the specified `locale`.
     * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
     * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
     * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
     *
     * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
     */
    DateTimeFormat: PropTypes.func,
    /**
     * @property {PropTypes.bool} autoOk - If true, automatically accept and close the picker on select a date.
     */
    autoOk: PropTypes.bool,
    /**
     * @property {PropTypes.node} cancelLabel - Override the default text of the 'Cancel' button.
     */
    cancelLabel: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {dialog|inline} container - Used to control how the Date Picker will be displayed when the input field is focused.
     * `dialog` (default) displays the DatePicker as a dialog with a modal.
     * `inline` displays the DatePicker below the input field (similar to auto complete).
     */
    container: PropTypes.oneOf(['dialog', 'inline']),
    /**
     * @property {PropTypes.object} defaultDate - This is the initial date value of the component.
     * If either `value` or `valueLink` is provided they will override this
     * prop with `value` taking precedence.
     */
    defaultDate: PropTypes.object,
    /**
     * @property {PropTypes.object} dialogContainerStyle - Override the inline-styles of DatePickerDialog's Container element.
     */
    dialogContainerStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} disableYearSelection - Disables the year selection in the date picker.
     */
    disableYearSelection: PropTypes.bool,
    /**
     * @property {PropTypes.bool} disabled - Disables the DatePicker.
     */
    disabled: PropTypes.bool,
    /**
     * @property {PropTypes.number} firstDayOfWeek - Used to change the first day of week. It varies from
     * Saturday to Monday between different locales.
     * The allowed range is 0 (Sunday) to 6 (Saturday).
     * The default is `1`, Monday, as per ISO 8601.
     */
    firstDayOfWeek: PropTypes.number,
    /**
     * @property {PropTypes.func} formatDate - This function is called to format the date displayed in the input field, and should return a string.
     * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
     *
     * @param {object} date Date object to be formatted.
     * @returns {any} The formatted date.
     */
    formatDate: PropTypes.func,
    /**
     * @property {PropTypes.bool} hideCalendarDate - Hide date display
     */
    hideCalendarDate: PropTypes.bool,
    /**
     * @property {PropTypes.string} locale - Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
     * must provide a `DateTimeFormat` that supports the chosen `locale`.
     */
    locale: PropTypes.string,
    /**
     * @property {PropTypes.object} maxDate - The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years.
     */
    maxDate: PropTypes.object,
    /**
     * @property {PropTypes.object} minDate - The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years.
     */
    minDate: PropTypes.object,
    /**
     * @property {portrait|landscape} mode - Tells the component to display the picker in portrait or landscape mode.
     */
    mode: PropTypes.oneOf(['portrait', 'landscape']),
    /**
     * @property {PropTypes.node} okLabel - Override the default text of the 'OK' button.
     */
    okLabel: PropTypes.node,
    /**
     * @property {PropTypes.func} onChange - Callback function that is fired when the date value changes.
     *
     * @param {null} null Since there is no particular event associated with the change,
     * the first argument will always be null.
     * @param {object} date The new date.
     */
    onChange: PropTypes.func,
    /**
     * @property {PropTypes.func} onClick - Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
     *
     * @param {object} event TouchTap event targeting the `TextField`.
     */
    onClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onDismiss - Callback function that is fired when the Date Picker's dialog is dismissed.
     */
    onDismiss: PropTypes.func,
    /**
     * @property {PropTypes.func} onFocus - Callback function that is fired when the Date Picker's `TextField` gains focus.
     */
    onFocus: PropTypes.func,
    /**
     * @property {PropTypes.func} onShow - Callback function that is fired when the Date Picker's dialog is shown.
     */
    onShow: PropTypes.func,
    /**
     * @property {PropTypes.func} onTouchTap - Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
     *
     * @param {object} event TouchTap event targeting the `TextField`.
     */
    onTouchTap: PropTypes.func,
    /**
     * @property {PropTypes.func} shouldDisableDate - Callback function used to determine if a day's entry should be disabled on the calendar.
     *
     * @param {object} day Date object of a day.
     * @returns {boolean} Indicates whether the day should be disabled.
     */
    shouldDisableDate: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.object} textFieldStyle - Override the inline-styles of DatePicker's TextField element.
     */
    textFieldStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} utils - This object should contain methods needed to build the calendar system.
     *
     * Useful for building a custom calendar system. Refer to the
     * [source code](https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js)
     * and an [example implementation](https://github.com/alitaheri/material-ui-persian-date-picker-utils)
     * for more information.
     */
    utils: PropTypes.object,
    /**
     * @property {PropTypes.object} value - Sets the date for the Date Picker programmatically.
     */
    value: PropTypes.object,
  };

  static defaultProps = {
    autoOk: false,
    container: 'dialog',
    disabled: false,
    disableYearSelection: false,
    firstDayOfWeek: 1,
    hideCalendarDate: false,
    style: {},
    openToYearSelection: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    date: undefined,
  };

  componentWillMount() {
    this.setState({
      date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.isControlled()) {
      const newDate = this.getControlledDate(nextProps);
      if (!isEqualDate(this.state.date, newDate)) {
        this.setState({
          date: newDate,
        });
      }
    }
  }

  getDate() {
    return this.state.date;
  }

  /**
   * Open the date-picker dialog programmatically from a parent.
   */
  openDialog() {
    /**
     * if the date is not selected then set it to new date
     * (get the current system date while doing so)
     * else set it to the currently selected date
     */
    if (this.state.date !== undefined) {
      this.setState({
        dialogDate: this.getDate(),
      }, this.refs.dialogWindow.show);
    } else {
      this.setState({
        dialogDate: new Date(),
      }, this.refs.dialogWindow.show);
    }
  }

  /**
   * Alias for `openDialog()` for an api consistent with TextField.
   */
  focus() {
    this.openDialog();
  }

  handleAccept = (date) => {
    if (!this.isControlled()) {
      this.setState({
        date: date,
      });
    }
    if (this.props.onChange) {
      this.props.onChange(null, date);
    }
  };

  handleFocus = (event) => {
    event.target.blur();
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleTouchTap = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (!this.props.disabled) {
      setTimeout(() => {
        this.openDialog();
      }, 0);
    }
  };

  isControlled() {
    return this.props.hasOwnProperty('value');
  }

  getControlledDate(props = this.props) {
    if (props.value instanceof Date) {
      return props.value;
    }
  }

  formatDate = (date) => {
    if (this.props.locale) {
      const DateTimeFormat = this.props.DateTimeFormat || dateTimeFormat;
      return new DateTimeFormat(this.props.locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }).format(date);
    } else {
      return formatIso(date);
    }
  };

  render() {
    const {
      DateTimeFormat,
      autoOk,
      cancelLabel,
      className,
      container,
      defaultDate, // eslint-disable-line no-unused-vars
      dialogContainerStyle,
      disableYearSelection,
      firstDayOfWeek,
      formatDate: formatDateProp,
      locale,
      maxDate,
      minDate,
      mode,
      okLabel,
      onDismiss,
      onFocus, // eslint-disable-line no-unused-vars
      onShow,
      onClick, // eslint-disable-line no-unused-vars
      openToYearSelection,
      shouldDisableDate,
      hideCalendarDate,
      style,
      textFieldStyle,
      utils,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const formatDate = formatDateProp || this.formatDate;

    return (
      <div className={className} style={prepareStyles(Object.assign({}, style))}>
        <TextField
          {...other}
          onFocus={this.handleFocus}
          onClick={this.handleTouchTap}
          ref="input"
          style={textFieldStyle}
          value={this.state.date ? formatDate(this.state.date) : ''}
        />
        <DatePickerDialog
          DateTimeFormat={DateTimeFormat}
          autoOk={autoOk}
          cancelLabel={cancelLabel}
          container={container}
          containerStyle={dialogContainerStyle}
          disableYearSelection={disableYearSelection}
          firstDayOfWeek={firstDayOfWeek}
          initialDate={this.state.dialogDate}
          locale={locale}
          maxDate={maxDate}
          minDate={minDate}
          mode={mode}
          okLabel={okLabel}
          onAccept={this.handleAccept}
          onShow={onShow}
          onDismiss={onDismiss}
          ref="dialogWindow"
          shouldDisableDate={shouldDisableDate}
          hideCalendarDate={hideCalendarDate}
          openToYearSelection={openToYearSelection}
          utils={utils}
        />
      </div>
    );
  }
}

export default DatePicker;
