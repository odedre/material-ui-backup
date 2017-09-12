/**
 * @description 
 * 
 * Subheaders are special list tiles that delineate distinct sections of a list or grid list and are typically related to the current filtering or sorting criteria.
 * Also see http://www.material-ui.com/#/components/subheader 
 * 
 * @example 
 * 
 * Subheader used in a simple List.
 * 
 *
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import Avatar from 'material-ui/Avatar';
 * import {List, ListItem} from 'material-ui/List';
 * import Subheader from 'material-ui/Subheader';
 * import Divider from 'material-ui/Divider';
 * import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
 * 
 * const ListExampleChat = () => (
 *   <MobileTearSheet>
 *     <List>
 *       <Subheader>Recent chats</Subheader>
 *       <ListItem
 *         primaryText="Brendan Lim"
 *         leftAvatar={<Avatar src="images/ok-128.jpg" />}
 *         rightIcon={<CommunicationChatBubble />}
 *       />
 *       <ListItem
 *         primaryText="Eric Hoffman"
 *         leftAvatar={<Avatar src="images/kolage-128.jpg" />}
 *         rightIcon={<CommunicationChatBubble />}
 *       />
 *       <ListItem
 *         primaryText="Grace Ng"
 *         leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
 *         rightIcon={<CommunicationChatBubble />}
 *       />
 *       <ListItem
 *         primaryText="Kerem Suer"
 *         leftAvatar={<Avatar src="images/kerem-128.jpg" />}
 *         rightIcon={<CommunicationChatBubble />}
 *       />
 *       <ListItem
 *         primaryText="Raquel Parrado"
 *         leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
 *         rightIcon={<CommunicationChatBubble />}
 *       />
 *     </List>
 *     <Divider />
 *     <List>
 *       <Subheader>Previous chats</Subheader>
 *       <ListItem
 *         primaryText="Chelsea Otakan"
 *         leftAvatar={<Avatar src="images/chexee-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="James Anderson"
 *         leftAvatar={<Avatar src="images/jsa-128.jpg" />}
 *       />
 *     </List>
 *   </MobileTearSheet>
 * );
 * 
 * export default ListExampleChat;
 * 
 * 
 * @example 
 *  
 * // Inset Subheader used in a List.
 *
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import ActionInfo from 'material-ui/svg-icons/action/info';
 * import Divider from 'material-ui/Divider';
 * import Subheader from 'material-ui/Subheader';
 * import Avatar from 'material-ui/Avatar';
 * import FileFolder from 'material-ui/svg-icons/file/folder';
 * import ActionAssignment from 'material-ui/svg-icons/action/assignment';
 * import {blue500, yellow600} from 'material-ui/styles/colors';
 * import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
 * 
 * const ListExampleFolder = () => (
 *   <MobileTearSheet>
 *     <List>
 *       <Subheader inset={true}>Folders</Subheader>
 *       <ListItem
 *         leftAvatar={<Avatar icon={<FileFolder />} />}
 *         rightIcon={<ActionInfo />}
 *         primaryText="Photos"
 *         secondaryText="Jan 9, 2014"
 *       />
 *       <ListItem
 *         leftAvatar={<Avatar icon={<FileFolder />} />}
 *         rightIcon={<ActionInfo />}
 *         primaryText="Recipes"
 *         secondaryText="Jan 17, 2014"
 *       />
 *       <ListItem
 *         leftAvatar={<Avatar icon={<FileFolder />} />}
 *         rightIcon={<ActionInfo />}
 *         primaryText="Work"
 *         secondaryText="Jan 28, 2014"
 *       />
 *     </List>
 *     <Divider inset={true} />
 *     <List>
 *       <Subheader inset={true}>Files</Subheader>
 *       <ListItem
 *         leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
 *         rightIcon={<ActionInfo />}
 *         primaryText="Vacation itinerary"
 *         secondaryText="Jan 20, 2014"
 *       />
 *       <ListItem
 *         leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
 *         rightIcon={<ActionInfo />}
 *         primaryText="Kitchen remodel"
 *         secondaryText="Jan 10, 2014"
 *       />
 *     </List>
 *   </MobileTearSheet>
 * );
 * 
 * export default ListExampleFolder;
 * 
 * 
 * @example 
 * 
 * // Subheader used in a GridList.
 * 
 *
 * import React from 'react';
 * import {GridList, GridTile} from 'material-ui/GridList';
 * import IconButton from 'material-ui/IconButton';
 * import Subheader from 'material-ui/Subheader';
 * import StarBorder from 'material-ui/svg-icons/toggle/star-border';
 * 
 * const styles = {
 *   root: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *     justifyContent: 'space-around',
 *   },
 *   gridList: {
 *     width: 500,
 *     height: 450,
 *     overflowY: 'auto',
 *   },
 * };
 * 
 * const tilesData = [
 *   {
 *     img: 'images/grid-list/00-52-29-429_640.jpg',
 *     title: 'Breakfast',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/burger-827309_640.jpg',
 *     title: 'Tasty burger',
 *     author: 'pashminu',
 *   },
 *   {
 *     img: 'images/grid-list/camera-813814_640.jpg',
 *     title: 'Camera',
 *     author: 'Danson67',
 *   },
 *   {
 *     img: 'images/grid-list/morning-819362_640.jpg',
 *     title: 'Morning',
 *     author: 'fancycrave1',
 *   },
 *   {
 *     img: 'images/grid-list/hats-829509_640.jpg',
 *     title: 'Hats',
 *     author: 'Hans',
 *   },
 *   {
 *     img: 'images/grid-list/honey-823614_640.jpg',
 *     title: 'Honey',
 *     author: 'fancycravel',
 *   },
 *   {
 *     img: 'images/grid-list/vegetables-790022_640.jpg',
 *     title: 'Vegetables',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/water-plant-821293_640.jpg',
 *     title: 'Water plant',
 *     author: 'BkrmadtyaKarki',
 *   },
 * ];
 * 
 * const GridListExampleSimple = () => (
 *   <div style={styles.root}>
 *     <GridList
 *       cellHeight={180}
 *       style={styles.gridList}
 *     >
 *       <Subheader>December</Subheader>
 *       {tilesData.map((tile) => (
 *         <GridTile
 *           key={tile.img}
 *           title={tile.title}
 *           subtitle={<span>by <b>{tile.author}</b></span>}
 *           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
 *         >
 *           <img src={tile.img} />
 *         </GridTile>
 *       ))}
 *     </GridList>
 *   </div>
 * );
 * 
 * export default GridListExampleSimple; 
 * 
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';

const Subheader = (props, context) => {
  const {
    children,
    inset,
    style,
    ...other
  } = props;

  const {
    prepareStyles,
    subheader,
  } = context.muiTheme;

  const styles = {
    root: {
      boxSizing: 'border-box',
      color: subheader.color,
      fontSize: 14,
      fontWeight: subheader.fontWeight,
      lineHeight: '48px',
      paddingLeft: inset ? 72 : 16,
      width: '100%',
    },
  };

  return (
    <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
      {children}
    </div>
  );
};

Subheader.muiName = 'Subheader';

Subheader.propTypes = {
  /**
  children: PropTypes.node,
   * @property {PropTypes.node} fixedHeader - Node that will be placed inside the `Subheader`.
   */
  children: PropTypes.node,
  /**
   * @property {PropTypes.bool} inset - If true, the `Subheader` will be indented.
   */
  inset: PropTypes.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

Subheader.defaultProps = {
  inset: false,
};

Subheader.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Subheader;
