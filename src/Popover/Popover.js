import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import EventListener from 'react-event-listener';
import RenderToLayer from '../internal/RenderToLayer';
import propTypes from '../utils/propTypes';
import Paper from '../Paper';
import throttle from 'lodash.throttle';
import PopoverAnimationDefault from './PopoverAnimationDefault';

const styles = {
  root: {
    display: 'none',
  },
};

/**
 * @description 
 * // A Popover can be used as an alternative to a Drop Down Menu that can contain elements inside. In our examples we are using a Menu, but any suitable combination of components can be used.
 *
 * @example 
 * 
 * // A simple example showing a Popover containing a Menu. It can be also closed by clicking away from the Popover.
 *
 * import React from 'react';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import Popover from 'material-ui/Popover';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class PopoverExampleSimple extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = (event) => {
 *     // This prevents ghost click.
 *     event.preventDefault();
 * 
 *     this.setState({
 *       open: true,
 *       anchorEl: event.currentTarget,
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
 *           label="Click me"
 *         />
 *         <Popover
 *           open={this.state.open}
 *           anchorEl={this.state.anchorEl}
 *           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *           targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *           onRequestClose={this.handleRequestClose}
 *         >
 *           <Menu>
 *             <MenuItem primaryText="Refresh" />
 *             <MenuItem primaryText="Help &amp; feedback" />
 *             <MenuItem primaryText="Settings" />
 *             <MenuItem primaryText="Sign out" />
 *           </Menu>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example
 * 
 * // The default animation style is to animate around the origin. An alternative animation can be applied using the animation property. Currently one alternative animation is available, popover-animation-from-top, which animates vertically.
 * 
 * import React from 'react';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class PopoverExampleAnimation extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = (event) => {
 *     // This prevents ghost click.
 *     event.preventDefault();
 * 
 *     this.setState({
 *       open: true,
 *       anchorEl: event.currentTarget,
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
 *           label="Click me"
 *         />
 *         <Popover
 *           open={this.state.open}
 *           anchorEl={this.state.anchorEl}
 *           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *           targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *           onRequestClose={this.handleRequestClose}
 *           animation={PopoverAnimationVertical}
 *         >
 *           <Menu>
 *             <MenuItem primaryText="Refresh" />
 *             <MenuItem primaryText="Help &amp; feedback" />
 *             <MenuItem primaryText="Settings" />
 *             <MenuItem primaryText="Sign out" />
 *           </Menu>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Use the radio buttons to adjust the anchorOrigin and targetOrigin positions.
 * 
 * import React from 'react';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import RadioButton from 'material-ui/RadioButton';
 * import Popover from 'material-ui/Popover/Popover';
 * import {Menu, MenuItem} from 'material-ui/Menu';
 * 
 * const styles = {
 *   h3: {
 *     marginTop: 20,
 *     fontWeight: 400,
 *   },
 *   block: {
 *     display: 'flex',
 *   },
 *   block2: {
 *     margin: 10,
 *   },
 *   pre: {
 *     overflow: 'hidden', // Fix a scrolling issue on iOS.
 *   },
 * };
 * 
 * export default class PopoverExampleConfigurable extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       open: false,
 *       anchorOrigin: {
 *         horizontal: 'left',
 *         vertical: 'bottom',
 *       },
 *       targetOrigin: {
 *         horizontal: 'left',
 *         vertical: 'top',
 *       },
 *     };
 *   }
 * 
 *   handleTouchTap = (event) => {
 *     // This prevents ghost click.
 *     event.preventDefault();
 *     this.setState({
 *       open: true,
 *       anchorEl: event.currentTarget,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   setAnchor = (positionElement, position) => {
 *     const {anchorOrigin} = this.state;
 *     anchorOrigin[positionElement] = position;
 * 
 *     this.setState({
 *       anchorOrigin: anchorOrigin,
 *     });
 *   };
 * 
 *   setTarget = (positionElement, position) => {
 *     const {targetOrigin} = this.state;
 *     targetOrigin[positionElement] = position;
 * 
 *     this.setState({
 *       targetOrigin: targetOrigin,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Click me"
 *         />
 *         <h3 style={styles.h3}>Current Settings</h3>
 *         <pre style={styles.pre}>
 *           anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
 *           <br />
 *           targetOrigin: {JSON.stringify(this.state.targetOrigin)}
 *         </pre>
 *         <h3 style={styles.h3}>Position Options</h3>
 *         <p>Use the settings below to toggle the positioning of the popovers above</p>
 *         <h3 style={styles.h3}>Anchor Origin</h3>
 *         <div style={styles.block}>
 *           <div style={styles.block2}>
 *             <span>Vertical</span>
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'vertical', 'top')}
 *               label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'vertical', 'center')}
 *               label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
 *               label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
 *             />
 *           </div>
 *           <div style={styles.block2}>
 *             <span>Horizontal</span>
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
 *               label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
 *               label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
 *               label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
 *             />
 *           </div>
 *         </div>
 *         <h3 style={styles.h3}>Target Origin</h3>
 *         <div style={styles.block}>
 *           <div style={styles.block2}>
 *             <span>Vertical</span>
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'vertical', 'top')}
 *               label="Top" checked={this.state.targetOrigin.vertical === 'top'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'vertical', 'center')}
 *               label="Center" checked={this.state.targetOrigin.vertical === 'center'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
 *               label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
 *             />
 *           </div>
 *           <div style={styles.block2}>
 *             <span>Horizontal</span>
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'horizontal', 'left')}
 *               label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
 *               label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'horizontal', 'right')}
 *               label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
 *             />
 *           </div>
 *         </div>
 *         <Popover
 *           open={this.state.open}
 *           anchorEl={this.state.anchorEl}
 *           anchorOrigin={this.state.anchorOrigin}
 *           targetOrigin={this.state.targetOrigin}
 *           onRequestClose={this.handleRequestClose}
 *         >
 *           <Menu>
 *             <MenuItem primaryText="Refresh" />
 *             <MenuItem primaryText="Help &amp; feedback" />
 *             <MenuItem primaryText="Settings" />
 *             <MenuItem primaryText="Sign out" />
 *           </Menu>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * } 
 * 
 * 
 * // The event.preventDefault(); in the examples above is to prevent an effect called ghost click that happens with touch-devices. It is recommended that you add that call whenever you handle a TouchTap event associated with closing/opening Popover.
 * 
 */

class Popover extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.object} anchorEl - This is the DOM element that will be used to set the position of the
     * popover.
     */
    anchorEl: PropTypes.object,
    /**
     * @property {PropTypes.origin} anchorOrigin - This is the point on the anchor where the popover's
     * `targetOrigin` will attach to.
     * Options:
     * vertical: [top, center, bottom]
     * horizontal: [left, middle, right].
     */
    anchorOrigin: propTypes.origin,
    /**
     * @property {PropTypes.bool} animated - If true, the popover will apply transitions when
     * it is added to the DOM.
     */
    animated: PropTypes.bool,
    /**
     * @property {PropTypes.func} animation - Override the default animation component used.
     */
    animation: PropTypes.func,
    /**
     * @property {PropTypes.bool} autoCloseWhenOffScreen - If true, the popover will hide when the anchor is scrolled off the screen.
     */
    autoCloseWhenOffScreen: PropTypes.bool,
    /**
     * @property {PropTypes.bool} canAutoPosition - If true, the popover (potentially) ignores `targetOrigin`
     * and `anchorOrigin` to make itself fit on screen,
     * which is useful for mobile devices.
     */
    canAutoPosition: PropTypes.bool,
    /**
     * @property {PropTypes.node} children - The content of the popover.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.func} onRequestClose - Callback function fired when the popover is requested to be closed.
     *
     * @param {string} reason The reason for the close request. Possibles values
     * are 'clickAway' and 'offScreen'.
     */
    onRequestClose: PropTypes.func,
    /**
     * @property {PropTypes.bool} open - If true, the popover is visible.
     */
    open: PropTypes.bool,
    /**
     * @property {object|string} scrollableContainer - Represents the parent scrollable container.
     * It can be an element or a string like `window`.
     */
    scrollableContainer: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.origin} targetOrigin - This is the point on the popover which will attach to
     * the anchor's origin.
     * Options:
     * vertical: [top, center, bottom]
     * horizontal: [left, middle, right].
     */
    targetOrigin: propTypes.origin,
    /**
     * @property {PropTypes.bool} useLayerForClickAway - If true, the popover will render on top of an invisible
     * layer, which will prevent clicks to the underlying
     * elements, and trigger an `onRequestClose('clickAway')` call.
     */
    useLayerForClickAway: PropTypes.bool,
    /**
     * @property {PropTypes.zDepth} zDepth - The zDepth of the popover.
     */
    zDepth: propTypes.zDepth,
  };

  static defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    animated: true,
    autoCloseWhenOffScreen: true,
    canAutoPosition: true,
    onRequestClose: () => {},
    open: false,
    scrollableContainer: 'window',
    style: {
      overflowY: 'auto',
    },
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    useLayerForClickAway: true,
    zDepth: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.handleResize = throttle(this.setPlacement, 100);
    this.handleScroll = throttle(this.setPlacement.bind(this, true), 50);

    this.popoverRefs = {};

    this.state = {
      open: props.open,
      closing: false,
    };
  }

  componentDidMount() {
    this.placementTimeout = setTimeout(this.setPlacement);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open === this.props.open) {
      return;
    }

    if (nextProps.open) {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
      this.setState({
        open: true,
        closing: false,
      });
    } else {
      if (nextProps.animated) {
        if (this.timeout !== null) return;
        this.setState({closing: true});
        this.timeout = setTimeout(() => {
          this.setState({
            open: false,
          }, () => {
            this.timeout = null;
          });
        }, 500);
      } else {
        this.setState({
          open: false,
        });
      }
    }
  }

  componentDidUpdate() {
    clearTimeout(this.placementTimeout);
    this.placementTimeout = setTimeout(this.setPlacement);
  }

  componentWillUnmount() {
    this.handleResize.cancel();
    this.handleScroll.cancel();

    if (this.placementTimeout) {
      clearTimeout(this.placementTimeout);
      this.placementTimeout = null;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  timeout = null;

  renderLayer = () => {
    const {
      animated,
      animation,
      anchorEl, // eslint-disable-line no-unused-vars
      anchorOrigin, // eslint-disable-line no-unused-vars
      autoCloseWhenOffScreen, // eslint-disable-line no-unused-vars
      canAutoPosition, // eslint-disable-line no-unused-vars
      children,
      onRequestClose, // eslint-disable-line no-unused-vars
      style,
      targetOrigin,
      useLayerForClickAway, // eslint-disable-line no-unused-vars
      scrollableContainer, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    let styleRoot = style;

    if (!animated) {
      styleRoot = {
        position: 'fixed',
        zIndex: this.context.muiTheme.zIndex.popover,
      };

      if (!this.state.open) {
        return null;
      }

      return (
        <Paper style={Object.assign(styleRoot, style)} {...other}>
          {children}
        </Paper>
      );
    }

    const Animation = animation || PopoverAnimationDefault;

    return (
      <Animation
        targetOrigin={targetOrigin}
        style={styleRoot}
        {...other}
        open={this.state.open && !this.state.closing}
      >
        {children}
      </Animation>
    );
  };

  requestClose(reason) {
    if (this.props.onRequestClose) {
      this.props.onRequestClose(reason);
    }
  }

  componentClickAway = () => {
    this.requestClose('clickAway');
  };

  getAnchorPosition(el) {
    if (!el) {
      el = ReactDOM.findDOMNode(this);
    }

    const rect = el.getBoundingClientRect();
    const a = {
      top: rect.top,
      left: rect.left,
      width: el.offsetWidth,
      height: el.offsetHeight,
    };

    a.right = rect.right || a.left + a.width;
    a.bottom = rect.bottom || a.top + a.height;
    a.middle = a.left + ((a.right - a.left) / 2);
    a.center = a.top + ((a.bottom - a.top) / 2);

    return a;
  }

  getTargetPosition(targetEl) {
    return {
      top: 0,
      center: targetEl.offsetHeight / 2,
      bottom: targetEl.offsetHeight,
      left: 0,
      middle: targetEl.offsetWidth / 2,
      right: targetEl.offsetWidth,
    };
  }

  setPlacement = (scrolling) => {
    if (!this.state.open) {
      return;
    }

    if (!this.popoverRefs.layer.getLayer()) {
      return;
    }

    const targetEl = this.popoverRefs.layer.getLayer().children[0];
    if (!targetEl) {
      return;
    }

    const {targetOrigin, anchorOrigin} = this.props;
    const anchorEl = this.props.anchorEl || this.anchorEl;

    const anchor = this.getAnchorPosition(anchorEl);
    let target = this.getTargetPosition(targetEl);

    let targetPosition = {
      top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
      left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal],
    };

    if (scrolling && this.props.autoCloseWhenOffScreen) {
      this.autoCloseWhenOffScreen(anchor);
    }

    if (this.props.canAutoPosition) {
      target = this.getTargetPosition(targetEl); // update as height may have changed
      targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
    }

    targetEl.style.top = `${targetPosition.top}px`;
    targetEl.style.left = `${targetPosition.left}px`;
    targetEl.style.maxHeight = `${window.innerHeight}px`;
  };

  autoCloseWhenOffScreen(anchorPosition) {
    if (anchorPosition.top < 0 ||
      anchorPosition.top > window.innerHeight ||
      anchorPosition.left < 0 ||
      anchorPosition.left > window.innerWidth) {
      this.requestClose('offScreen');
    }
  }

  getOverlapMode(anchor, target, median) {
    if ([anchor, target].indexOf(median) >= 0) return 'auto';
    if (anchor === target) return 'inclusive';
    return 'exclusive';
  }

  getPositions(anchor, target) {
    const a = {...anchor};
    const t = {...target};

    const positions = {
      x: ['left', 'right'].filter((p) => p !== t.horizontal),
      y: ['top', 'bottom'].filter((p) => p !== t.vertical),
    };

    const overlap = {
      x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
      y: this.getOverlapMode(a.vertical, t.vertical, 'center'),
    };

    positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
    positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

    if (overlap.y !== 'auto') {
      a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
      if (overlap.y === 'inclusive') {
        t.vertical = t.vertical;
      }
    }

    if (overlap.x !== 'auto') {
      a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
      if (overlap.y === 'inclusive') {
        t.horizontal = t.horizontal;
      }
    }

    return {
      positions: positions,
      anchorPos: a,
    };
  }

  applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
    const {positions, anchorPos} = this.getPositions(anchorOrigin, targetOrigin);

    if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
      let newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
      if (newTop + target.bottom <= window.innerHeight) {
        targetPosition.top = Math.max(0, newTop);
      } else {
        newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        }
      }
    }

    if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
      let newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
      if (newLeft + target.right <= window.innerWidth) {
        targetPosition.left = Math.max(0, newLeft);
      } else {
        newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        }
      }
    }

    return targetPosition;
  }

  render() {
    return (
      <div style={styles.root}>
        <EventListener
          target={this.props.scrollableContainer}
          onScroll={this.handleScroll}
          onResize={this.handleResize}
        />
        <RenderToLayer
          ref={(ref) => this.popoverRefs.layer = ref}
          open={this.state.open}
          componentClickAway={this.componentClickAway}
          useLayerForClickAway={this.props.useLayerForClickAway}
          render={this.renderLayer}
        />
      </div>
    );
  }
}

export default Popover;
