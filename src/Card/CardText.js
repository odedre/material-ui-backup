import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {cardText} = context.muiTheme;

  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor,
    },
  };
}

class CardText extends Component {
  static muiName = 'CardText';

  static propTypes = {
    /**
     * @property {PropTypes.bool} actAsExpander - If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - Can be used to render elements inside the Card Text.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} color - Override the CardText color.
     */
    color: PropTypes.bool,
    /**
     * @property {PropTypes.bool} expandable - If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      children,
      color, // eslint-disable-line no-unused-vars
      expandable, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign(styles.root, style);

    return (
      <div {...other} style={prepareStyles(rootStyle)}>
        {children}
      </div>
    );
  }
}

export default CardText;
