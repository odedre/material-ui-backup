import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {primary, secondary} = props;
  const {badge} = context.muiTheme;

  let badgeBackgroundColor;
  let badgeTextColor;

  if (primary) {
    badgeBackgroundColor = badge.primaryColor;
    badgeTextColor = badge.primaryTextColor;
  } else if (secondary) {
    badgeBackgroundColor = badge.secondaryColor;
    badgeTextColor = badge.secondaryTextColor;
  } else {
    badgeBackgroundColor = badge.color;
    badgeTextColor = badge.textColor;
  }

  const radius = 12;
  const radius2x = Math.floor(2 * radius);

  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      padding: `${radius2x}px ${radius2x}px ${radius}px ${radius}px`,
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      fontWeight: badge.fontWeight,
      fontSize: radius,
      width: radius2x,
      height: radius2x,
      borderRadius: '50%',
      backgroundColor: badgeBackgroundColor,
      color: badgeTextColor,
    },
  };
}

/**
 * @description This component generates a small badge to the top-right of its child(ren).
 * Also see http://www.material-ui.com/#/components/badge
 * 
 * @example 
 * // Two examples of badges containing text, using primary and secondary colors. The badge is applied to its children - an icon for the first example, and an [Icon Button](https://bitsrc.io/materialui/react-material-ui/buttons/icon-button) with tooltip for the second.
 * 
 * import React from 'react';
 * import Badge from 'material-ui/Badge';
 * import IconButton from 'material-ui/IconButton';
 * import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
 * 
 * const BadgeExampleSimple = () => (
 *   <div>
 *     <Badge
 *       badgeContent={4}
 *       primary={true}
 *     >
 *       <NotificationsIcon />
 *     </Badge>
 *     <Badge
 *       badgeContent={10}
 *       secondary={true}
 *       badgeStyle={{top: 12, right: 12}}
 *     >
 *       <IconButton tooltip="Notifications">
 *         <NotificationsIcon />
 *       </IconButton>
 *     </Badge>
 *   </div>
 * );
 * 
 * export default BadgeExampleSimple;
 * 
 * @example 
 * 
 * // Badges containing an Icon Button and text, applied to an icon, and text.
 * 
 * // For further info about Icon Button, go to https://bitsrc.io/materialui/react-material-ui/buttons/icon-button.
 * 
 * import React from 'react';
 * import Badge from 'material-ui/Badge';
 * import IconButton from 'material-ui/IconButton';
 * import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
 * import FolderIcon from 'material-ui/svg-icons/file/folder-open';
 * 
 * const BadgeExampleContent = () => (
 *   <div>
 *     <Badge
 *       badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
 *     >
 *       <FolderIcon />
 *     </Badge>
 *     <Badge
 *       badgeContent="&copy;"
 *       badgeStyle={{fontSize: 20}}
 *     >
 *       Company Name
 *     </Badge>
 *   </div>
 * );
 * 
 * export default BadgeExampleContent;
 * 
 */
class Badge extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node.isRequired} badgeContent - This is the content rendered within the badge.
     */
    badgeContent: PropTypes.node.isRequired,
    /**
     * @property {PropTypes.object} badgeStyle - Override the inline-styles of the badge element.
     */
    badgeStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} children - The badge will be added relativelty to this node.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.bool} primary - If true, the badge will use the primary badge colors.
     */
    primary: PropTypes.bool,
    /**
     * @property {PropTypes.bool} secondary - If true, the badge will use the secondary badge colors.
     */
    secondary: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    primary: false,
    secondary: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      badgeContent,
      badgeStyle,
      children,
      primary, // eslint-disable-line no-unused-vars
      secondary, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <div {...other} style={prepareStyles(Object.assign({}, styles.root, style))}>
        {children}
        <span style={prepareStyles(Object.assign({}, styles.badge, badgeStyle))}>
          {badgeContent}
        </span>
      </div>
    );
  }
}

export default Badge;
