import React, {Component, isValidElement} from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

function getStyles(props, context) {
  const {card} = context.muiTheme;

  return {
    root: {
      padding: 16,
      fontWeight: card.fontWeight,
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap',
    },
    text: {
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      paddingRight: '90px',
    },
    avatar: {
      marginRight: 16,
    },
    title: {
      color: props.titleColor || card.titleColor,
      display: 'block',
      fontSize: 15,
    },
    subtitle: {
      color: props.subtitleColor || card.subtitleColor,
      display: 'block',
      fontSize: 14,
    },
  };
}

class CardHeader extends Component {
  static muiName = 'CardHeader';

  static propTypes = {
    /**
     * @property {PropTypes.bool} actAsExpander - If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * @property {PropTypes.node} avatar - This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
     * If `avatar` is an `Avatar` or other element, it will be rendered.
     * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
     */
    avatar: PropTypes.node,
    /**
     * @property {PropTypes.node} children - Can be used to render elements inside the Card Header.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.node} closeIcon - Can be used to pass a closeIcon if you don't like the default expandable close Icon.
     */
    closeIcon: PropTypes.node,
    /**
     * @property {PropTypes.bool} expandable - If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * @property {PropTypes.object} iconStyle - Override the iconStyle of the Icon Button.
     */
    iconStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} openIcon - Can be used to pass a openIcon if you don't like the default expandable open Icon.
     */
    openIcon: PropTypes.node,
    /**
     * @property {PropTypes.bool} showExpandableButton - If true, this card component will include a button to expand the card.
     */
    showExpandableButton: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.node} subtitle - Can be used to render a subtitle in Card Header.
     */
    subtitle: PropTypes.node,
    /**
     * @property {PropTypes.string} subtitleColor - Override the subtitle color.
     */
    subtitleColor: PropTypes.string,
    /**
     * @property {PropTypes.object} subtitleStyle - Override the inline-styles of the subtitle.
     */
    subtitleStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} textStyle - Override the inline-styles of the text.
     */
    textStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} title - Can be used to render a title in Card Header.
     */
    title: PropTypes.node,
    /**
     * @property {PropTypes.string} titleColor - Override the title color.
     */
    titleColor: PropTypes.string,
    /**
     * @property {PropTypes.object} titleStyle - Override the inline-styles of the title.
     */
    titleStyle: PropTypes.object,
  };

  static defaultProps = {
    avatar: null,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      avatar: avatarProp,
      children,
      closeIcon, // eslint-disable-line no-unused-vars
      expandable, // eslint-disable-line no-unused-vars
      openIcon, // eslint-disable-line no-unused-vars
      showExpandableButton, // eslint-disable-line no-unused-vars
      style,
      subtitle,
      subtitleColor, // eslint-disable-line no-unused-vars
      subtitleStyle,
      textStyle,
      title,
      titleColor, // eslint-disable-line no-unused-vars
      titleStyle,
      iconStyle, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    let avatar = avatarProp;

    if (isValidElement(avatarProp)) {
      avatar = React.cloneElement(avatar, {
        style: Object.assign(styles.avatar, avatar.props.style),
      });
    } else if (avatar !== null) {
      avatar = <Avatar src={avatarProp} style={styles.avatar} />;
    }

    return (
      <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
        {avatar}
        <div style={prepareStyles(Object.assign(styles.text, textStyle))}>
          <span style={prepareStyles(Object.assign(styles.title, titleStyle))}>
            {title}
          </span>
          <span style={prepareStyles(Object.assign(styles.subtitle, subtitleStyle))}>
            {subtitle}
          </span>
        </div>
        {children}
      </div>
    );
  }
}

export default CardHeader;
