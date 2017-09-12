import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles() {
  return {
    root: {
      padding: 8,
      position: 'relative',
    },
    action: {
      marginRight: 8,
    },
  };
}

class CardActions extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} actAsExpander - If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - Can be used to render elements inside the Card Action.
     */
    children: PropTypes.node,
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
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      children,
      expandable, // eslint-disable-line no-unused-vars
      showExpandableButton, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    const styledChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: Object.assign({}, styles.action, child.props.style),
        });
      }
    });

    return (
      <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
        {styledChildren}
      </div>
    );
  }
}

export default CardActions;
