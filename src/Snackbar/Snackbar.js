

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';
import ClickAwayListener from '../internal/ClickAwayListener';
import SnackbarBody from './SnackbarBody';

function getStyles(props, context, state) {
  const {
    muiTheme: {
      baseTheme: {
        spacing: {
          desktopSubheaderHeight,
        },
      },
      zIndex,
    },
  } = context;

  const {open} = state;

  const styles = {
    root: {
      position: 'fixed',
      left: '50%',
      display: 'flex',
      bottom: 0,
      zIndex: zIndex.snackbar,
      visibility: open ? 'visible' : 'hidden',
      transform: open ?
        'translate(-50%, 0)' :
        `translate(-50%, ${desktopSubheaderHeight}px)`,
      transition: `${transitions.easeOut('400ms', 'transform')}, ${
        transitions.easeOut('400ms', 'visibility')}`,
    },
  };

  return styles;
}

/**
 * @description 
 * 
 * Snackbars provide lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action.
 * Also see http://www.material-ui.com/#/components/snackbar
 * 
 * @example
 * 
 * // Snackbar is a controlled component, and is displayed when open is true. Click away from the Snackbar to close it, or wait for autoHideDuration to expire.
 * 
 * import React from 'react';
 * import Snackbar from 'material-ui/Snackbar';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class SnackbarExampleSimple extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = () => {
 *     this.setState({
 *       open: true,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Add to my calendar"
 *         />
 *         <Snackbar
 *           open={this.state.open}
 *           message="Event added to your calendar"
 *           autoHideDuration={4000}
 *           onRequestClose={this.handleRequestClose}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // A single action can be added to the Snackbar, and triggers onActionTouchTap. Edit the textfield to change autoHideDuration
 * 
 * import React from 'react';
 * import Snackbar from 'material-ui/Snackbar';
 * import TextField from 'material-ui/TextField';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class SnackbarExampleSimple extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       autoHideDuration: 4000,
 *       message: 'Event added to your calendar',
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = () => {
 *     this.setState({
 *       open: true,
 *     });
 *   };
 * 
 *   handleActionTouchTap = () => {
 *     this.setState({
 *       open: false,
 *     });
 *     alert('Event removed from your calendar.');
 *   };
 * 
 *   handleChangeDuration = (event) => {
 *     const value = event.target.value;
 *     this.setState({
 *       autoHideDuration: value.length > 0 ? parseInt(value) : 0,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Add to my calendar"
 *         />
 *         <br />
 *         <TextField
 *           floatingLabelText="Auto Hide Duration in ms"
 *           value={this.state.autoHideDuration}
 *           onChange={this.handleChangeDuration}
 *         />
 *         <Snackbar
 *           open={this.state.open}
 *           message={this.state.message}
 *           action="undo"
 *           autoHideDuration={this.state.autoHideDuration}
 *           onActionTouchTap={this.handleActionTouchTap}
 *           onRequestClose={this.handleRequestClose}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Changing message causes the Snackbar to animate - it isn't necessary to close and reopen the Snackbar with the open prop.
 * 
 *
 * import React from 'react';
 * import Snackbar from 'material-ui/Snackbar';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class SnackbarExampleTwice extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       message: 'Event 1 added to your calendar',
 *       open: false,
 *     };
 *     this.timer = undefined;
 *   }
 * 
 *   componentWillUnMount() {
 *     clearTimeout(this.timer);
 *   }
 * 
 *   handleTouchTap = () => {
 *     this.setState({
 *       open: true,
 *     });
 * 
 *     this.timer = setTimeout(() => {
 *       this.setState({
 *         message: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
 *       });
 *     }, 1500);
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Add to my calendar two times"
 *         />
 *         <Snackbar
 *           open={this.state.open}
 *           message={this.state.message}
 *           action="undo"
 *           autoHideDuration={3000}
 *           onRequestClose={this.handleRequestClose}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 */

class Snackbar extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} action - The label for the action on the snackbar.
     */
    action: PropTypes.node,
    /**
     * @property {PropTypes.number} autoHideDuration - The number of milliseconds to wait before automatically dismissing.
     * If no value is specified the snackbar will dismiss normally.
     * If a value is provided the snackbar can still be dismissed normally.
     * If a snackbar is dismissed before the timer expires, the timer will be cleared.
     */
    autoHideDuration: PropTypes.number,
    /**
     * @property {PropTypes.object} bodyStyle - Override the inline-styles of the body element.
     */
    bodyStyle: PropTypes.object,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.object} contentStyle - Override the inline-styles of the content element.
     */
    contentStyle: PropTypes.object,
    /**
     * @property {PropTypes.node.isRequired} message - The message to be displayed.
     *
     * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
     * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
     * showing again)
     */
    message: PropTypes.node.isRequired,
    /**
     * @property {PropTypes.func} onActionTouchTap - Fired when the action button is touchtapped.
     *
     * @param {object} event Action button event.
     */
    onActionTouchTap: PropTypes.func,
    /**
     * @property {PropTypes.func} onRequestClose - Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
     * `autoHideDuration` timer expires.
     *
     * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
     * `open` prop.
     *
     * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
     * for example ignoring `clickaway`.
     *
     * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
     */
    onRequestClose: PropTypes.func,
    /**
     * @property {PropTypes.bool.isRequired} open - Controls whether the `Snackbar` is opened or not.
     */
    open: PropTypes.bool.isRequired,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.setState({
      open: this.props.open,
      message: this.props.message,
      action: this.props.action,
    });
  }

  componentDidMount() {
    if (this.state.open) {
      this.setAutoHideTimer();
      this.setTransitionTimer();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open && nextProps.open &&
        (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
      this.setState({
        open: false,
      });

      clearTimeout(this.timerOneAtTheTimeId);
      this.timerOneAtTheTimeId = setTimeout(() => {
        this.setState({
          message: nextProps.message,
          action: nextProps.action,
          open: true,
        });
      }, 400);
    } else {
      const open = nextProps.open;

      this.setState({
        open: open !== null ? open : this.state.open,
        message: nextProps.message,
        action: nextProps.action,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.setAutoHideTimer();
        this.setTransitionTimer();
      } else {
        clearTimeout(this.timerAutoHideId);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerAutoHideId);
    clearTimeout(this.timerTransitionId);
    clearTimeout(this.timerOneAtTheTimeId);
  }

  componentClickAway = () => {
    if (this.timerTransitionId) {
      // If transitioning, don't close the snackbar.
      return;
    }

    if (this.props.open !== null && this.props.onRequestClose) {
      this.props.onRequestClose('clickaway');
    } else {
      this.setState({open: false});
    }
  };

  // Timer that controls delay before snackbar auto hides
  setAutoHideTimer() {
    const autoHideDuration = this.props.autoHideDuration;

    if (autoHideDuration > 0) {
      clearTimeout(this.timerAutoHideId);
      this.timerAutoHideId = setTimeout(() => {
        if (this.props.open !== null && this.props.onRequestClose) {
          this.props.onRequestClose('timeout');
        } else {
          this.setState({open: false});
        }
      }, autoHideDuration);
    }
  }

  // Timer that controls delay before click-away events are captured (based on when animation completes)
  setTransitionTimer() {
    this.timerTransitionId = setTimeout(() => {
      this.timerTransitionId = undefined;
    }, 400);
  }

  render() {
    const {
      autoHideDuration, // eslint-disable-line no-unused-vars
      contentStyle,
      bodyStyle,
      message: messageProp, // eslint-disable-line no-unused-vars
      onRequestClose, // eslint-disable-line no-unused-vars
      onActionTouchTap,
      style,
      ...other
    } = this.props;

    const {
      action,
      message,
      open,
    } = this.state;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    return (
      <ClickAwayListener onClickAway={open ? this.componentClickAway : null}>
        <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
          <SnackbarBody
            action={action}
            contentStyle={contentStyle}
            message={message}
            open={open}
            onActionTouchTap={onActionTouchTap}
            style={bodyStyle}
          />
        </div>
      </ClickAwayListener>
    );
  }
}

export default Snackbar;
