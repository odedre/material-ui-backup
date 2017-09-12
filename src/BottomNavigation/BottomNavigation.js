import React, {Children, cloneElement} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {
    bottomNavigation,
  } = context.muiTheme;

  const styles = {
    root: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bottomNavigation.backgroundColor,
      height: bottomNavigation.height,
    },
    item: {
      flex: '1',
    },
  };

  return styles;
}

/**
 * @description The bottom navigation is a special kind of toolbar that’s used for navigation.
 * Also see https://www.google.com/design/spec/components/bottom-navigation.html#bottom-navigation-behavior
 * 
 * @example 
 * 
 * // A simple example of `BottomNavigation`, with three labels and icons provided. The selected `BottomNavigationItem` is determined by application state (for instance, by the URL).
 * 
 * import React, {Component} from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
 * import Paper from 'material-ui/Paper';
 * import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
 * 
 * const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
 * const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
 * const nearbyIcon = <IconLocationOn />;
 * 
 * class BottomNavigationExampleSimple extends Component {
 *   state = {
 *     selectedIndex: 0,
 *   };
 * 
 *   select = (index) => this.setState({selectedIndex: index});
 * 
 *   render() {
 *     return (
 *       <Paper zDepth={1}>
 *         <BottomNavigation selectedIndex={this.state.selectedIndex}>
 *           <BottomNavigationItem
 *             label="Recents"
 *             icon={recentsIcon}
 *             onClick={() => this.select(0)}
 *           />
 *           <BottomNavigationItem
 *             label="Favorites"
 *             icon={favoritesIcon}
 *             onClick={() => this.select(1)}
 *           />
 *           <BottomNavigationItem
 *             label="Nearby"
 *             icon={nearbyIcon}
 *             onClick={() => this.select(2)}
 *           />
 *         </BottomNavigation>
 *       </Paper>
 *     );
 *   }
 * }
 * 
 * export default BottomNavigationExampleSimple;
 * 
 */
const BottomNavigation = (props, context) => {
  const {
    children,
    style,
    selectedIndex,
    ...other
  } = props;

  const {prepareStyles} = context.muiTheme;
  const styles = getStyles(props, context);

  const preparedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, {
      style: Object.assign({}, styles.item, child.props.style),
      selected: index === selectedIndex,
    });
  });

  return (
    <div {...other} style={prepareStyles(Object.assign({}, styles.root, style))}>
      {preparedChildren}
    </div>
  );
};

BottomNavigation.propTypes = {
  /**
   * @property {PropTypes.node} children - The `BottomNavigationItem`s to populate the element with.
   */
  children: PropTypes.node,
  /**
   * @property {PropTypes.number} selectedIndex - The index of the currently selected navigation item.
   */
  selectedIndex: PropTypes.number,
  /**
   * @ignore
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

BottomNavigation.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default BottomNavigation;
