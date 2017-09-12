/**
 * @description Avatars can be used to represent people or object.
 * Also see http://www.material-ui.com/#/components/avatar
 * 
 * @example
 * 
 * //Examples of `Avatar` using an image, Font Icon, SVG Icon.
 * //and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 * 
 * // For more info on Font Icon, go to https://bitsrc.io/materialui/react-material-ui/icons/font-icon
 * // For more info on SVG Icon, go to https://bitsrc.io/materialui/react-material-ui/icons/svg-icon
 * 
 * import React from 'react';
 * import Avatar from 'material-ui/Avatar';
 * import FileFolder from 'material-ui/svg-icons/file/folder';
 * import FontIcon from 'material-ui/FontIcon';
 * import List from 'material-ui/List/List';
 * import ListItem from 'material-ui/List/ListItem';
 * 
 * import {
 *   blue300,
 *   indigo900,
 *   orange200,
 *   deepOrange300,
 *   pink400,
 *   purple500,
 * } from 'material-ui/styles/colors';
 * 
 * const style = {margin: 5};
 * 
 * const AvatarExampleSimple = () => (
 *   <List>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar src="images/uxceo-128.jpg" />
 *       }
 *     >
 *       Image Avatar
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar
 *           src="images/uxceo-128.jpg"
 *           size={30}
 *           style={style}
 *         />
 *       }
 *     >
 *       Image Avatar with custom size
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
 *       }
 *     >
 *       FontIcon Avatar
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar
 *           icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
 *           color={blue300}
 *           backgroundColor={indigo900}
 *           size={30}
 *           style={style}
 *         />
 *       }
 *     >
 *       FontIcon Avatar with custom colors and size
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar icon={<FileFolder />} />
 *       }
 *     >
 *       SvgIcon Avatar
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar
 *           icon={<FileFolder />}
 *           color={orange200}
 *           backgroundColor={pink400}
 *           size={30}
 *           style={style}
 *         />
 *       }
 *     >
 *       SvgIcon Avatar with custom colors and size
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={<Avatar>A</Avatar>}
 *     >
 *       Letter Avatar
 *     </ListItem>
 *     <ListItem
 *       disabled={true}
 *       leftAvatar={
 *         <Avatar
 *           color={deepOrange300}
 *           backgroundColor={purple500}
 *           size={30}
 *           style={style}
 *         >
 *           A
 *         </Avatar>
 *       }
 *     >
 *       Letter Avatar with custom colors and size
 *     </ListItem>
 *   </List>
 * );
 * 
 * export default AvatarExampleSimple;
 * 
 * @property {string} backgroundColor - The backgroundColor of the avatar. Does not apply to image avatars.
 * @property {node} children - Can be used, for instance, to render a letter inside the avatar.
 * @property {string} className - The css class name of the root div or img element.
 * @property {string} color - The icon or letter's color.
 * @property {element} icon - This is the SvgIcon or FontIcon to be used inside the avatar.
 * @property {number} [size=40] This is the size of the avatar in pixels.
 * @property {string} src - If passed in, this component will render an img element. Otherwise, a div will be rendered.
 * @property {object} style - Override the inline-styles of the root element.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {
    backgroundColor,
    color,
    size,
  } = props;

  const {avatar} = context.muiTheme;

  const styles = {
    root: {
      color: color || avatar.color,
      backgroundColor: backgroundColor || avatar.backgroundColor,
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size,
    },
    icon: {
      color: color || avatar.color,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2,
    },
  };

  return styles;
}

class Avatar extends Component {
  static muiName = 'Avatar';

  static propTypes = {
    /**
     * The backgroundColor of the avatar. Does not apply to image avatars.
     */
    backgroundColor: PropTypes.string,
    /**
     * Can be used, for instance, to render a letter inside the avatar.
     */
    children: PropTypes.node,
    /**
     * The css class name of the root `div` or `img` element.
     */
    className: PropTypes.string,
    /**
     * The icon or letter's color.
     */
    color: PropTypes.string,
    /**
     * This is the SvgIcon or FontIcon to be used inside the avatar.
     */
    icon: PropTypes.element,
    /**
     * This is the size of the avatar in pixels.
     */
    size: PropTypes.number,
    /**
     * If passed in, this component will render an img element. Otherwise, a div will be rendered.
     */
    src: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    size: 40,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      backgroundColor, // eslint-disable-line no-unused-vars
      icon,
      src,
      style,
      className,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    if (src) {
      return (
        <img
          style={prepareStyles(Object.assign(styles.root, style))}
          {...other}
          src={src}
          className={className}
        />
      );
    } else {
      return (
        <div
          {...other}
          style={prepareStyles(Object.assign(styles.root, style))}
          className={className}
        >
          {icon && React.cloneElement(icon, {
            color: styles.icon.color,
            style: Object.assign(styles.icon, icon.props.style),
          })}
          {this.props.children}
        </div>
      );
    }
  }
}

export default Avatar;
