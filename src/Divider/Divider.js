import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @description 
 * Dividers group and separate content within lists and page layouts. The divider is a thin rule, lightweight yet sufficient to distinguish content visually and spatially.
 * Also see http://www.material-ui.com/#/components/divider
 *  
 * @example 
 * // Here, Divider is used to separate [TextField](#) components. It defaults to "full-bleed" (full width).
 * // For more info on TextField, go to https://bitsrc.io/materialui/react-material-ui/TextField/Text-field
 * 
 * import React from 'react';
 * import Divider from 'material-ui/Divider';
 * import Paper from 'material-ui/Paper';
 * import TextField from 'material-ui/TextField';
 * 
 * const style = {
 *   marginLeft: 20,
 * };
 * 
 * const DividerExampleForm = () => (
 *   <Paper zDepth={2}>
 *     <TextField hintText="First name" style={style} underlineShow={false} />
 *     <Divider />
 *     <TextField hintText="Middle name" style={style} underlineShow={false} />
 *     <Divider />
 *     <TextField hintText="Last name" style={style} underlineShow={false} />
 *     <Divider />
 *     <TextField hintText="Email address" style={style} underlineShow={false} />
 *     <Divider />
 *   </Paper>
 * );
 * 
 * export default DividerExampleForm;
 * 
 * @example
 * 
 * // The inset parameter allows the divider to align with inset content, such as inset List components.
 * // For more info on List, go to https://bitsrc.io/materialui/react-material-ui/List/list
 * 
 * import React from 'react';
 * import Divider from 'material-ui/Divider';
 * import {List, ListItem} from 'material-ui/List';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * 
 * const DividerExampleList = () => (
 *   <MobileTearSheet height={250}>
 *     <List>
 *       <ListItem insetChildren={true} primaryText="Janet Perkins Bennet" />
 *       <ListItem insetChildren={true} primaryText="Peter Carlsson" />
 *     </List>
 *     <Divider inset={true} />
 *     <List>
 *       <ListItem insetChildren={true} primaryText="Aaron Bennet" />
 *       <ListItem insetChildren={true} primaryText="Abbey Christensen" />
 *     </List>
 *   </MobileTearSheet>
 * );
 * 
 * export default DividerExampleList;
 * 
 * 
 * @example 
 * 
 * // Divider can also be used in Menus.
 * // For more info on Menu, go to https://bitsrc.io/materialui/react-material-ui/Menu/menu
 * 
 * import React from 'react';
 * import Divider from 'material-ui/Divider';
 * import {Menu, MenuItem} from 'material-ui/Menu';
 * 
 * const style = {
 *   // Without this, the menu overflows the CodeExample container.
 *   float: 'left',
 * };
 * 
 * const DividerExampleMenu = () => (
 *   <Menu desktop={true} style={style}>
 *     <MenuItem primaryText="Settings" />
 *     <MenuItem primaryText="Help & feedback" />
 *     <Divider />
 *     <MenuItem primaryText="Sign out" />
 *   </Menu>
 * );
 * 
 * export default DividerExampleMenu;
 * 
 */

const Divider = (props, context) => {
  const {
    inset,
    style,
    ...other
  } = props;

  const {
    baseTheme,
    prepareStyles,
  } = context.muiTheme;

  const styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor,
    },
  };

  return (
    <hr {...other} style={prepareStyles(Object.assign(styles.root, style))} />
  );
};

Divider.muiName = 'Divider';

Divider.propTypes = {
  /**
   * @property {PropTypes.bool} inset - If true, the `Divider` will be indented.
   */
  inset: PropTypes.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

Divider.defaultProps = {
  inset: false,
};

Divider.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Divider;
