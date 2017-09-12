import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import DropDownMenu from '../DropDownMenu';

function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4,
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 8 : 0,
    },
    hideDropDownUnderline: {
      borderTop: 'none',
    },
    dropDownMenu: {
      display: 'block',
    },
  };
}

/**
 * 
 * @description 
 * SelectField is implemented as a controlled component, with the current selection set through the value property.
 * To learn more about SelectField please visit the specifications here: https://material.io/guidelines/components/menus.html#menus-usage.
 * 
 * 
 * @example 
 * // SelectField is implemented as a controlled component, with the current selection set through the value property. The SelectField can be disabled with the disabled property.
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const styles = {
 *   customWidth: {
 *     width: 150,
 *   },
 * };
 * 
 * export default class SelectFieldExampleSimple extends Component {
 *   state = {
 *     value: 1,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <SelectField
 *           floatingLabelText="Frequency"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *         >
 *           <MenuItem value={1} primaryText="Never" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </SelectField>
 *         <br />
 *         <SelectField floatingLabelText="Frequency" value={1} disabled={true}>
 *           <MenuItem value={1} primaryText="Disabled" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           floatingLabelText="Frequency"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           style={styles.customWidth}
 *         >
 *           <MenuItem value={1} primaryText="Custom width" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           floatingLabelText="Frequency"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           autoWidth={true}
 *         >
 *           <MenuItem value={1} primaryText="Auto width" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // SelectField can also be nullable. In this case, just specify a MenuItem with no text and with a null value. For instance, for a boolean:
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class SelectFieldExampleNullable extends Component {
 *   state = {
 *     value: null,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <SelectField
 *           floatingLabelText="Ready?"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *         >
 *           <MenuItem value={null} primaryText="" />
 *           <MenuItem value={false} primaryText="No" />
 *           <MenuItem value={true} primaryText="Yes" />
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // With the `maxHeight` property set, the Select Field will be scrollable
 * // if the number of items causes the height to exceed this limit.
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [];
 * for (let i = 0; i < 100; i++ ) {
 *   items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
 * }
 * 
 * export default class DropDownMenuLongMenuExample extends Component {
 *   state = {
 *     value: 10,
 *   };
 * 
 *   handleChange = (event, index, value) => {
 *     this.setState({value});
 *   };
 * 
 *   render() {
 *     return (
 *       <SelectField
 *         value={this.state.value}
 *         onChange={this.handleChange}
 *         maxHeight={200}
 *       >
 *         {items}
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // With a `label` applied to each `MenuItem`, `SelectField` displays a complementary description of the selected item.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class SelectFieldExampleCustomLabel extends Component {
 *   state = {
 *     value: 1,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <SelectField value={this.state.value} onChange={this.handleChange}>
 *         <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
 *         <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
 *         <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
 *         <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // Floating label example
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [
 *   <MenuItem key={1} value={1} primaryText="Never" />,
 *   <MenuItem key={2} value={2} primaryText="Every Night" />,
 *   <MenuItem key={3} value={3} primaryText="Weeknights" />,
 *   <MenuItem key={4} value={4} primaryText="Weekends" />,
 *   <MenuItem key={5} value={5} primaryText="Weekly" />,
 * ];
 * 
 * export default class SelectFieldExampleFloatingLabel extends Component {
 *   state = {
 *     value: null,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <SelectField
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           floatingLabelText="Floating Label Text"
 *         >
 *           {items}
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           floatingLabelText="Floating Label Text"
 *           floatingLabelFixed={true}
 *           hintText="Hint text"
 *         >
 *           {items}
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           floatingLabelText="Styled Floating Label Text"
 *           floatingLabelStyle={{color: 'red'}}
 *         >
 *           {items}
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The `errorText` property displays an error message below the Select Field.
 * // This can be customised with the `errorStyle` property.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [
 *   <MenuItem key={1} value={1} primaryText="Never" />,
 *   <MenuItem key={2} value={2} primaryText="Every Night" />,
 *   <MenuItem key={3} value={3} primaryText="Weeknights" />,
 *   <MenuItem key={4} value={4} primaryText="Weekends" />,
 *   <MenuItem key={5} value={5} primaryText="Weekly" />,
 * ];
 * 
 * export default class SelectFieldExampleError extends Component {
 *   state = {
 *     value: null,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     const {value} = this.state;
 *     const night = value === 2 || value === 3;
 * 
 *     return (
 *       <div>
 *         <SelectField
 *           value={value}
 *           onChange={this.handleChange}
 *           errorText={!night && 'Should be Night'}
 *         >
 *           {items}
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           value={value}
 *           onChange={this.handleChange}
 *           errorText={night && 'Should not be Night (Custom error style)'}
 *           errorStyle={{color: 'orange'}}
 *         >
 *           {items}
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const names = [
 *   'Oliver Hansen',
 *   'Van Henry',
 *   'April Tucker',
 *   'Ralph Hubbard',
 *   'Omar Alexander',
 *   'Carlos Abbott',
 *   'Miriam Wagner',
 *   'Bradley Wilkerson',
 *   'Virginia Andrews',
 *   'Kelly Snyder',
 * ];
 * 
 * export default class SelectFieldExampleMultiSelect extends Component {
 *   state = {
 *     values: [],
 *   };
 * 
 *   handleChange = (event, index, values) => this.setState({values});
 * 
 *   menuItems(values) {
 *     return names.map((name) => (
 *       <MenuItem
 *         key={name}
 *         insetChildren={true}
 *         checked={values && values.indexOf(name) > -1}
 *         value={name}
 *         primaryText={name}
 *       />
 *     ));
 *   }
 * 
 *   render() {
 *     const {values} = this.state;
 *     return (
 *       <SelectField
 *         multiple={true}
 *         hintText="Select a name"
 *         value={values}
 *         onChange={this.handleChange}
 *       >
 *         {this.menuItems(values)}
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The rendering of selected items can be customized by providing a `selectionRenderer`.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const persons = [
 *   {value: 0, name: 'Oliver Hansen'},
 *   {value: 1, name: 'Van Henry'},
 *   {value: 2, name: 'April Tucker'},
 *   {value: 3, name: 'Ralph Hubbard'},
 *   {value: 4, name: 'Omar Alexander'},
 *   {value: 5, name: 'Carlos Abbott'},
 *   {value: 6, name: 'Miriam Wagner'},
 *   {value: 7, name: 'Bradley Wilkerson'},
 *   {value: 8, name: 'Virginia Andrews'},
 *   {value: 9, name: 'Kelly Snyder'},
 * ];
 * 
 * export default class SelectFieldExampleSelectionRenderer extends Component {
 *   state = {
 *     values: [],
 *   };
 * 
 *   handleChange = (event, index, values) => this.setState({values});
 * 
 *   selectionRenderer = (values) => {
 *     switch (values.length) {
 *       case 0:
 *         return '';
 *       case 1:
 *         return persons[values[0]].name;
 *       default:
 *         return `${values.length} names selected`;
 *     }
 *   }
 * 
 *   menuItems(persons) {
 *     return persons.map((person) => (
 *       <MenuItem
 *         key={person.value}
 *         insetChildren={true}
 *         checked={this.state.values.indexOf(person.value) > -1}
 *         value={person.value}
 *         primaryText={person.name}
 *       />
 *     ));
 *   }
 * 
 *   render() {
 *     return (
 *       <SelectField
 *         multiple={true}
 *         hintText="Select a name"
 *         value={this.state.values}
 *         onChange={this.handleChange}
 *         selectionRenderer={this.selectionRenderer}
 *       >
 *         {this.menuItems(persons)}
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 */

class SelectField extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} autoWidth - If true, the width will automatically be set according to the
     * items inside the menu.
     * To control the width in CSS instead, leave this prop set to `false`.
     */
    autoWidth: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - The `MenuItem` elements to populate the select field with.
     * If the menu items have a `label` prop, that value will
     * represent the selected menu item in the rendered select field.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.bool} disabled - If true, the select field will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * @property {PropTypes.object} dropDownMenuProps - Object that can handle and override any property of component DropDownMenu.
     */
    dropDownMenuProps: PropTypes.object,
    /**
     * @property {PropTypes.object} errorStyle - Override the inline-styles of the error element.
     */
    errorStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} errorText - The error content to display.
     */
    errorText: PropTypes.node,
    /**
     * @property {PropTypes.bool} floatingLabelFixed - If true, the floating label will float even when no value is selected.
     */
    floatingLabelFixed: PropTypes.bool,
    /**
     * @property {PropTypes.object} floatingLabelStyle - Override the inline-styles of the floating label.
     */
    floatingLabelStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} floatingLabelText - The content of the floating label.
     */
    floatingLabelText: PropTypes.node,
    /**
     * @property {PropTypes.bool} fullWidth - If true, the select field will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * @property {PropTypes.object} hintStyle - Override the inline-styles of the hint element.
     */
    hintStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} hintText - The hint content to display.
     */
    hintText: PropTypes.node,
    /**
     * @property {PropTypes.object} iconStyle - Override the inline-styles of the icon element.
     */
    iconStyle: PropTypes.object,
    /**
     * @property {PropTypes.string} id - The id prop for the text field.
     */
    id: PropTypes.string,
    /**
     * @property {PropTypes.object} labelStyle - Override the label style when the select field is inactive.
     */
    labelStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} listStyle - Override the inline-styles of the underlying `List` element.
     */
    listStyle: PropTypes.object,
    /**
     * @property {PropTypes.number} maxHeight - Override the default max-height of the underlying `DropDownMenu` element.
     */
    maxHeight: PropTypes.number,
    /**
     * @property {PropTypes.object} menuItemStyle - Override the inline-styles of menu items.
     */
    menuItemStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} menuStyle - Override the inline-styles of the underlying `DropDownMenu` element.
     */
    menuStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} multiple - If true, `value` must be an array and the menu will support
     * multiple selections.
     */
    multiple: PropTypes.bool,
    /** @ignore */
    onBlur: PropTypes.func,
    /**
     * @property {PropTypes.func} onChange - Callback function fired when a menu item is selected.
     *
     * @param {object} event TouchTap event targeting the menu item
     * that was selected.
     * @param {number} key The index of the selected menu item, or undefined
     * if `multiple` is true.
     * @param {any} payload If `multiple` is true, the menu's `value`
     * array with either the menu item's `value` added (if
     * it wasn't already selected) or omitted (if it was already selected).
     * Otherwise, the `value` of the menu item.
     */
    onChange: PropTypes.func,
    /** @ignore */
    onFocus: PropTypes.func,
    /**
     * @property {PropTypes.object} selectedMenuItemStyle - Override the inline-styles of selected menu items.
     */
    selectedMenuItemStyle: PropTypes.object,
    /**
     * @property {PropTypes.func} selectionRenderer - Customize the rendering of the selected item.
     *
     * @param {any} value If `multiple` is true, the menu's `value`
     * array with either the menu item's `value` added (if
     * it wasn't already selected) or omitted (if it was already selected).
     * Otherwise, the `value` of the menu item.
     * @param {any} menuItem The selected `MenuItem`.
     * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
     */
    selectionRenderer: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.object} underlineDisabledStyle - Override the inline-styles of the underline element when the select
     * field is disabled.
     */
    underlineDisabledStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} underlineFocusStyle - Override the inline-styles of the underline element when the select field
     * is focused.
     */
    underlineFocusStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} underlineStyle - Override the inline-styles of the underline element.
     */
    underlineStyle: PropTypes.object,
    /**
     * @property {PropTypes.any} value - If `multiple` is true, an array of the `value`s of the selected
     * menu items. Otherwise, the `value` of the selected menu item.
     * If provided, the menu will be a controlled component.
     */
    value: PropTypes.any,
  };

  static defaultProps = {
    autoWidth: false,
    disabled: false,
    fullWidth: false,
    multiple: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      autoWidth,
      multiple,
      children,
      style,
      labelStyle,
      iconStyle,
      id,
      underlineDisabledStyle,
      underlineFocusStyle,
      menuItemStyle,
      selectedMenuItemStyle,
      underlineStyle,
      dropDownMenuProps,
      errorStyle,
      disabled,
      floatingLabelFixed,
      floatingLabelText,
      floatingLabelStyle,
      hintStyle,
      hintText,
      fullWidth,
      errorText,
      listStyle,
      maxHeight,
      menuStyle,
      onFocus,
      onBlur,
      onChange,
      selectionRenderer,
      value,
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context);

    return (
      <TextField
        {...other}
        style={style}
        disabled={disabled}
        floatingLabelFixed={floatingLabelFixed}
        floatingLabelText={floatingLabelText}
        floatingLabelStyle={floatingLabelStyle}
        hintStyle={hintStyle}
        hintText={(!hintText && !floatingLabelText) ? ' ' : hintText}
        fullWidth={fullWidth}
        errorText={errorText}
        underlineStyle={underlineStyle}
        errorStyle={errorStyle}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
        underlineDisabledStyle={underlineDisabledStyle}
        underlineFocusStyle={underlineFocusStyle}
      >
        <DropDownMenu
          disabled={disabled}
          style={Object.assign(styles.dropDownMenu, menuStyle)}
          labelStyle={Object.assign(styles.label, labelStyle)}
          iconStyle={Object.assign(styles.icon, iconStyle)}
          menuItemStyle={menuItemStyle}
          selectedMenuItemStyle={selectedMenuItemStyle}
          underlineStyle={styles.hideDropDownUnderline}
          listStyle={listStyle}
          autoWidth={autoWidth}
          value={value}
          onChange={onChange}
          maxHeight={maxHeight}
          multiple={multiple}
          selectionRenderer={selectionRenderer}
          {...dropDownMenuProps}
        >
          {children}
        </DropDownMenu>
      </TextField>
    );
  }
}

export default SelectField;
