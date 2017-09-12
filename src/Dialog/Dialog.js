import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import EventListener from 'react-event-listener';
import keycode from 'keycode';
import transitions from '../styles/transitions';
import Overlay from '../internal/Overlay';
import RenderToLayer from '../internal/RenderToLayer';
import Paper from '../Paper';

import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

class TransitionItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    style: {},
  };

  componentWillUnmount() {
    clearTimeout(this.enterTimeout);
    clearTimeout(this.leaveTimeout);
  }

  componentWillEnter(callback) {
    this.componentWillAppear(callback);
  }

  componentWillAppear(callback) {
    const spacing = this.context.muiTheme.baseTheme.spacing;

    this.setState({
      style: {
        opacity: 1,
        transform: `translate(0, ${spacing.desktopKeylineIncrement}px)`,
      },
    });

    this.enterTimeout = setTimeout(callback, 450); // matches transition duration
  }

  componentWillLeave(callback) {
    this.setState({
      style: {
        opacity: 0,
        transform: 'translate(0, 0)',
      },
    });

    this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
  }

  render() {
    const {
      style,
      children,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;

    return (
      <div {...other} style={prepareStyles(Object.assign({}, this.state.style, style))}>
        {children}
      </div>
    );
  }
}

function getStyles(props, context) {
  const {
    autoScrollBodyContent,
    open,
  } = props;

  const {
    baseTheme: {
      spacing,
      palette,
    },
    dialog,
    zIndex,
  } = context.muiTheme;

  const gutter = spacing.desktopGutter;
  const borderScroll = `1px solid ${palette.borderColor}`;

  return {
    root: {
      position: 'fixed',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: '100%',
      height: '100%',
      transition: open ?
        transitions.easeOut('0ms', 'left', '0ms') :
        transitions.easeOut('0ms', 'left', '450ms'),
    },
    content: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      transition: transitions.easeOut(),
      position: 'relative',
      width: '75%',
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: '0 auto',
      zIndex: zIndex.dialog,
    },
    actionsContainer: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 8,
      width: '100%',
      textAlign: 'right',
      marginTop: autoScrollBodyContent ? -1 : 0,
    },
    overlay: {
      zIndex: zIndex.dialogOverlay,
    },
    title: {
      margin: 0,
      padding: `${gutter}px ${gutter}px 20px ${gutter}px`,
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: '32px',
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0,
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: `${props.title ? 0 : gutter}px ${gutter}px ${gutter}px`,
      boxSizing: 'border-box',
      overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
      borderTop: autoScrollBodyContent ? borderScroll : 'none',
      borderBottom: autoScrollBodyContent ? borderScroll : 'none',
    },
  };
}

class DialogInline extends Component {
  static propTypes = {
    actions: PropTypes.node,
    actionsContainerClassName: PropTypes.string,
    actionsContainerStyle: PropTypes.object,
    autoDetectWindowHeight: PropTypes.bool,
    autoScrollBodyContent: PropTypes.bool,
    bodyClassName: PropTypes.string,
    bodyStyle: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    modal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    paperClassName: PropTypes.string,
    paperProps: PropTypes.object,
    repositionOnUpdate: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    titleStyle: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.positionDialog();
  }

  componentDidUpdate() {
    this.positionDialog();
  }

  positionDialog() {
    const {
      actions,
      autoDetectWindowHeight,
      autoScrollBodyContent,
      bodyStyle,
      open,
      repositionOnUpdate,
      title,
    } = this.props;

    if (!open) {
      return;
    }

    const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const container = ReactDOM.findDOMNode(this);
    const dialogWindow = ReactDOM.findDOMNode(this.refs.dialogWindow);
    const dialogContent = ReactDOM.findDOMNode(this.refs.dialogContent);
    const minPaddingTop = 16;

    // Reset the height in case the window was resized.
    dialogWindow.style.height = '';
    dialogContent.style.height = '';

    const dialogWindowHeight = dialogWindow.offsetHeight;
    let paddingTop = ((clientHeight - dialogWindowHeight) / 2) - 64;
    if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

    // Vertically center the dialog window, but make sure it doesn't
    // transition to that position.
    if (repositionOnUpdate || !container.style.paddingTop) {
      container.style.paddingTop = `${paddingTop}px`;
    }

    // Force a height if the dialog is taller than clientHeight
    if (autoDetectWindowHeight || autoScrollBodyContent) {
      const styles = getStyles(this.props, this.context);
      styles.body = Object.assign(styles.body, bodyStyle);
      let maxDialogContentHeight = clientHeight - 2 * 64;

      if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

      if (React.Children.count(actions)) {
        maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
      }

      dialogContent.style.maxHeight = `${maxDialogContentHeight}px`;
      if (maxDialogContentHeight > dialogWindowHeight) {
        dialogContent.style.borderBottom = 'none';
        dialogContent.style.borderTop = 'none';
      }
    }
  }

  requestClose(buttonClicked) {
    if (!buttonClicked && this.props.modal) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  }

  handleTouchTapOverlay = () => {
    this.requestClose(false);
  };

  handleKeyUp = (event) => {
    if (keycode(event) === 'esc') {
      this.requestClose(false);
    }
  };

  handleResize = () => {
    this.positionDialog();
  };

  render() {
    const {
      actions,
      actionsContainerClassName,
      actionsContainerStyle,
      bodyClassName,
      bodyStyle,
      children,
      className,
      contentClassName,
      contentStyle,
      overlayClassName,
      overlayStyle,
      open,
      paperClassName,
      paperProps,
      style,
      titleClassName,
      titleStyle,
      title,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    styles.root = Object.assign(styles.root, style);
    styles.content = Object.assign(styles.content, contentStyle);
    styles.body = Object.assign(styles.body, bodyStyle);
    styles.actionsContainer = Object.assign(styles.actionsContainer, actionsContainerStyle);
    styles.overlay = Object.assign(styles.overlay, overlayStyle);
    styles.title = Object.assign(styles.title, titleStyle);

    const actionsContainer = React.Children.count(actions) > 0 && (
      <div className={actionsContainerClassName} style={prepareStyles(styles.actionsContainer)}>
        {React.Children.toArray(actions)}
      </div>
    );

    let titleElement = title;
    if (React.isValidElement(title)) {
      titleElement = React.cloneElement(title, {
        className: title.props.className || titleClassName,
        style: prepareStyles(Object.assign(styles.title, title.props.style)),
      });
    } else if (typeof title === 'string') {
      titleElement = (
        <h3 className={titleClassName} style={prepareStyles(styles.title)}>
          {title}
        </h3>
      );
    }

    return (
      <div className={className} style={prepareStyles(styles.root)}>
        {open &&
          <EventListener
            target="window"
            onKeyUp={this.handleKeyUp}
            onResize={this.handleResize}
          />
        }
        <ReactTransitionGroup
          component="div"
          ref="dialogWindow"
          transitionAppear={true}
          transitionAppearTimeout={450}
          transitionEnter={true}
          transitionEnterTimeout={450}
        >
          {open &&
            <TransitionItem
              className={contentClassName}
              style={styles.content}
            >
              <Paper className={paperClassName} zDepth={4} {...paperProps}>
                {titleElement}
                <div
                  ref="dialogContent"
                  className={bodyClassName}
                  style={prepareStyles(styles.body)}
                >
                  {children}
                </div>
                {actionsContainer}
              </Paper>
            </TransitionItem>
          }
        </ReactTransitionGroup>
        <Overlay
          show={open}
          className={overlayClassName}
          style={styles.overlay}
          onClick={this.handleTouchTapOverlay}
        />
      </div>
    );
  }
}

/**
 * @description Dialogs contain text and UI controls focused on a specific task. They inform users about critical information, require users to make decisions, or involve multiple tasks.
 * Also see https://www.google.com/design/spec/components/dialogs.html
 * 
 * Dialog can only be a controlled component. You must provide the open prop and handle onRequestClose in order to use this component.
 * 
 * @example  
 * // Dialog with action buttons. The actions are passed in as an array of React objects, in this example FlatButtons.
 * 
 * // You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 * 
 * // For more info on FlatButtons, go to https://bitsrc.io/materialui/react-material-ui/buttons/flat-button
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class DialogExampleSimple extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         keyboardFocused={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Dialog" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Actions"
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *         >
 *           The actions in this window were passed in as an array of React objects.
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example
 *  
 * // A modal dialog can only be closed by selecting one of the actions.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class DialogExampleModal extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         disabled={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Actions"
 *           actions={actions}
 *           modal={true}
 *           open={this.state.open}
 *         >
 *           Only actions can close this dialog.
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * const customContentStyle = {
 *   width: '100%',
 *   maxWidth: 'none',
 * };
 * 
 * export default class DialogExampleCustomWidth extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Custom Width"
 *           actions={actions}
 *           modal={true}
 *           contentStyle={customContentStyle}
 *           open={this.state.open}
 *         >
 *           This dialog spans the entire width of the screen.
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * export default class DialogExampleDialogDatePicker extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Ok"
 *         primary={true}
 *         keyboardFocused={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Date Picker"
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *         >
 *           Open a Date Picker dialog from within a dialog.
 *           <DatePicker hintText="Date Picker" />
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Dialog content can be scrollable.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
 * 
 * const styles = {
 *   radioButton: {
 *     marginTop: 16,
 *   },
 * };
 * 
 * export default class DialogExampleScrollable extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         keyboardFocused={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     const radios = [];
 *     for (let i = 0; i < 30; i++) {
 *       radios.push(
 *         <RadioButton
 *           key={i}
 *           value={`value${i + 1}`}
 *           label={`Option ${i + 1}`}
 *           style={styles.radioButton}
 *         />
 *       );
 *     }
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Scrollable Dialog"
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *           autoScrollBodyContent={true}
 *         >
 *           <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
 *             {radios}
 *           </RadioButtonGroup>
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * 
 * @example 
 * // Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class DialogExampleAlert extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Discard"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Alert" onClick={this.handleOpen} />
 *         <Dialog
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *         >
 *           Discard draft?
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 */
class Dialog extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} actions - Action buttons to display below the Dialog content (`children`).
     * This property accepts either a React element, or an array of React elements.
     */
    actions: PropTypes.node,
    /**
     * @property {PropTypes.string} actionsContainerClassName - The `className` to add to the actions container's root element.
     */
    actionsContainerClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} actionsContainerStyle - Overrides the inline-styles of the actions container's root element.
     */
    actionsContainerStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} autoDetectWindowHeight - If set to true, the height of the `Dialog` will be auto detected. A max height
     * will be enforced so that the content does not extend beyond the viewport.
     */
    autoDetectWindowHeight: PropTypes.bool,
    /**
     * @property {PropTypes.bool} autoScrollBodyContent - If set to true, the body content of the `Dialog` will be scrollable.
     */
    autoScrollBodyContent: PropTypes.bool,
    /**
     * @property {PropTypes.string} bodyClassName - The `className` to add to the content's root element under the title.
     */
    bodyClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} bodyStyle - Overrides the inline-styles of the content's root element under the title.
     */
    bodyStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} containerStyle - The contents of the `Dialog`.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.string} contentClassName - The `className` to add to the content container.
     */
    contentClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} contentStyle - Overrides the inline-styles of the content container.
     */
    contentStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} modal - Force the user to use one of the actions in the `Dialog`.
     * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
     */
    modal: PropTypes.bool,
    /**
     * @property {PropTypes.func} onRequestClose - Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
     *
     * @param {bool} buttonClicked Determines whether a button click triggered this request.
     */
    onRequestClose: PropTypes.func,
    /**
     * @property {PropTypes.bool.isRequired} open - Controls whether the Dialog is opened or not.
     */
    open: PropTypes.bool.isRequired,
    /**
     * @property {PropTypes.string} overlayClassName - The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
     */
    overlayClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} overlayStyle - Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
     */
    overlayStyle: PropTypes.object,
    /**
     * @property {PropTypes.string} paperClassName - The CSS class name of the `Paper` element.
     */
    paperClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} paperProps - Properties applied to the `Paper` element.
     */
    paperProps: PropTypes.object,
    /**
     * @property {PropTypes.bool} repositionOnUpdate - Determines whether the `Dialog` should be repositioned when it's contents are updated.
     */
    repositionOnUpdate: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.node} title - The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
     */
    title: PropTypes.node,
    /**
     * @property {PropTypes.string} titleClassName - The `className` to add to the title's root container element.
     */
    titleClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} titleStyle - Overrides the inline-styles of the title's root container element.
     */
    titleStyle: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    autoDetectWindowHeight: true,
    autoScrollBodyContent: false,
    modal: false,
    repositionOnUpdate: true,
  };

  renderLayer = () => {
    return (
      <DialogInline {...this.props} />
    );
  };

  render() {
    return (
      <RenderToLayer render={this.renderLayer} open={true} useLayerForClickAway={false} />
    );
  }
}

export default Dialog;