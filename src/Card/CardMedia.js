import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {cardMedia} = context.muiTheme;

  return {
    root: {
      position: 'relative',
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    overlay: {
      height: '100%',
      position: 'relative',
    },
    overlayContent: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      paddingTop: 8,
      background: cardMedia.overlayContentBackground,
    },
    media: {},
    mediaChild: {
      verticalAlign: 'top',
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%',
    },
  };
}

class CardMedia extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} actAsExpander - If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - Can be used to render elements inside the Card Media.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.bool} expandable - If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * @property {PropTypes.object} mediaStyle - Override the inline-styles of the Card Media.
     */
    mediaStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} overlay - Can be used to render overlay element in Card Media.
     */
    overlay: PropTypes.node,
    /**
     * @property {PropTypes.object} overlayContainerStyle - Override the inline-styles of the overlay container.
     */
    overlayContainerStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} overlayContentStyle - Override the inline-styles of the overlay content.
     */
    overlayContentStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} overlayStyle - Override the inline-styles of the overlay element.
     */
    overlayStyle: PropTypes.object,
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
      mediaStyle,
      overlay,
      overlayContainerStyle,
      overlayContentStyle,
      overlayStyle,
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign(styles.root, style);
    const extendedMediaStyle = Object.assign(styles.media, mediaStyle);
    const extendedOverlayContainerStyle = Object.assign(styles.overlayContainer, overlayContainerStyle);
    const extendedOverlayContentStyle = Object.assign(styles.overlayContent, overlayContentStyle);
    const extendedOverlayStyle = Object.assign(styles.overlay, overlayStyle);
    const titleColor = this.context.muiTheme.cardMedia.titleColor;
    const subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
    const color = this.context.muiTheme.cardMedia.color;

    const styledChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        style: prepareStyles(Object.assign({}, styles.mediaChild, child.props.style)),
      });
    });

    const overlayChildren = React.Children.map(overlay, (child) => {
      if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
        return React.cloneElement(child, {
          titleColor: titleColor,
          subtitleColor: subtitleColor,
        });
      } else if (child.type.muiName === 'CardText') {
        return React.cloneElement(child, {
          color: color,
        });
      } else {
        return child;
      }
    });

    return (
      <div {...other} style={prepareStyles(rootStyle)}>
        <div style={prepareStyles(extendedMediaStyle)}>
          {styledChildren}
        </div>
        {overlay ?
          <div style={prepareStyles(extendedOverlayContainerStyle)}>
            <div style={prepareStyles(extendedOverlayStyle)}>
              <div style={prepareStyles(extendedOverlayContentStyle)}>
                {overlayChildren}
              </div>
            </div>
          </div> : ''}
      </div>
    );
  }
}

export default CardMedia;
