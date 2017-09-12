/** 
 * @description 
 * 
 * Toolbars are collections of components stacked horizontally against each other.
 * Toolbars provide greater versatility than AppBars which are a subset of toolbars. 
 * The following toolbar components can help organize your layout.
 * Also see https://material.io/guidelines/layout/structure.html#structure-toolbars
 * 
 * 
 * @example 
 * 
 * // An example Toolbar demonstrating the use of the available sub-components, and including a number of other Material-UI components, such as Drop Down Menu, Font Icon, Icon Menu and Raised Button.
 * 
 * 
 *  import React from 'react';
 *  import IconMenu from 'material-ui/IconMenu';
 *  import IconButton from 'material-ui/IconButton';
 *  import FontIcon from 'material-ui/FontIcon';
 *  import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
 *  import MenuItem from 'material-ui/MenuItem';
 *  import DropDownMenu from 'material-ui/DropDownMenu';
 *  import RaisedButton from 'material-ui/RaisedButton';
 *  import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
 *
 *  export default class ToolbarExamplesSimple extends React.Component {
 *
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       value: 3,
 *     };
 *   }
 *
 *   handleChange = (event, index, value) => this.setState({value});
 *
 *   render() {
 *    return (
 *       <Toolbar>
 *         <ToolbarGroup firstChild={true}>
 *           <DropDownMenu value={this.state.value} onChange={this.handleChange}>
 *             <MenuItem value={1} primaryText="All Broadcasts" />
 *             <MenuItem value={2} primaryText="All Voice" />
 *             <MenuItem value={3} primaryText="All Text" />
 *             <MenuItem value={4} primaryText="Complete Voice" />
 *             <MenuItem value={5} primaryText="Complete Text" />
 *             <MenuItem value={6} primaryText="Active Voice" />
 *             <MenuItem value={7} primaryText="Active Text" />
 *           </DropDownMenu>
 *         </ToolbarGroup>
 *         <ToolbarGroup>
 *           <ToolbarTitle text="Options" />
 *           <FontIcon className="muidocs-icon-custom-sort" />
 *           <ToolbarSeparator />
 *           <RaisedButton label="Create Broadcast" primary={true} />
 *           <IconMenu
 *             iconButtonElement={
 *               <IconButton touch={true}>
 *                 <NavigationExpandMoreIcon />
 *               </IconButton>
 *             }
 *           >
 *             <MenuItem primaryText="Download" />
 *             <MenuItem primaryText="More Info" />
 *           </IconMenu>&nbsp;
 *         </ToolbarGroup>
 *       </Toolbar>
 *     );
 *   }
 * }
 * 
 * 
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const {noGutter} = props;

  const {
    baseTheme,
    toolbar,
  } = context.muiTheme;

  return {
    root: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      backgroundColor: toolbar.backgroundColor,
      height: toolbar.height,
      padding: noGutter ? 0 : `0px ${baseTheme.spacing.desktopGutter}px`,
      display: 'flex',
      justifyContent: 'space-between',
    },
  };
}

class Toolbar extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} children - Can be a `ToolbarGroup` to render a group of related items.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.bool} noGutter - Do not apply `desktopGutter` to the `Toolbar`.
     */
    noGutter: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    noGutter: false,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      className,
      noGutter, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <div {...other} className={className} style={prepareStyles(Object.assign({}, styles.root, style))}>
        {children}
      </div>
    );
  }
}

export default Toolbar;
