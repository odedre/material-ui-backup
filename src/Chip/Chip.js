import React, {Component} from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import {fade, emphasize} from '../utils/colorManipulator';
import EnhancedButton from '../internal/EnhancedButton';
import DeleteIcon from '../svg-icons/navigation/cancel';

function getStyles(props, context, state) {
  const {chip} = context.muiTheme;

  const backgroundColor = props.backgroundColor || chip.backgroundColor;
  const focusColor = emphasize(backgroundColor, 0.08);
  const pressedColor = emphasize(backgroundColor, 0.12);

  return {
    avatar: {
      marginRight: -4,
    },
    deleteIcon: {
      color: (state.deleteHovered) ? fade(chip.deleteIconColor, 0.4) : chip.deleteIconColor,
      cursor: 'pointer',
      margin: '4px 4px 0px -8px',
    },
    label: {
      color: props.labelColor || chip.textColor,
      fontSize: chip.fontSize,
      fontWeight: chip.fontWeight,
      lineHeight: '32px',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    root: {
      backgroundColor: state.clicked ? pressedColor : (state.focused || state.hovered) ? focusColor : backgroundColor,
      borderRadius: 16,
      boxShadow: state.clicked ? chip.shadow : null,
      cursor: props.onClick ? 'pointer' : 'default',
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'fit-content',
    },
  };
}

/**
 * @description Chips represent complex entities in small blocks, such as a contact.
 * Also see https://www.google.com/design/spec/components/chips.html
 * 
 * While included here as a standalone component, the most common use will be in some form of input, so some of the behaviour demonstrated is not shown in context.
 *
 * @example
 * 
 * // Examples of Chips, using an image Avatar, Font Icon Avatar, SVG Icon Avatar, "Letter" (string) Avatar, and with custom colors.
 * // For more info on Avatar, go to https://bitsrc.io/materialui/react-material-ui/misc/avatar
 * // For more info on Font Icon, go to https://bitsrc.io/materialui/react-material-ui/icons/font-icon
 * // For more info on SVG Icon, go to https://bitsrc.io/materialui/react-material-ui/icons/svg-icon
 * 
 * // Chips with the `onRequestDelete` property defined will display a delete icon.
 * 
 * import React from 'react';
 * import Avatar from 'material-ui/Avatar';
 * import Chip from 'material-ui/Chip';
 * import FontIcon from 'material-ui/FontIcon';
 * import SvgIconFace from 'material-ui/svg-icons/action/face';
 * import {blue300, indigo900} from 'material-ui/styles/colors';
 * 
 * const styles = {
 *   chip: {
 *     margin: 4,
 *   },
 *   wrapper: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *   },
 * };
 * 
 * function handleRequestDelete() {
 *   alert('You clicked the delete button.');
 * }
 * 
 * function handleTouchTap() {
 *   alert('You clicked the Chip.');
 * }
 * export default class ChipExampleSimple extends React.Component {
 *   
 *     render() {
 *       return (
 *         <div style={styles.wrapper}>
 *   
 *           <Chip
 *             style={styles.chip}
 *           >
 *             Text Chip
 *           </Chip>
 *   
 *           <Chip
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             Deletable Text Chip
 *           </Chip>
 *   
 *           <Chip
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar src="images/uxceo-128.jpg" />
 *             Image Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar src="images/ok-128.jpg" />
 *             Deletable Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
 *             FontIcon Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar color="#444" icon={<SvgIconFace />} />
 *             SvgIcon Avatar Chip
 *           </Chip>
 *   
 *           <Chip onClick={handleTouchTap} style={styles.chip}>
 *             <Avatar size={32}>A</Avatar>
 *             Text Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             backgroundColor={blue300}
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar size={32} color={blue300} backgroundColor={indigo900}>
 *               MB
 *             </Avatar>
 *             Colored Chip
 *           </Chip>
 *         </div>
 *       );
 *     }
 *   }
 * 
 * 
 * @example 
 * 
 * // An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * // Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth while clicked or touched.
 * 
 * import React from 'react';
 * import Chip from 'material-ui/Chip';
 * 
 * export default class ChipExampleArray extends React.Component {
 *   
 *     constructor(props) {
 *       super(props);
 *       this.state = {chipData: [
 *         {key: 0, label: 'Angular'},
 *         {key: 1, label: 'JQuery'},
 *         {key: 2, label: 'Polymer'},
 *         {key: 3, label: 'ReactJS'},
 *       ]};
 *       this.styles = {
 *         chip: {
 *           margin: 4,
 *         },
 *         wrapper: {
 *           display: 'flex',
 *           flexWrap: 'wrap',
 *         },
 *       };
 *     }
 *   
 *     handleRequestDelete = (key) => {
 *       if (key === 3) {
 *         alert('Why would you want to delete React?! :)');
 *         return;
 *       }
 *   
 *       this.chipData = this.state.chipData;
 *       const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
 *       this.chipData.splice(chipToDelete, 1);
 *       this.setState({chipData: this.chipData});
 *     };
 *   
 *     renderChip(data) {
 *       return (
 *         <Chip
 *           key={data.key}
 *           onRequestDelete={() => this.handleRequestDelete(data.key)}
 *           style={this.styles.chip}
 *         >
 *           {data.label}
 *         </Chip>
 *       );
 *     }
 *   
 *     render() {
 *       return (
 *         <div style={this.styles.wrapper}>
 *           {this.state.chipData.map(this.renderChip, this)}
 *         </div>
 *       );
 *     }
 *   }
 * 
 */
class Chip extends Component {

    static propTypes = {
      /**
       * @property {PropTypes.string} backgroundColor - Override the background color of the chip.
       */
      backgroundColor: PropTypes.string,
      /**
       * @property {PropTypes.node} children - Used to render elements inside the Chip.
       */
      children: PropTypes.node,
      /**
       * @property {PropTypes.node} className - CSS `className` of the root element.
       */
      className: PropTypes.node,
      /**
       * @property {PropTypes.oneOfType([PropTypes.string|PropTypes.element])} containerElement - The element to use as the container for the Chip. Either a string to
       * use a DOM element or a ReactElement.
       */
      containerElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      /**
       * @property {PropTypes.object} deleteIconStyle - Override the inline-styles of the delete icon.
       */
      deleteIconStyle: PropTypes.object,
      /**
       * @property {PropTypes.string} labelColor - Override the label color.
       */
      labelColor: PropTypes.string,
      /**
       * @property {PropTypes.object} labelStyle - Override the inline-styles of the label.
       */
      labelStyle: PropTypes.object,
      /** @ignore */
      onBlur: PropTypes.func,
      /** @ignore */
      onFocus: PropTypes.func,
      /** @ignore */
      onKeyDown: PropTypes.func,
      /** @ignore */
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
       * @property {PropTypes.func} onRequestDelete - Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
       * @param {object} event `touchTap` event targeting the element.
       */
      onRequestDelete: PropTypes.func,
      /** @ignore */
      onTouchEnd: PropTypes.func,
      /** @ignore */
      onTouchStart: PropTypes.func,
      /**
       * @property {PropTypes.func} onTouchTap - Callback function fired when the `Chip` element is touch-tapped.
       *
       * @param {object} event TouchTap event targeting the element.
       */
      onTouchTap: PropTypes.func,
      /**
       * @property {PropTypes.object} style - Override the inline-styles of the root element.
       */
      style: PropTypes.object,
    };

  static defaultProps = {
    containerElement: 'div', // Firefox doesn't support nested buttons
    onBlur: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyboardFocus: () => {},
    onMouseDown: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onMouseUp: () => {},
    onTouchEnd: () => {},
    onTouchStart: () => {},
  };

  static contextTypes = {muiTheme: PropTypes.object.isRequired};

  state = {
    clicked: false,
    deleteHovered: false,
    focused: false,
    hovered: false,
  };

  handleBlur = (event) => {
    this.setState({clicked: false, focused: false});
    this.props.onBlur(event);
  };

  handleFocus = (event) => {
    if (this.props.onClick || this.props.onRequestDelete) {
      this.setState({focused: true});
    }
    this.props.onFocus(event);
  };

  handleKeyboardFocus = (event, keyboardFocused) => {
    if (keyboardFocused) {
      this.handleFocus();
      this.props.onFocus(event);
    } else {
      this.handleBlur();
    }

    this.props.onKeyboardFocus(event, keyboardFocused);
  };

  handleKeyDown = (event) => {
    if (keycode(event) === 'backspace') {
      event.preventDefault();
      if (this.props.onRequestDelete) {
        this.props.onRequestDelete(event);
      }
    }
    this.props.onKeyDown(event);
  };

  handleMouseDown = (event) => {
    // Only listen to left clicks
    if (event.button === 0) {
      event.stopPropagation();
      if (this.props.onClick) {
        this.setState({clicked: true});
      }
    }
    this.props.onMouseDown(event);
  };

  handleMouseEnter = (event) => {
    if (this.props.onClick) {
      this.setState({hovered: true});
    }
    this.props.onMouseEnter(event);
  };

  handleMouseEnterDeleteIcon = () => {
    this.setState({deleteHovered: true});
  };

  handleMouseLeave = (event) => {
    this.setState({
      clicked: false,
      hovered: false,
    });
    this.props.onMouseLeave(event);
  };

  handleMouseLeaveDeleteIcon = () => {
    this.setState({deleteHovered: false});
  };

  handleMouseUp = (event) => {
    this.setState({clicked: false});
    this.props.onMouseUp(event);
  };

  handleTouchTapDeleteIcon = (event) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    this.props.onRequestDelete(event);
  };

  handleTouchEnd = (event) => {
    this.setState({clicked: false});
    this.props.onTouchEnd(event);
  };

  handleTouchStart = (event) => {
    event.stopPropagation();
    if (this.props.onClick) {
      this.setState({clicked: true});
    }
    this.props.onTouchStart(event);
  };

  render() {
    const buttonEventHandlers = {
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseUp: this.handleMouseUp,
      onTouchEnd: this.handleTouchEnd,
      onTouchStart: this.handleTouchStart,
      onKeyboardFocus: this.handleKeyboardFocus,
    };

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    const {
      children: childrenProp,
      containerElement,
      style,
      className,
      deleteIconStyle,
      labelStyle,
      labelColor, // eslint-disable-line no-unused-vars,prefer-const
      backgroundColor, // eslint-disable-line no-unused-vars,prefer-const
      onRequestDelete, // eslint-disable-line no-unused-vars,prefer-const
      ...other
    } = this.props;

    const deletable = this.props.onRequestDelete;
    let avatar = null;

    const deleteIcon = deletable ? (
      <DeleteIcon
        color={styles.deleteIcon.color}
        style={Object.assign(styles.deleteIcon, deleteIconStyle)}
        onClick={this.handleTouchTapDeleteIcon}
        onMouseEnter={this.handleMouseEnterDeleteIcon}
        onMouseLeave={this.handleMouseLeaveDeleteIcon}
      />
    ) : null;

    let children = childrenProp;
    const childCount = React.Children.count(children);

    // If the first child is an avatar, extract it and style it
    if (childCount > 1) {
      children = React.Children.toArray(children);

      if (React.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
        avatar = children.shift();

        avatar = React.cloneElement(avatar, {
          style: Object.assign(styles.avatar, avatar.props.style),
          size: 32,
        });
      }
    }

    return (
      <EnhancedButton
        {...other}
        {...buttonEventHandlers}
        className={className}
        containerElement={containerElement}
        disableTouchRipple={true}
        disableFocusRipple={true}
        style={Object.assign(styles.root, style)}
      >
        {avatar}
        <span style={prepareStyles(Object.assign(styles.label, labelStyle))}>
          {children}
        </span>
        {deleteIcon}
      </EnhancedButton>
    );
  }
}

export default Chip;
