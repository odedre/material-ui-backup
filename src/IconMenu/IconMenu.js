import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Events from '../utils/events';
import propTypes from '../utils/propTypes';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import warning from 'warning';

/**
 * @description 
 * 
 * Icon Menus are menus that open from icons. They can give options related to the icon and use a minimal space.
 * Also see http://www.material-ui.com/#/components/icon-menu
 * 
 * @example
 *
 * // Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and `targetOrigin` properties. 
 * 
 * import React from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * 
 * const IconMenuExampleSimple = () => (
 *   <div>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 *       targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *       targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
 *       targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
 *       targetOrigin={{horizontal: 'right', vertical: 'top'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *   </div>
 * );
 * 
 * export default IconMenuExampleSimple;
 * 
 * 
 * @example 
 * // Three controlled examples, the first allowing a single selection, the second multiple selections, the third using internal state.
 * 
 * import React, {Component} from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * import ContentFilter from 'material-ui/svg-icons/content/filter-list';
 * import FileFileDownload from 'material-ui/svg-icons/file/file-download';
 * 
 * export default class IconMenuExampleControlled extends Component {
 *   state = {
 *     valueSingle: '3',
 *     valueMultiple: ['3', '5'],
 *   };
 * 
 *   handleChangeSingle = (event, value) => {
 *     this.setState({
 *       valueSingle: value,
 *     });
 *   };
 * 
 *   handleChangeMultiple = (event, value) => {
 *     this.setState({
 *       valueMultiple: value,
 *     });
 *   };
 * 
 *   handleOpenMenu = () => {
 *     this.setState({
 *       openMenu: true,
 *     });
 *   }
 * 
 *   handleOnRequestChange = (value) => {
 *     this.setState({
 *       openMenu: value,
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <div>
 *         <IconMenu
 *           iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *           onChange={this.handleChangeSingle}
 *           value={this.state.valueSingle}
 *         >
 *           <MenuItem value="1" primaryText="Refresh" />
 *           <MenuItem value="2" primaryText="Send feedback" />
 *           <MenuItem value="3" primaryText="Settings" />
 *           <MenuItem value="4" primaryText="Help" />
 *           <MenuItem value="5" primaryText="Sign out" />
 *         </IconMenu>
 *         <IconMenu
 *           iconButtonElement={<IconButton><ContentFilter /></IconButton>}
 *           onChange={this.handleChangeMultiple}
 *           value={this.state.valueMultiple}
 *           multiple={true}
 *         >
 *           <MenuItem value="1" primaryText="Blu-ray" />
 *           <MenuItem value="2" primaryText="Cassette" />
 *           <MenuItem value="3" primaryText="CD" />
 *           <MenuItem value="4" primaryText="DVD Audio" />
 *           <MenuItem value="5" primaryText="Hybrid SACD" />
 *           <MenuItem value="6" primaryText="Vinyl" />
 *         </IconMenu>
 *         <IconMenu
 *           iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
 *           open={this.state.openMenu}
 *           onRequestChange={this.handleOnRequestChange}
 *         >
 *           <MenuItem value="1" primaryText="Windows App" />
 *           <MenuItem value="2" primaryText="Mac App" />
 *           <MenuItem value="3" primaryText="Android App" />
 *           <MenuItem value="4" primaryText="iOS App" />
 *         </IconMenu>
 *         <RaisedButton onClick={this.handleOpenMenu} label="Downloads" />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The `maxHeight` property limits the height of the menu, above which it will be scrollable.
 * 
 * import React from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import MapsPlace from 'material-ui/svg-icons/maps/place';
 * 
 * const IconMenuExampleScrollable = () => (
 *   <IconMenu
 *     iconButtonElement={<IconButton><MapsPlace /></IconButton>}
 *     anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 *     targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *     maxHeight={272}
 *   >
 *     <MenuItem value="AL" primaryText="Alabama" />
 *     <MenuItem value="AK" primaryText="Alaska" />
 *     <MenuItem value="AZ" primaryText="Arizona" />
 *     <MenuItem value="AR" primaryText="Arkansas" />
 *     <MenuItem value="CA" primaryText="California" />
 *     <MenuItem value="CO" primaryText="Colorado" />
 *     <MenuItem value="CT" primaryText="Connecticut" />
 *     <MenuItem value="DE" primaryText="Delaware" />
 *     <MenuItem value="DC" primaryText="District Of Columbia" />
 *     <MenuItem value="FL" primaryText="Florida" />
 *     <MenuItem value="GA" primaryText="Georgia" />
 *     <MenuItem value="HI" primaryText="Hawaii" />
 *     <MenuItem value="ID" primaryText="Idaho" />
 *     <MenuItem value="IL" primaryText="Illinois" />
 *     <MenuItem value="IN" primaryText="Indiana" />
 *     <MenuItem value="IA" primaryText="Iowa" />
 *     <MenuItem value="KS" primaryText="Kansas" />
 *     <MenuItem value="KY" primaryText="Kentucky" />
 *     <MenuItem value="LA" primaryText="Louisiana" />
 *     <MenuItem value="ME" primaryText="Maine" />
 *     <MenuItem value="MD" primaryText="Maryland" />
 *     <MenuItem value="MA" primaryText="Massachusetts" />
 *     <MenuItem value="MI" primaryText="Michigan" />
 *     <MenuItem value="MN" primaryText="Minnesota" />
 *     <MenuItem value="MS" primaryText="Mississippi" />
 *     <MenuItem value="MO" primaryText="Missouri" />
 *     <MenuItem value="MT" primaryText="Montana" />
 *     <MenuItem value="NE" primaryText="Nebraska" />
 *     <MenuItem value="NV" primaryText="Nevada" />
 *     <MenuItem value="NH" primaryText="New Hampshire" />
 *     <MenuItem value="NJ" primaryText="New Jersey" />
 *     <MenuItem value="NM" primaryText="New Mexico" />
 *     <MenuItem value="NY" primaryText="New York" />
 *     <MenuItem value="NC" primaryText="North Carolina" />
 *     <MenuItem value="ND" primaryText="North Dakota" />
 *     <MenuItem value="OH" primaryText="Ohio" />
 *     <MenuItem value="OK" primaryText="Oklahoma" />
 *     <MenuItem value="OR" primaryText="Oregon" />
 *     <MenuItem value="PA" primaryText="Pennsylvania" />
 *     <MenuItem value="RI" primaryText="Rhode Island" />
 *     <MenuItem value="SC" primaryText="South Carolina" />
 *     <MenuItem value="SD" primaryText="South Dakota" />
 *     <MenuItem value="TN" primaryText="Tennessee" />
 *     <MenuItem value="TX" primaryText="Texas" />
 *     <MenuItem value="UT" primaryText="Utah" />
 *     <MenuItem value="VT" primaryText="Vermont" />
 *     <MenuItem value="VA" primaryText="Virginia" />
 *     <MenuItem value="WA" primaryText="Washington" />
 *     <MenuItem value="WV" primaryText="West Virginia" />
 *     <MenuItem value="WI" primaryText="Wisconsin" />
 *     <MenuItem value="WY" primaryText="Wyoming" />
 *   </IconMenu>
 * );
 * 
 * export default IconMenuExampleScrollable;
 * 
 * 
 * 
 * @example 
 * // Example of nested menus within an IconMenu.
 * 
 * import React from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import Divider from 'material-ui/Divider';
 * import Download from 'material-ui/svg-icons/file/file-download';
 * import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * 
 * const IconMenuExampleNested = () => (
 *   <IconMenu
 *     iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *     anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 *     targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *   >
 *     <MenuItem
 *       primaryText="Copy & Paste"
 *       rightIcon={<ArrowDropRight />}
 *       menuItems={[
 *         <MenuItem primaryText="Cut" />,
 *         <MenuItem primaryText="Copy" />,
 *         <Divider />,
 *         <MenuItem primaryText="Paste" />,
 *       ]}
 *     />
 * 
 *     <MenuItem
 *       primaryText="Case Tools"
 *       rightIcon={<ArrowDropRight />}
 *       menuItems={[
 *         <MenuItem primaryText="UPPERCASE" />,
 *         <MenuItem primaryText="lowercase" />,
 *         <MenuItem primaryText="CamelCase" />,
 *         <MenuItem primaryText="Propercase" />,
 *       ]}
 *     />
 *     <Divider />
 *     <MenuItem primaryText="Download" leftIcon={<Download />} />
 *     <Divider />
 *     <MenuItem value="Del" primaryText="Delete" />
 * 
 *   </IconMenu>
 * );
 * 
 * export default IconMenuExampleNested;
 * 
 */

class IconMenu extends Component {
  static muiName = 'IconMenu';

  static propTypes = {
    /**
     * @property {PropTypes.custom} anchorOrigin - This is the point on the icon where the menu
     * `targetOrigin` will attach.
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
     * @property {PropTypes.node} children - Should be used to pass `MenuItem` components.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.element} iconButtonElement - This is the `IconButton` to render. This button will open the menu.
     */
    iconButtonElement: PropTypes.element.isRequired,
    /**
     * @property {PropTypes.object} iconStyle - Override the inline-styles of the underlying icon element.
     */
    iconStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} listStyle - Override the inline-styles of the underlying `List` element.
     */
    listStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} menuStyle - Override the inline-styles of the menu element.
     */
    menuStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} multiple - If true, the value can an be array and allow the menu to be a multi-select.
     */
    multiple: PropTypes.bool,
    /**
     * @property {PropTypes.func} onClick - Callback function fired when the `IconButton` element is touch-tapped.
     *
     * @param {object} event TouchTap event targeting the `IconButton` element.
     */
    onClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onItemTouchTap - Callback function fired when a menu item is selected with a touch-tap.
     *
     * @param {object} event TouchTap event targeting the selected menu item element.
     * @param {object} child The selected element.
     */
    onItemTouchTap: PropTypes.func,
    /**
     * @property {PropTypes.func} onKeyboardFocus - Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
     *
     * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
     * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
     */
    onKeyboardFocus: PropTypes.func,
    /** @ignore */
    onMouseDown: PropTypes.func,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /** @ignore */
    onMouseUp: PropTypes.func,
    /**
     * @property {PropTypes.func} onRequestChange - Callback function fired when the `open` state of the menu is requested to be changed.
     *
     * @param {boolean} open If true, the menu was requested to be opened.
     * @param {string} reason The reason for the open or close request. Possible values are
     * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
     * for close requests.
     */
    onRequestChange: PropTypes.func,
    /**
     * @property {PropTypes.bool} open - If true, the `IconMenu` is opened.
     */
    open: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.custom} targetOrigin - This is the point on the menu which will stick to the menu
     * origin.
     * Options:
     * vertical: [top, center, bottom]
     * horizontal: [left, middle, right].
     */
    targetOrigin: propTypes.origin,
    /**
     * @property {PropTypes.number} touchTapCloseDelay - Sets the delay in milliseconds before closing the
     * menu when an item is clicked.
     * If set to 0 then the auto close functionality
     * will be disabled.
     */
    touchTapCloseDelay: PropTypes.number,
    /**
     * @property {PropTypes.bool} useLayerForClickAway - If true, the popover will render on top of an invisible
     * layer, which will prevent clicks to the underlying elements.
     */
    useLayerForClickAway: PropTypes.bool,
  };

  static defaultProps = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    animated: true,
    multiple: false,
    open: null,
    onItemTouchTap: () => {},
    onKeyboardFocus: () => {},
    onMouseDown: () => {},
    onMouseLeave: () => {},
    onMouseEnter: () => {},
    onMouseUp: () => {},
    onRequestChange: () => {},
    onClick: () => {},
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    touchTapCloseDelay: 200,
    useLayerForClickAway: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    menuInitiallyKeyboardFocused: false,
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open != null) {
      this.setState({
        open: nextProps.open,
        anchorEl: this.refs.iconMenuContainer,
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerCloseId);
  }

  isOpen() {
    return this.state.open;
  }

  close(reason, isKeyboard) {
    if (!this.state.open) {
      return;
    }

    if (this.props.open !== null) {
      this.props.onRequestChange(false, reason);
    } else {
      this.setState({open: false}, () => {
        // Set focus on the icon button when the menu close
        if (isKeyboard) {
          const iconButton = this.refs.iconButton;
          ReactDOM.findDOMNode(iconButton).focus();
          iconButton.setKeyboardFocus();
        }
      });
    }
  }

  open(reason, event) {
    if (this.props.open !== null) {
      this.props.onRequestChange(true, reason);

      return this.setState({
        menuInitiallyKeyboardFocused: Events.isKeyboard(event),
        anchorEl: event.currentTarget,
      });
    }

    this.setState({
      open: true,
      menuInitiallyKeyboardFocused: Events.isKeyboard(event),
      anchorEl: event.currentTarget,
    });

    event.preventDefault();
  }

  handleItemTouchTap = (event, child) => {
    if (this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
      const isKeyboard = Events.isKeyboard(event);
      this.timerCloseId = setTimeout(() => {
        this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
      }, this.props.touchTapCloseDelay);
    }

    this.props.onItemTouchTap(event, child);
  };

  handleRequestClose = (reason) => {
    this.close(reason);
  };

  handleEscKeyDownMenu = (event) => {
    this.close('escape', event);
  };

  render() {
    const {
      anchorOrigin,
      className,
      animated,
      animation,
      iconButtonElement,
      iconStyle,
      onItemTouchTap, // eslint-disable-line no-unused-vars
      onKeyboardFocus,
      onMouseDown,
      onMouseLeave,
      onMouseEnter,
      onMouseUp,
      onRequestChange, // eslint-disable-line no-unused-vars
      onClick,
      listStyle,
      menuStyle,
      style,
      targetOrigin,
      touchTapCloseDelay, // eslint-disable-line no-unused-vars
      useLayerForClickAway,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const {open, anchorEl} = this.state;

    const styles = {
      root: {
        display: 'inline-block',
        position: 'relative',
      },
      menu: {
        position: 'relative',
      },
    };

    const mergedRootStyles = Object.assign(styles.root, style);
    const mergedMenuStyles = Object.assign(styles.menu, menuStyle);

    warning(iconButtonElement.type.muiName !== 'SvgIcon',
      `Material-UI: You shoud not provide an <SvgIcon /> to the 'iconButtonElement' property of <IconMenu />.
You should wrapped it with an <IconButton />.`);

    const iconButtonProps = {
      onKeyboardFocus: onKeyboardFocus,
      onClick: (event) => {
        this.open(Events.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
        if (iconButtonElement.props.onClick) {
          iconButtonElement.props.onClick(event);
        }
      },
      ref: 'iconButton',
    };
    if (iconStyle || iconButtonElement.props.iconStyle) {
      iconButtonProps.iconStyle = iconStyle ?
        Object.assign({}, iconStyle, iconButtonElement.props.iconStyle) :
        iconButtonElement.props.iconStyle;
    }
    const iconButton = React.cloneElement(iconButtonElement, iconButtonProps);

    const menu = (
      <Menu
        {...other}
        initiallyKeyboardFocused={this.state.menuInitiallyKeyboardFocused}
        onEscKeyDown={this.handleEscKeyDownMenu}
        onItemTouchTap={this.handleItemTouchTap}
        style={mergedMenuStyles}
        listStyle={listStyle}
      >
        {this.props.children}
      </Menu>
    );

    return (
      <div
        ref="iconMenuContainer"
        className={className}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onMouseUp={onMouseUp}
        onClick={onClick}
        style={prepareStyles(mergedRootStyles)}
      >
        {iconButton}
        <Popover
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          open={open}
          anchorEl={anchorEl}
          childContextTypes={this.constructor.childContextTypes}
          useLayerForClickAway={useLayerForClickAway}
          onRequestClose={this.handleRequestClose}
          animated={animated}
          animation={animation}
          context={this.context}
        >
          {menu}
        </Popover>
      </div>
    );
  }
}

export default IconMenu;
