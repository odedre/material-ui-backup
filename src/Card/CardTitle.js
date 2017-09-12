import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {card} = context.muiTheme;

  return {
    root: {
      padding: 16,
      position: 'relative',
    },
    title: {
      fontSize: 24,
      color: props.titleColor || card.titleColor,
      display: 'block',
      lineHeight: '36px',
    },
    subtitle: {
      fontSize: 14,
      color: props.subtitleColor || card.subtitleColor,
      display: 'block',
    },
  };
}

class CardTitle extends Component {
  static muiName = 'CardTitle';

  static propTypes = {
    /**
     * @property {PropTypes.bool} actAsExpander - If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - Can be used to render elements inside the Card Title.
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
     * @property {PropTypes.bool} showExpandableButton - If true, this card component will include a button to expand the card.
     */
    showExpandableButton: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.node} subtitle - Can be used to render a subtitle in the Card Title.
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
     * @property {PropTypes.node} title - Can be used to render a title in the Card Title.
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

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      children,
      closeIcon, // eslint-disable-line no-unused-vars
      expandable, // eslint-disable-line no-unused-vars
      showExpandableButton, // eslint-disable-line no-unused-vars
      style,
      subtitle,
      subtitleColor, // eslint-disable-line no-unused-vars
      subtitleStyle,
      title,
      titleColor, // eslint-disable-line no-unused-vars
      titleStyle,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign({}, styles.root, style);
    const extendedTitleStyle = Object.assign({}, styles.title, titleStyle);
    const extendedSubtitleStyle = Object.assign({}, styles.subtitle, subtitleStyle);

    return (
      <div {...other} style={prepareStyles(rootStyle)}>
        <span style={prepareStyles(extendedTitleStyle)}>
          {title}
        </span>
        <span style={prepareStyles(extendedSubtitleStyle)}>
          {subtitle}
        </span>
        {children}
      </div>
    );
  }
}

export default CardTitle;
