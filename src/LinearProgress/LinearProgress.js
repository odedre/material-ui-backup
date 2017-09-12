import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transitions from '../styles/transitions';

function getRelativeValue(value, min, max) {
  const clampedValue = Math.min(Math.max(min, value), max);
  const rangeValue = max - min;
  const relValue = Math.round((clampedValue - min) / rangeValue * 10000) / 10000;
  return relValue * 100;
}

function getStyles(props, context) {
  const {
    max,
    min,
    value,
  } = props;

  const {baseTheme: {palette}, borderRadius} = context.muiTheme;

  const styles = {
    root: {
      position: 'relative',
      height: 4,
      display: 'block',
      width: '100%',
      backgroundColor: palette.primary3Color,
      borderRadius,
      margin: 0,
      overflow: 'hidden',
    },
    bar: {
      height: '100%',
    },
    barFragment1: {},
    barFragment2: {},
  };

  if (props.mode === 'indeterminate') {
    styles.barFragment1 = {
      position: 'absolute',
      backgroundColor: props.color || palette.primary1Color,
      top: 0,
      left: 0,
      bottom: 0,
      transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.650, 0.815, 0.735, 0.395)'),
    };

    styles.barFragment2 = {
      position: 'absolute',
      backgroundColor: props.color || palette.primary1Color,
      top: 0,
      left: 0,
      bottom: 0,
      transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'),
    };
  } else {
    styles.bar.backgroundColor = props.color || palette.primary1Color;
    styles.bar.transition = transitions.create('width', '.3s', null, 'linear');
    styles.bar.width = `${getRelativeValue(value, min, max)}%`;
  }

  return styles;
}

/**
 * @description 
 * Linear Progress bars fill from 0% to 100% to show the progress of a task. It also will animate to show there is a task waiting to be done.
 * 
 * Also see http://www.material-ui.com/#/components/linear-progress 
 * 
 * @example 
 * 
 * // By default, the indicator animates continuously.
 * 
 * import React from 'react';
 * import LinearProgress from 'material-ui/LinearProgress';
 *
 * const LinearProgressExampleSimple = () => (
 * <LinearProgress mode="indeterminate" />
 * );
 *
 * export default LinearProgressExampleSimple;
 * 
 * 
 * @example 
 * // In determinate mode, the indicator adjusts to show the percentage complete, as a ratio of value: max-min.
 * 
 * 
 * import React from 'react';
 * import LinearProgress from 'material-ui/LinearProgress';
 * 
 * export default class LinearProgressExampleDeterminate extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       completed: 0,
 *     };
 *   }
 * 
 *   componentDidMount() {
 *     this.timer = setTimeout(() => this.progress(5), 1000);
 *   }
 * 
 *   componentWillUnmount() {
 *     clearTimeout(this.timer);
 *   }
 * 
 *   progress(completed) {
 *     if (completed > 100) {
 *       this.setState({completed: 100});
 *     } else {
 *       this.setState({completed});
 *       const diff = Math.random() * 10;
 *       this.timer = setTimeout(() => this.progress(completed + diff), 1000);
 *     }
 *   }
 * 
 *   render() {
 *     return (
 *       <LinearProgress mode="determinate" value={this.state.completed} />
 *     );
 *   }
 * }
 * 
 */

class LinearProgress extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} color - color of the progress bar, defaults to
     * primary color of theme.
     */
    color: PropTypes.string,
    /**
     * @property {PropTypes.number} max - max value of progress, only works in determinate mode.
     */
    max: PropTypes.number,
    /**
     * @property {PropTypes.number} min - min value of progress, only works in determinate mode.
     */
    min: PropTypes.number,
    /**
     * @property {determinate|indeterminate} mode - mode of show your progress, indeterminate for when
     * there is no value for progress.
     */
    mode: PropTypes.oneOf(['determinate', 'indeterminate']),
    /**
     * @property {PropTypes.object} style - the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.number} value - value of progress, only works in determinate mode.
     */
    value: PropTypes.number,
  };

  static defaultProps = {
    mode: 'indeterminate',
    value: 0,
    min: 0,
    max: 100,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.timers = {};

    this.timers.bar1 = this.barUpdate('bar1', 0, this.refs.bar1, [
      [-35, 100],
      [100, -90],
    ], 0);

    this.timers.bar2 = setTimeout(() => {
      this.barUpdate('bar2', 0, this.refs.bar2, [
        [-200, 100],
        [107, -8],
      ], 0);
    }, 850);
  }

  componentWillUnmount() {
    clearTimeout(this.timers.bar1);
    clearTimeout(this.timers.bar2);
  }

  barUpdate(id, step, barElement, stepValues, timeToNextStep) {
    if (this.props.mode !== 'indeterminate') return;

    timeToNextStep = timeToNextStep || 420;
    step = step || 0;
    step %= 4;

    const right = this.context.muiTheme.isRtl ? 'left' : 'right';
    const left = this.context.muiTheme.isRtl ? 'right' : 'left';

    if (step === 0) {
      barElement.style[left] = `${stepValues[0][0]}%`;
      barElement.style[right] = `${stepValues[0][1]}%`;
    } else if (step === 1) {
      barElement.style.transitionDuration = '840ms';
    } else if (step === 2) {
      barElement.style[left] = `${stepValues[1][0]}%`;
      barElement.style[right] = `${stepValues[1][1]}%`;
    } else if (step === 3) {
      barElement.style.transitionDuration = '0ms';
    }
    this.timers[id] = setTimeout(() => this.barUpdate(id, step + 1, barElement, stepValues), timeToNextStep);
  }

  render() {
    const {
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
        <div style={prepareStyles(styles.bar)}>
          <div ref="bar1" style={prepareStyles(styles.barFragment1)} />
          <div ref="bar2" style={prepareStyles(styles.barFragment2)} />
        </div>
      </div>
    );
  }
}

export default LinearProgress;
