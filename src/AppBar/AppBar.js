/**
 * @description React App Bar, formerly known as the action bar in Android, is a special kind of toolbar that’s used for branding, navigation, search, and actions.
 * Also see http://www.material-ui.com/#/components/app-bar.
 * 
 * @example
 * 
 * //A simple example of `AppBar` with an icon on the right. By default, the left icon is a navigation-menu.
 * 
 * import React from 'react';
 * import AppBar from 'material-ui/AppBar';
 * 
 * // A simple example of `AppBar` with an icon on the right.
 * // By default, the left icon is a navigation-menu.
 * const AppBarExampleIcon = () => (
 *  <AppBar
 *    title="Title"
 *    iconClassNameRight="muidocs-icon-navigation-expand-more"
 *  />
 * );
 * 
 * export default AppBarExampleIcon;
 *  
 * 
 * @example
 * 
 * // This example uses an IconButton on the left, has a clickable title through the onClick property, and a FlatButton on the right.
 * // For further info about IconButton, refer to https://bitsrc.io/materialui/react-material-ui/buttons/icon-button
 * 
 * import React from 'react';
 * import AppBar from 'material-ui/AppBar';
 * import IconButton from 'material-ui/IconButton';
 * import NavigationClose from 'material-ui/svg-icons/navigation/close';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * function handleTouchTap() {
 *   alert('onClick triggered on the title component');
 * }
 * 
 * const styles = {
 *   title: {
 *     cursor: 'pointer',
 *   },
 * };
 * 
 * 
 * 
 * @example 
 * 
 * // This example uses an IconButton on the left, has a clickable `title`
 * // through the `onClick` property, and a FlatButton(/#/components/flat-button) on the right.
 * // For further info about FlatButton, refer to https://bitsrc.io/materialui/react-material-ui/buttons/flat-button
 * 
 * const AppBarExampleIconButton = () => (
 *   <AppBar
 *     title={<span style={styles.title}>Title</span>}
 *     onTitleTouchTap={handleTouchTap}
 *     iconElementLeft={<IconButton><NavigationClose /></IconButton>}
 *     iconElementRight={<FlatButton label="Save" />}
 *   />
 * );
 * 
 * export default AppBarExampleIconButton;
 * 
 * 
 * @example 
 * 
 * // This example is taking advantage of the composability of the `AppBar` to render different components depending on the application state.
 * 
 * import React, {Component} from 'react';
 * import AppBar from 'material-ui/AppBar';
 * import IconButton from 'material-ui/IconButton';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import FlatButton from 'material-ui/FlatButton';
 * import Toggle from 'material-ui/Toggle';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * import NavigationClose from 'material-ui/svg-icons/navigation/close';
 * 
 * class Login extends Component {
 *   static muiName = 'FlatButton';
 * 
 *   render() {
 *     return (
 *       <FlatButton {...this.props} label="Login" />
 *     );
 *   }
 * }
 * 
 * const Logged = (props) => (
 *   <IconMenu
 *     {...props}
 *     iconButtonElement={
 *       <IconButton><MoreVertIcon /></IconButton>
 *     }
 *     targetOrigin={{horizontal: 'right', vertical: 'top'}}
 *     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
 *   >
 *     <MenuItem primaryText="Refresh" />
 *     <MenuItem primaryText="Help" />
 *     <MenuItem primaryText="Sign out" />
 *   </IconMenu>
 * );
 * 
 * Logged.muiName = 'IconMenu';
 * 
 * // This example is taking advantage of the composability of the `AppBar`
 * // to render different components depending on the application state.
 * class AppBarExampleComposition extends Component {
 *   state = {
 *     logged: true,
 *   };
 * 
 *   handleChange = (event, logged) => {
 *     this.setState({logged: logged});
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <Toggle
 *           label="Logged"
 *           defaultToggled={true}
 *           onToggle={this.handleChange}
 *           labelPosition="right"
 *           style={{margin: 20}}
 *         />
 *         <AppBar
 *           title="Title"
 *           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
 *           iconElementRight={this.state.logged ? <Logged /> : <Login />}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default AppBarExampleComposition;
 * 
 */

import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import NavigationMenu from '../svg-icons/navigation/menu';
import Paper from '../Paper';
import propTypes from '../utils/propTypes';
import warning from 'warning';

export function getStyles(props, context) {
  const {
    appBar,
    button: {
      iconButtonSize,
    },
    zIndex,
  } = context.muiTheme;

  const flatButtonSize = 36;

  const styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      width: '100%',
      display: 'flex',
      backgroundColor: appBar.color,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding,
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      height: appBar.height,
      lineHeight: `${appBar.height}px`,
    },
    mainElement: {
      boxFlex: 1,
      flex: '1',
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16,
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor,
    },
    flatButton: {
      color: appBar.textColor,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1,
    },
  };

  return styles;
}

class AppBar extends Component {
  static muiName = 'AppBar';

  static propTypes = {
    /**
     * @property {PropTypes.node} children - Can be used to render a tab inside an app bar for instance.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - Applied to the app bar's root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.string} iconClassNameLeft - The classname of the icon on the left of the app bar.
     * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
     */
    iconClassNameLeft: PropTypes.string,
    /**
     * @property {PropTypes.string} iconClassNameRight - Similiar to the iconClassNameLeft prop except that
     * it applies to the icon displayed on the right of the app bar.
     */
    iconClassNameRight: PropTypes.string,
    /**
     * @property {PropTypes.element} iconElementLeft - The custom element to be displayed on the left side of the
     * app bar such as an SvgIcon.
     */
    iconElementLeft: PropTypes.element,
    /**
     * @property {PropTypes.element} iconElementRight - Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
     */
    iconElementRight: PropTypes.element,
    /**
     * @property {PropTypes.object} iconStyleLeft - Override the inline-styles of the element displayed on the left side of the app bar.
     */
    iconStyleLeft: PropTypes.object,
    /**
     * @property {PropTypes.object} iconStyleRight - Override the inline-styles of the element displayed on the right side of the app bar.
     */
    iconStyleRight: PropTypes.object,
    /**
     * @property {PropTypes.func} onLeftIconButtonTouchTap - Callback function for when the left icon is selected via a touch tap.
     *
     * @param {object} event TouchTap event targeting the left `IconButton`.
     */
    onLeftIconButtonTouchTap: PropTypes.func,
    /**
     * @property {PropTypes.func} onRightIconButtonTouchTap - Callback function for when the right icon is selected via a touch tap.
     *
     * @param {object} event TouchTap event targeting the right `IconButton`.
     */
    onRightIconButtonTouchTap: PropTypes.func,
    /**
     * @property {PropTypes.func} onTitleTouchTap - Callback function for when the title text is selected via a touch tap.
     *
     * @param {object} event TouchTap event targeting the `title` node.
     */
    onTitleTouchTap: PropTypes.func,
    /**
     * @property {PropTypes.bool} showMenuIconButton - Determines whether or not to display the Menu icon next to the title.
     * Setting this prop to false will hide the icon.
     */
    showMenuIconButton: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.node} title - The title to display on the app bar.
     */
    title: PropTypes.node,
    /**
     * @property {PropTypes.object} titleStyle - Override the inline-styles of the app bar's title element.
     */
    titleStyle: PropTypes.object,
    /**
     * @property {PropTypes.zDepth} zDepth - The zDepth of the component.
     * The shadow of the app bar is also dependent on this property.
     */
    zDepth: propTypes.zDepth,
  };

  static defaultProps = {
    showMenuIconButton: true,
    title: '',
    zDepth: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    warning(!this.props.iconElementLeft || !this.props.iconClassNameLeft, `Material-UI: Properties iconElementLeft
      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.`);

    warning(!this.props.iconElementRight || !this.props.iconClassNameRight, `Material-UI: Properties iconElementRight
      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.`);
  }

  handleTouchTapLeftIconButton = (event) => {
    if (this.props.onLeftIconButtonTouchTap) {
      this.props.onLeftIconButtonTouchTap(event);
    }
  };

  handleTouchTapRightIconButton = (event) => {
    if (this.props.onRightIconButtonTouchTap) {
      this.props.onRightIconButtonTouchTap(event);
    }
  };

  handleTitleTouchTap = (event) => {
    if (this.props.onTitleTouchTap) {
      this.props.onTitleTouchTap(event);
    }
  };

  render() {
    const {
      title,
      titleStyle,
      iconStyleLeft,
      iconStyleRight,
      onTitleTouchTap, // eslint-disable-line no-unused-vars
      showMenuIconButton,
      iconElementLeft,
      iconElementRight,
      iconClassNameLeft,
      iconClassNameRight,
      onLeftIconButtonTouchTap, // eslint-disable-line no-unused-vars
      onRightIconButtonTouchTap, // eslint-disable-line no-unused-vars
      className,
      style,
      zDepth,
      children,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    let menuElementLeft;
    let menuElementRight;

    // If the title is a string, wrap in an h1 tag.
    // If not, wrap in a div tag.
    const titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';

    const titleElement = React.createElement(titleComponent, {
      onClick: this.handleTitleTouchTap,
      style: prepareStyles(Object.assign(styles.title, styles.mainElement, titleStyle)),
    }, title);

    const iconLeftStyle = Object.assign({}, styles.iconButtonStyle, iconStyleLeft);

    if (showMenuIconButton) {
      if (iconElementLeft) {
        const iconElementLeftProps = {};

        if (iconElementLeft.type.muiName === 'IconButton') {
          const iconElemLeftChildren = iconElementLeft.props.children;
          const iconButtonIconStyle = !(
            iconElemLeftChildren &&
            iconElemLeftChildren.props &&
            iconElemLeftChildren.props.color
          ) ? styles.iconButtonIconStyle : null;

          iconElementLeftProps.iconStyle = Object.assign({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
        }

        if (!iconElementLeft.props.onClick && this.props.onLeftIconButtonTouchTap) {
          iconElementLeftProps.onClick = this.handleTouchTapLeftIconButton;
        }

        menuElementLeft = (
          <div style={prepareStyles(iconLeftStyle)}>
            {Object.keys(iconElementLeftProps).length > 0 ?
              cloneElement(iconElementLeft, iconElementLeftProps) :
              iconElementLeft}
          </div>
        );
      } else {
        menuElementLeft = (
          <IconButton
            style={iconLeftStyle}
            iconStyle={styles.iconButtonIconStyle}
            iconClassName={iconClassNameLeft}
            onClick={this.handleTouchTapLeftIconButton}
          >
            {iconClassNameLeft ?
              '' :
              <NavigationMenu style={Object.assign({}, styles.iconButtonIconStyle)} />
            }
          </IconButton>
        );
      }
    }

    const iconRightStyle = Object.assign({}, styles.iconButtonStyle, {
      marginRight: -16,
      marginLeft: 'auto',
    }, iconStyleRight);

    if (iconElementRight) {
      const iconElementRightProps = {};

      switch (iconElementRight.type.muiName) {
        case 'IconMenu':
        case 'IconButton':
          const iconElemRightChildren = iconElementRight.props.children;
          const iconButtonIconStyle = !(
            iconElemRightChildren &&
            iconElemRightChildren.props &&
            iconElemRightChildren.props.color
          ) ? styles.iconButtonIconStyle : null;

          iconElementRightProps.iconStyle = Object.assign({}, iconButtonIconStyle, iconElementRight.props.iconStyle);
          break;

        case 'FlatButton':
          iconElementRightProps.style = Object.assign({}, styles.flatButton, iconElementRight.props.style);
          break;

        default:
      }

      if (!iconElementRight.props.onClick && this.props.onRightIconButtonTouchTap) {
        iconElementRightProps.onClick = this.handleTouchTapRightIconButton;
      }

      menuElementRight = (
        <div style={prepareStyles(iconRightStyle)}>
          {Object.keys(iconElementRightProps).length > 0 ?
            cloneElement(iconElementRight, iconElementRightProps) :
            iconElementRight}
        </div>
      );
    } else if (iconClassNameRight) {
      menuElementRight = (
        <IconButton
          style={iconRightStyle}
          iconStyle={styles.iconButtonIconStyle}
          iconClassName={iconClassNameRight}
          onClick={this.handleTouchTapRightIconButton}
        />
      );
    }

    return (
      <Paper
        {...other}
        rounded={false}
        className={className}
        style={Object.assign({}, styles.root, style)}
        zDepth={zDepth}
      >
        {menuElementLeft}
        {titleElement}
        {menuElementRight}
        {children}
      </Paper>
    );
  }
}

export default AppBar;
