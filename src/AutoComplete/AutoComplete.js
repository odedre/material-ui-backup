/**
 * @description React Auto-complete is an extension of a regular text-field that will auto-complete the input dynamically.
 * It can take different auto-complete filters and uses a menu to display suggestions.
 * More information at [material-ui.com](http://www.material-ui.com/#/components/auto-complete)
 * 
 * 
 * 
 * @example
 * 
 * // The input is used to create the `dataSource`, so the input always matches three entries.
 * 
 * import React, {Component} from 'react';
 * import AutoComplete from 'material-ui/AutoComplete';
 * 
 * export default class AutoCompleteExampleSimple extends Component {
 *   state = {
 *     dataSource: [],
 *   };
 * 
 *   handleUpdateInput = (value) => {
 *     this.setState({
 *       dataSource: [
 *         value,
 *         value + value,
 *         value + value + value,
 *       ],
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <AutoComplete
 *           hintText="Type anything"
 *           dataSource={this.state.dataSource}
 *           onUpdateInput={this.handleUpdateInput}
 *         />
 *         <AutoComplete
 *           hintText="Type anything"
 *           dataSource={this.state.dataSource}
 *           onUpdateInput={this.handleUpdateInput}
 *           floatingLabelText="Full width"
 *           fullWidth={true}
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
 * // The first example has `MenuItems` in its data source that display on data entry. The second example uses an array of values as its dataSource, and updates on focus. Both examples have filtering disabled.
 * 
 * import React from 'react';
 * import AutoComplete from 'material-ui/AutoComplete';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const dataSource1 = [
 *   {
 *     text: 'text-value1',
 *     value: (
 *       <MenuItem
 *         primaryText="text-value1"
 *         secondaryText="&#9786;"
 *       />
 *     ),
 *   },
 *   {
 *     text: 'text-value2',
 *     value: (
 *       <MenuItem
 *         primaryText="text-value2"
 *         secondaryText="&#9786;"
 *       />
 *     ),
 *   },
 * ];
 * 
 * const dataSource2 = ['12345', '23456', '34567'];
 * 
 * const dataSource3 = [
 *   {textKey: 'Some Text', valueKey: 'someFirstValue'},
 *   {textKey: 'Some Text', valueKey: 'someSecondValue'},
 * ];
 * const dataSourceConfig = {
 *   text: 'textKey',
 *   value: 'valueKey',
 * };
 * 
 * const AutoCompleteExampleDataSource = () => (
 *   <div>
 *     <AutoComplete
 *       hintText="text-value data"
 *       filter={AutoComplete.noFilter}
 *       dataSource={dataSource1}
 *     /><br />
 *     <AutoComplete
 *       floatingLabelText="showAllItems"
 *       filter={AutoComplete.noFilter}
 *       openOnFocus={true}
 *       dataSource={dataSource2}
 *     /><br />
 *     <AutoComplete
 *       floatingLabelText="Same text, different values"
 *       filter={AutoComplete.noFilter}
 *       openOnFocus={true}
 *       dataSource={dataSource3}
 *       dataSourceConfig={dataSourceConfig}
 *     />
 *   </div>
 * );
 * 
 * export default AutoCompleteExampleDataSource;
 * 
 * 
 * 
 * @example
 * 
 * // Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses fuzzyFilter, and limits the number of results displayed using the `maxSearchResults` property.
 * 
 * import React from 'react';
 * import AutoComplete from 'material-ui/AutoComplete';
 * 
 * const colors = [
 *   'Red',
 *   'Orange',
 *   'Yellow',
 *   'Green',
 *   'Blue',
 *   'Purple',
 *   'Black',
 *   'White',
 * ];
 * 
 * const fruit = [
 *   'Apple', 'Apricot', 'Avocado',
 *   'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
 *   'Boysenberry', 'Blood Orange',
 *   'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
 *   'Coconut', 'Cranberry', 'Clementine',
 *   'Damson', 'Date', 'Dragonfruit', 'Durian',
 *   'Elderberry',
 *   'Feijoa', 'Fig',
 *   'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
 *   'Honeydew', 'Huckleberry',
 *   'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
 *   'Kiwi fruit', 'Kumquat',
 *   'Lemon', 'Lime', 'Loquat', 'Lychee',
 *   'Nectarine',
 *   'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
 *   'Olive', 'Orange',
 *   'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
 *   'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
 *   'Quince',
 *   'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
 *   'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
 *   'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
 *   'Ugli fruit',
 *   'Watermelon',
 * ];
 * 
 * const AutoCompleteExampleFilters = () => (
 *   <div>
 *     <AutoComplete
 *       floatingLabelText="Type 'r', case insensitive"
 *       filter={AutoComplete.caseInsensitiveFilter}
 *       dataSource={colors}
 *     />
 *     <br />
 *     <AutoComplete
 *       floatingLabelText="Type 'peah', fuzzy search"
 *       filter={AutoComplete.fuzzyFilter}
 *       dataSource={fruit}
 *       maxSearchResults={5}
 *     />
 *   </div>
 * );
 * 
 * export default AutoCompleteExampleFilters;
 * 
 * 
 *
 * @example
 * 
 * // `AutoComplete` search text can be implemented as a controlled value, where `searchText` is handled by state in the parent component. This value is reset with the `onNewRequest` callback.
 * 
 * import React, {Component} from 'react';
 * import AutoComplete from 'material-ui/AutoComplete';
 * 
 * const colors = [
 *   'Red',
 *   'Orange',
 *   'Yellow',
 *   'Green',
 *   'Blue',
 *   'Purple',
 *   'Black',
 *   'White',
 * ];
 * 
 * export default class AutoCompleteExampleControlled extends Component {
 *   state = {
 *     searchText: '',
 *   };
 * 
 *   handleUpdateInput = (searchText) => {
 *     this.setState({
 *       searchText: searchText,
 *     });
 *   };
 * 
 *   handleNewRequest = () => {
 *     this.setState({
 *       searchText: '',
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <AutoComplete
 *           hintText="Type 'r', case insensitive"
 *           searchText={this.state.searchText}
 *           onUpdateInput={this.handleUpdateInput}
 *           onNewRequest={this.handleNewRequest}
 *           dataSource={colors}
 *           filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
 *           openOnFocus={true}
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
 * // Provide props to be passed into the Menu component.
 * 
 * import React, {Component} from 'react';
 * import AutoComplete from 'material-ui/AutoComplete';
 * 
 * const colors = [
 *   'Red',
 *   'Orange',
 *   'Yellow',
 *   'Green',
 *   'Blue',
 *   'Purple',
 *   'Black',
 *   'White',
 * ];
 * 
 * const menuProps = {
 *   desktop: true,
 *   disableAutoFocus: true,
 * };
 * 
 * export default class AutoCompleteExampleMenuProps extends Component {
 *   render() {
 *     return (
 *       <div>
 *         <AutoComplete
 *           hintText="Type anything"
 *           dataSource={colors}
 *           menuProps={menuProps}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import keycode from 'keycode';
import TextField from '../TextField';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Divider from '../Divider';
import Popover from '../Popover/Popover';
import propTypes from '../utils/propTypes';

function getStyles(props, context, state) {
  const {anchorEl} = state;
  const {fullWidth} = props;

  const styles = {
    root: {
      display: 'inline-block',
      position: 'relative',
      width: fullWidth ? '100%' : 256,
    },
    menu: {
      width: '100%',
    },
    list: {
      display: 'block',
      width: fullWidth ? '100%' : 256,
    },
    innerDiv: {
      overflow: 'hidden',
    },
  };

  if (anchorEl && fullWidth) {
    styles.popover = {
      width: anchorEl.clientWidth,
    };
  }

  return styles;
}

class AutoComplete extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.custom} anchorOrigin - Location of the anchor for the auto complete.
     */
    anchorOrigin: propTypes.origin,
    /**
     * @property {PropTypes.bool} animated - If true, the auto complete is animated as it is toggled.
     */
    animated: PropTypes.bool,
    /**
     * @property {PropTypes.func} animation - Override the default animation component used.
     */
    animation: PropTypes.func,
    /**
     * @property {PropTypes.array} dataSource - Array of strings or nodes used to populate the list.
     */
    dataSource: PropTypes.array.isRequired,
    /**
     * @property {PropTypes.object} dataSourceConfig - Config for objects list dataSource.
     *
     * @typedef {Object} dataSourceConfig
     *
     * @property {string} text `dataSource` element key used to find a string to be matched for search
     * and shown as a `TextField` input value after choosing the result.
     * @property {string} value `dataSource` element key used to find a string to be shown in search results.
     */
    dataSourceConfig: PropTypes.object,
    /**
     * @property {PropTypes.bool} disableFocusRipple - Disables focus ripple when true.
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * @property {PropTypes.object} errorStyle - Override style prop for error.
     */
    errorStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} errorText - The error content to display.
     */
    errorText: PropTypes.node,
    /**
     * @property {PropTypes.func} filter - Callback function used to filter the auto complete.
     *
     * @param {string} searchText The text to search for within `dataSource`.
     * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
     * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
     */
    filter: PropTypes.func,
    /**
     * @property {PropTypes.node} floatingLabelText - The content to use for adding floating label element.
     */
    floatingLabelText: PropTypes.node,
    /**
     * @property {PropTypes.bool} fullWidth - If true, the field receives the property `width: 100%`.
     */
    fullWidth: PropTypes.bool,
    /**
     * @property {PropTypes.node} hintText - The hint content to display.
     */
    hintText: PropTypes.node,
    /**
     * @property {PropTypes.object} listStyle - Override style for list.
     */
    listStyle: PropTypes.object,
    /**
     * @property {PropTypes.number} maxSearchResults - The max number of search results to be shown.
     * By default it shows all the items which matches filter.
     */
    maxSearchResults: PropTypes.number,
    /**
     * @property {PropTypes.number} menuCloseDelay - Delay for closing time of the menu.
     */
    menuCloseDelay: PropTypes.number,
    /**
     * @property {PropTypes.object} menuProps - Props to be passed to menu.
     */
    menuProps: PropTypes.object,
    /**
     * @property {PropTypes.object} menuStyle - Override style for menu.
     */
    menuStyle: PropTypes.object,
    /** @ignore */
    onBlur: PropTypes.func,
    /**
     * @property {PropTypes.func} onClose - Callback function fired when the menu is closed.
     */
    onClose: PropTypes.func,
    /** @ignore */
    onFocus: PropTypes.func,
    /** @ignore */
    onKeyDown: PropTypes.func,
    /**
     * @property {PropTypes.func} onNewRequest - Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
     *
     * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
     * or the text value of the corresponding list item that was selected.
     * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
     * `TextField`.
     */
    onNewRequest: PropTypes.func,
    /**
     * @property {PropTypes.func} onUpdateInput - Callback function that is fired when the user updates the `TextField`.
     *
     * @param {string} searchText The auto-complete's `searchText` value.
     * @param {array} dataSource The auto-complete's `dataSource` array.
     * @param {object} params Additional information linked the update.
     */
    onUpdateInput: PropTypes.func,
    /**
     * @property {PropTypes.bool} open - Auto complete menu is open if true.
     */
    open: PropTypes.bool,
    /**
     * @property {PropTypes.bool} openOnFocus - If true, the list item is showed when a focus event triggers.
     */
    openOnFocus: PropTypes.bool,
    /**
     * @property {PropTypes.object} popoverProps - Props to be passed to popover.
     */
    popoverProps: PropTypes.object,
    /**
     * @property {PropTypes.string} searchText - Text being input to auto complete.
     */
    searchText: PropTypes.string,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.origin} targetOrigin - Origin for location of target.
     */
    targetOrigin: propTypes.origin,
    /**
     * @property {PropTypes.object} textFieldStyle - Override the inline-styles of AutoComplete's TextField element.
     */
    textFieldStyle: PropTypes.object,
  };

  static defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    animated: true,
    dataSourceConfig: {
      text: 'text',
      value: 'value',
    },
    disableFocusRipple: true,
    filter: (searchText, key) => searchText !== '' && key.indexOf(searchText) !== -1,
    fullWidth: false,
    open: false,
    openOnFocus: false,
    onUpdateInput: () => {},
    onNewRequest: () => {},
    menuCloseDelay: 300,
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    anchorEl: null,
    focusTextField: true,
    open: false,
    searchText: undefined,
  };

  componentWillMount() {
    this.requestsList = [];
    this.setState({
      open: this.props.open,
      searchText: this.props.searchText || '',
    });
    this.timerTouchTapCloseId = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        searchText: nextProps.searchText,
      });
    }
    if (this.props.open !== nextProps.open) {
      this.setState({
        open: nextProps.open,
        anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerTouchTapCloseId);
    clearTimeout(this.timerBlurClose);
  }

  close() {
    this.setState({
      open: false,
      anchorEl: null,
    });

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleRequestClose = () => {
    // Only take into account the Popover clickAway when we are
    // not focusing the TextField.
    if (!this.state.focusTextField) {
      this.close();
    }
  };

  handleMouseDown = (event) => {
    // Keep the TextField focused
    event.preventDefault();
  };

  handleItemTouchTap = (event, child) => {
    const dataSource = this.props.dataSource;
    const index = parseInt(child.key, 10);
    const chosenRequest = dataSource[index];
    const searchText = this.chosenRequestText(chosenRequest);

    const updateInput = () => this.props.onUpdateInput(searchText, this.props.dataSource, {
      source: 'click',
    });
    this.timerTouchTapCloseId = () => setTimeout(() => {
      this.timerTouchTapCloseId = null;
      this.close();
      this.props.onNewRequest(chosenRequest, index);
    }, this.props.menuCloseDelay);

    if (typeof this.props.searchText !== 'undefined') {
      updateInput();
      this.timerTouchTapCloseId();
    } else {
      this.setState({
        searchText: searchText,
      }, () => {
        updateInput();
        this.timerTouchTapCloseId();
      });
    }
  };

  chosenRequestText = (chosenRequest) => {
    if (typeof chosenRequest === 'string') {
      return chosenRequest;
    } else {
      return chosenRequest[this.props.dataSourceConfig.text];
    }
  };

  handleEscKeyDown = () => {
    this.close();
  };

  handleKeyDown = (event) => {
    if (this.props.onKeyDown) this.props.onKeyDown(event);

    switch (keycode(event)) {
      case 'enter':
        this.close();
        const searchText = this.state.searchText;
        if (searchText !== '') {
          this.props.onNewRequest(searchText, -1);
        }
        break;

      case 'esc':
        this.close();
        break;

      case 'down':
        event.preventDefault();
        this.setState({
          open: true,
          focusTextField: false,
          anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
        });
        break;

      default:
        break;
    }
  };

  handleChange = (event) => {
    const searchText = event.target.value;

    // Make sure that we have a new searchText.
    // Fix an issue with a Cordova Webview
    if (searchText === this.state.searchText) {
      return;
    }

    this.setState({
      searchText: searchText,
      open: true,
      anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
    }, () => {
      this.props.onUpdateInput(searchText, this.props.dataSource, {
        source: 'change',
      });
    });
  };

  handleBlur = (event) => {
    if (this.state.focusTextField && this.timerTouchTapCloseId === null) {
      this.timerBlurClose = setTimeout(() => {
        this.close();
      }, 0);
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = (event) => {
    if (!this.state.open && this.props.openOnFocus) {
      this.setState({
        open: true,
        anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
      });
    }

    this.setState({
      focusTextField: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  blur() {
    this.refs.searchTextField.blur();
  }

  focus() {
    this.refs.searchTextField.focus();
  }

  render() {
    const {
      anchorOrigin,
      animated,
      animation,
      dataSource,
      dataSourceConfig, // eslint-disable-line no-unused-vars
      disableFocusRipple,
      errorStyle,
      floatingLabelText,
      filter,
      fullWidth,
      style,
      hintText,
      maxSearchResults,
      menuCloseDelay, // eslint-disable-line no-unused-vars
      textFieldStyle,
      menuStyle,
      menuProps,
      listStyle,
      targetOrigin,
      onBlur, // eslint-disable-line no-unused-vars
      onClose, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      onKeyDown, // eslint-disable-line no-unused-vars
      onNewRequest, // eslint-disable-line no-unused-vars
      onUpdateInput, // eslint-disable-line no-unused-vars
      openOnFocus, // eslint-disable-line no-unused-vars
      popoverProps,
      searchText: searchTextProp, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const {
      style: popoverStyle,
      ...popoverOther
    } = popoverProps || {};

    const {
      open,
      anchorEl,
      searchText,
      focusTextField,
    } = this.state;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    const requestsList = [];

    dataSource.every((item, index) => {
      switch (typeof item) {
        case 'string':
          if (filter(searchText, item, item)) {
            requestsList.push({
              text: item,
              value: (
                <MenuItem
                  innerDivStyle={styles.innerDiv}
                  value={item}
                  primaryText={item}
                  disableFocusRipple={disableFocusRipple}
                  key={index}
                />),
            });
          }
          break;

        case 'object':
          if (item && typeof item[this.props.dataSourceConfig.text] === 'string') {
            const itemText = item[this.props.dataSourceConfig.text];
            if (!this.props.filter(searchText, itemText, item)) break;

            const itemValue = item[this.props.dataSourceConfig.value];
            if (itemValue.type && (itemValue.type.muiName === MenuItem.muiName ||
               itemValue.type.muiName === Divider.muiName)) {
              requestsList.push({
                text: itemText,
                value: React.cloneElement(itemValue, {
                  key: index,
                  disableFocusRipple: disableFocusRipple,
                }),
              });
            } else {
              requestsList.push({
                text: itemText,
                value: (
                  <MenuItem
                    innerDivStyle={styles.innerDiv}
                    primaryText={itemText}
                    disableFocusRipple={disableFocusRipple}
                    key={index}
                  />),
              });
            }
          }
          break;

        default:
          // Do nothing
      }

      return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
    });

    this.requestsList = requestsList;

    const menu = open && requestsList.length > 0 && (
      <Menu
        ref="menu"
        autoWidth={false}
        disableAutoFocus={focusTextField}
        onEscKeyDown={this.handleEscKeyDown}
        initiallyKeyboardFocused={true}
        onItemTouchTap={this.handleItemTouchTap}
        onMouseDown={this.handleMouseDown}
        style={Object.assign(styles.menu, menuStyle)}
        listStyle={Object.assign(styles.list, listStyle)}
        {...menuProps}
      >
        {requestsList.map((i) => i.value)}
      </Menu>
    );

    return (
      <div style={prepareStyles(Object.assign(styles.root, style))} >
        <TextField
          ref="searchTextField"
          autoComplete="off"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          floatingLabelText={floatingLabelText}
          hintText={hintText}
          fullWidth={fullWidth}
          multiLine={false}
          errorStyle={errorStyle}
          style={textFieldStyle}
          {...other}
          // value and onChange are idiomatic properties often leaked.
          // We prevent their overrides in order to reduce potential bugs.
          value={searchText}
          onChange={this.handleChange}
        />
        <Popover
          style={Object.assign({}, styles.popover, popoverStyle)}
          canAutoPosition={false}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          open={open}
          anchorEl={anchorEl}
          useLayerForClickAway={false}
          onRequestClose={this.handleRequestClose}
          animated={animated}
          animation={animation}
          {...popoverOther}
        >
          {menu}
        </Popover>
      </div>
    );
  }
}

AutoComplete.levenshteinDistance = (searchText, key) => {
  const current = [];
  let prev;
  let value;

  for (let i = 0; i <= key.length; i++) {
    for (let j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;
        else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

AutoComplete.noFilter = () => true;

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = (searchText, key) => {
  return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = (searchText, key) => {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = (distanceLessThan) => {
  if (distanceLessThan === undefined) {
    return AutoComplete.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return (s, k) => AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
};

AutoComplete.fuzzyFilter = (searchText, key) => {
  const compareString = key.toLowerCase();
  searchText = searchText.toLowerCase();

  let searchTextIndex = 0;
  for (let index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1;
    }
  }

  return searchTextIndex === searchText.length;
};

AutoComplete.Item = MenuItem;
AutoComplete.Divider = Divider;

export default AutoComplete;
