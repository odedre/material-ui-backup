import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {
    baseTheme,
    toolbar,
  } = context.muiTheme;

  return {
    root: {
      backgroundColor: toolbar.separatorColor,
      display: 'block',
      height: baseTheme.spacing.desktopGutterMore,
      marginLeft: baseTheme.spacing.desktopGutter,
      width: 1,
    },
  };
}

class ToolbarSeparator extends Component {
  static muiName = 'ToolbarSeparator';

  static propTypes = {
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
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
      className,
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <span {...other} className={className} style={prepareStyles(Object.assign({}, styles.root, style))} />
    );
  }
}

export default ToolbarSeparator;
