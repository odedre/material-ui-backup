import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import transitions from '../styles/transitions';
import DropDownArrow from '../svg-icons/navigation/arrow-drop-down';
import Menu from '../Menu/Menu';
import ClearFix from '../internal/ClearFix';
import Popover from '../Popover/Popover';
import PopoverAnimationVertical from '../Popover/PopoverAnimationVertical';
import keycode from 'keycode';
import Events from '../utils/events';
import IconButton from '../IconButton';
import propTypes from '../utils/propTypes';


function getStyles(props, context) {
  const {disabled} = props;
  const spacing = context.muiTheme.baseTheme.spacing;
  const palette = context.muiTheme.baseTheme.palette;
  const accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%',
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2,
    },
    iconChildren: {
      fill: 'inherit',
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: `${spacing.desktopToolbarHeight}px`,
      lineHeight: `${spacing.desktopToolbarHeight}px`,
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap',
    },
    labelWhenOpen: {
      opacity: 0,
      top: (spacing.desktopToolbarHeight / 8),
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: transitions.easeOut(),
    },
    rootWhenOpen: {
      opacity: 1,
    },
    underline: {
      borderTop: `solid 1px ${accentColor}`,
      bottom: 1,
      left: 0,
      margin: `-1px ${spacing.desktopGutter}px`,
      right: 0,
      position: 'absolute',
    },
  };
}

/**
 * @description 
 * The DropDownMenu component is Material-UI's implementation of the Textfield dropdown.
 * Also see http://www.material-ui.com/#/components/dropdown-menu
 * 
 * 
 * @example 
 * // DropDownMenu is implemented as a controlled component, with the current selection set through the value property.
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const styles = {
 *   customWidth: {
 *     width: 200,
 *   },
 * };
 * 
 * export default class DropDownMenuSimpleExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 1};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <DropDownMenu value={this.state.value} onChange={this.handleChange}>
 *           <MenuItem value={1} primaryText="Never" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </DropDownMenu>
 *         <br />
 *         <DropDownMenu
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           style={styles.customWidth}
 *           autoWidth={false}
 *         >
 *           <MenuItem value={1} primaryText="Custom width" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </DropDownMenu>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // With openImmediately property set, the menu will open on mount.
 * 
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class DropDownMenuOpenImmediateExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 2};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
 *         <MenuItem value={1} primaryText="Never" />
 *         <MenuItem value={2} primaryText="Every Night" />
 *         <MenuItem value={3} primaryText="Weeknights" />
 *         <MenuItem value={4} primaryText="Weekends" />
 *         <MenuItem value={5} primaryText="Weekly" />
 *       </DropDownMenu>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // With the maxHeight property set, the menu will be scrollable if the number of items causes the height to exceed this limit.
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [];
 * for (let i = 0; i < 100; i++ ) {
 *   items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
 * }
 * 
 * export default class DropDownMenuLongMenuExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 10};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
 *         {items}
 *       </DropDownMenu>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class DropDownMenuLabeledExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 2};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <DropDownMenu value={this.state.value} onChange={this.handleChange}>
 *         <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
 *         <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
 *         <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
 *         <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
 *       </DropDownMenu>
 *     );
 *   }
 * }
 * 
 */

class DropDownMenu extends Component {
  static muiName = 'DropDownMenu';

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.
  static propTypes = {
    /**
     * @property {PropTypes.origin} anchorOrigin - This is the point on the anchor that the popover's
     * `targetOrigin` will attach to.
     * Options:
     * vertical: [top, center, bottom]
     * horizontal: [left, middle, right].
     */
    anchorOrigin: propTypes.origin,
    /**
     * @property {PropTypes.bool} animated - If true, the popover will apply transitions when
     * it gets added to the DOM.
     */
    animated: PropTypes.bool,
    /**
     * @property {PropTypes.func} animation - Override the default animation component used.
     */
    animation: PropTypes.func,
    /**
     * @property {PropTypes.bool} autoWidth - The width will automatically be set according to the items inside the menu.
     * To control this width in css instead, set this prop to `false`.
     */
    autoWidth: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
     * prop `label` that value will be used to render the representation of that
     * item within the field.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.bool} disabled - Disables the menu.
     */
    disabled: PropTypes.bool,
    /**
     * @property {PropTypes.node} iconButton - Overrides default `SvgIcon` dropdown arrow component.
     */
    iconButton: PropTypes.node,
    /**
     * @property {PropTypes.object} iconStyle - Overrides the styles of icon element.
     */
    iconStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} labelStyle - Overrides the styles of label when the `DropDownMenu` is inactive.
     */
    labelStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} listStyle - The style object to use to override underlying list style.
     */
    listStyle: PropTypes.object,
    /**
     * @property {PropTypes.number} maxHeight - The maximum height of the `Menu` when it is displayed.
     */
    maxHeight: PropTypes.number,
    /**
     * @property {PropTypes.object} menuItemStyle - Override the inline-styles of menu items.
     */
    menuItemStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} menuStyle - Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
     */
    menuStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} multiple - If true, `value` must be an array and the menu will support
     * multiple selections.
     */
    multiple: PropTypes.bool,
    /**
     * @property {PropTypes.func} onChange - Callback function fired when a menu item is clicked, other than the one currently selected.
     *
     * @param {object} event TouchTap event targeting the menu item that was clicked.
     * @param {number} key The index of the clicked menu item in the `children` collection.
     * @param {any} value If `multiple` is true, the menu's `value`
     * array with either the menu item's `value` added (if
     * it wasn't already selected) or omitted (if it was already selected).
     * Otherwise, the `value` of the menu item.
     */
    onChange: PropTypes.func,
    /**
     * @property {PropTypes.func} onClose - Callback function fired when the menu is closed.
     */
    onClose: PropTypes.func,
    /**
     * @property {PropTypes.bool} openImmediately - Set to true to have the `DropDownMenu` automatically open on mount.
     */
    openImmediately: PropTypes.bool,
    /**
     * @property {PropTypes.object} selectedMenuItemStyle - Override the inline-styles of selected menu items.
     */
    selectedMenuItemStyle: PropTypes.object,
    /**
     * @property {PropTypes.func} selectionRenderer - Callback function fired when a menu item is clicked, other than the one currently selected.
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
     * @property {PropTypes.origin} targetOrigin - This is the point on the popover which will attach to
     * the anchor's origin.
     * Options:
     * vertical: [top, center, bottom]
     * horizontal: [left, middle, right].
     */
    targetOrigin: propTypes.origin,
    /**
     * @property {PropTypes.object} underlineStyle - Overrides the inline-styles of the underline.
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
    animated: true,
    autoWidth: true,
    disabled: false,
    iconButton: <DropDownArrow />,
    openImmediately: false,
    maxHeight: 500,
    multiple: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    open: false,
  };

  componentDidMount() {
    if (this.props.autoWidth) {
      this.setWidth();
    }
    if (this.props.openImmediately) {
      // TODO: Temporary fix to make openImmediately work with popover.
      /* eslint-disable react/no-did-mount-set-state */
      setTimeout(() => this.setState({
        open: true,
        anchorEl: this.rootNode,
      }), 0);
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  componentWillReceiveProps() {
    if (this.props.autoWidth) {
      this.setWidth();
    }
  }

  rootNode = undefined;
  arrowNode = undefined;

  /**
   * This method is deprecated but still here because the TextField
   * need it in order to work. TODO: That will be addressed later.
   */
  getInputNode() {
    const rootNode = this.rootNode;

    rootNode.focus = () => {
      if (!this.props.disabled) {
        this.setState({
          open: !this.state.open,
          anchorEl: this.rootNode,
        });
      }
    };

    return rootNode;
  }

  setWidth() {
    const el = this.rootNode;
    if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
      el.style.width = 'auto';
    }
  }

  handleTouchTapControl = (event) => {
    event.preventDefault();
    if (!this.props.disabled) {
      this.setState({
        open: !this.state.open,
        anchorEl: this.rootNode,
      });
    }
  };

  handleRequestCloseMenu = () => {
    this.close(false);
  };

  handleEscKeyDownMenu = () => {
    this.close(true);
  };

  handleKeyDown = (event) => {
    switch (keycode(event)) {
      case 'up':
      case 'down':
      case 'space':
      case 'enter':
        event.preventDefault();
        this.setState({
          open: true,
          anchorEl: this.rootNode,
        });
        break;
    }
  };

  handleItemTouchTap = (event, child, index) => {
    if (this.props.multiple) {
      if (!this.state.open) {
        this.setState({open: true});
      }
    } else {
      event.persist();
      this.setState({
        open: false,
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(event, index, child.props.value);
        }

        this.close(Events.isKeyboard(event));
      });
    }
  };

  handleChange = (event, value) => {
    if (this.props.multiple && this.props.onChange) {
      this.props.onChange(event, undefined, value);
    }
  };

  close = (isKeyboard) => {
    this.setState({
      open: false,
    }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }

      if (isKeyboard) {
        const dropArrow = this.arrowNode;
        const dropNode = ReactDOM.findDOMNode(dropArrow);
        dropNode.focus();
        dropArrow.setKeyboardFocus(true);
      }
    });
  }

  render() {
    const {
      animated,
      animation,
      autoWidth,
      multiple,
      children,
      className,
      disabled,
      iconStyle,
      labelStyle,
      listStyle,
      maxHeight,
      menuStyle: menuStyleProp,
      selectionRenderer,
      onClose, // eslint-disable-line no-unused-vars
      openImmediately, // eslint-disable-line no-unused-vars
      menuItemStyle,
      selectedMenuItemStyle,
      style,
      underlineStyle,
      value,
      iconButton,
      anchorOrigin,
      targetOrigin,
      ...other
    } = this.props;
    const {
      anchorEl,
      open,
    } = this.state;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    let displayValue = '';
    if (!multiple) {
      React.Children.forEach(children, (child) => {
        if (child && value === child.props.value) {
          if (selectionRenderer) {
            displayValue = selectionRenderer(value, child);
          } else {
            // This will need to be improved (in case primaryText is a node)
            displayValue = child.props.label || child.props.primaryText;
          }
        }
      });
    } else {
      const values = [];
      const selectionRendererChildren = [];
      React.Children.forEach(children, (child) => {
        if (child && value && value.indexOf(child.props.value) > -1) {
          if (selectionRenderer) {
            values.push(child.props.value);
            selectionRendererChildren.push(child);
          } else {
            values.push(child.props.label || child.props.primaryText);
          }
        }
      });

      displayValue = [];
      if (selectionRenderer) {
        displayValue = selectionRenderer(values, selectionRendererChildren);
      } else {
        displayValue = values.join(', ');
      }
    }

    let menuStyle;
    if (anchorEl && !autoWidth) {
      menuStyle = Object.assign({
        width: anchorEl.clientWidth,
      }, menuStyleProp);
    } else {
      menuStyle = menuStyleProp;
    }

    return (
      <div
        {...other}
        ref={(node) => {
          this.rootNode = node;
        }}
        className={className}
        style={prepareStyles(Object.assign({}, styles.root, open && styles.rootWhenOpen, style))}
      >
        <ClearFix style={styles.control} onClick={this.handleTouchTapControl}>
          <div style={prepareStyles(Object.assign({}, styles.label, open && styles.labelWhenOpen, labelStyle))}>
            {displayValue}
          </div>
          <IconButton
            disabled={disabled}
            onKeyDown={this.handleKeyDown}
            ref={(node) => {
              this.arrowNode = node;
            }}
            style={Object.assign({}, styles.icon, iconStyle)}
            iconStyle={styles.iconChildren}
          >
            {iconButton}
          </IconButton>
          <div style={prepareStyles(Object.assign({}, styles.underline, underlineStyle))} />
        </ClearFix>
        <Popover
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          anchorEl={anchorEl}
          animation={animation || PopoverAnimationVertical}
          open={open}
          animated={animated}
          onRequestClose={this.handleRequestCloseMenu}
        >
          <Menu
            multiple={multiple}
            maxHeight={maxHeight}
            desktop={true}
            value={value}
            onEscKeyDown={this.handleEscKeyDownMenu}
            style={menuStyle}
            listStyle={listStyle}
            onItemTouchTap={this.handleItemTouchTap}
            onChange={this.handleChange}
            menuItemStyle={menuItemStyle}
            selectedMenuItemStyle={selectedMenuItemStyle}
            autoWidth={autoWidth}
            width={!autoWidth && menuStyle ? menuStyle.width : null}
          >
            {children}
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default DropDownMenu;
