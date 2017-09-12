/**
 * @description 
 * Lists are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc.
 * Also see http://www.material-ui.com/#/components/list
 * 
 * @example 
 * // A simple List with left and right SVG icons.
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import ContentInbox from 'material-ui/svg-icons/content/inbox';
 * import ActionGrade from 'material-ui/svg-icons/action/grade';
 * import ContentSend from 'material-ui/svg-icons/content/send';
 * import ContentDrafts from 'material-ui/svg-icons/content/drafts';
 * import Divider from 'material-ui/Divider';
 * import ActionInfo from 'material-ui/svg-icons/action/info';
 * 
 * const ListExampleSimple = () => (
 *   <MobileTearSheet>
 *     <List>
 *       <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
 *       <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
 *       <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
 *       <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
 *       <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
 *     </List>
 *     <Divider />
 *     <List>
 *       <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
 *       <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
 *       <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
 *       <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
 *     </List>
 *   </MobileTearSheet>
 * );
 * 
 * export default ListExampleSimple;
 * 
 * 
 * @example 
 * // A chat list with Image Avatars and Subheader.
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
 * // Similar to the Chat List example, but with Text Avatars (with transparent background) for section labeling, and an inset Divider.
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import ActionGrade from 'material-ui/svg-icons/action/grade';
 * import Divider from 'material-ui/Divider';
 * import Avatar from 'material-ui/Avatar';
 * import {pinkA200, transparent} from 'material-ui/styles/colors';
 * 
 * const ListExampleContacts = () => (
 *   <MobileTearSheet>
 *     <List>
 *       <ListItem
 *         primaryText="Chelsea Otakan"
 *         leftIcon={<ActionGrade color={pinkA200} />}
 *         rightAvatar={<Avatar src="images/chexee-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="Eric Hoffman"
 *         insetChildren={true}
 *         rightAvatar={<Avatar src="images/kolage-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="James Anderson"
 *         insetChildren={true}
 *         rightAvatar={<Avatar src="images/jsa-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="Kerem Suer"
 *         insetChildren={true}
 *         rightAvatar={<Avatar src="images/kerem-128.jpg" />}
 *       />
 *     </List>
 *     <Divider inset={true} />
 *     <List>
 *       <ListItem
 *         primaryText="Adelle Charles"
 *         leftAvatar={
 *           <Avatar
 *             color={pinkA200} backgroundColor={transparent}
 *             style={{left: 8}}
 *           >
 *             A
 *           </Avatar>
 *         }
 *         rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="Adham Dannaway"
 *         insetChildren={true}
 *         rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="Allison Grayce"
 *         insetChildren={true}
 *         rightAvatar={<Avatar src="images/allisongrayce-128.jpg" />}
 *       />
 *       <ListItem
 *         primaryText="Angel Ceballos"
 *         insetChildren={true}
 *         rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
 *       />
 *     </List>
 *   </MobileTearSheet>
 * );
 * 
 * export default ListExampleContacts;
 * 
 * 
 * @example
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
 * // This example introduces the ListItem nestedItems property. "Sent Mail" is disabled.
 * 
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import ActionGrade from 'material-ui/svg-icons/action/grade';
 * import ContentInbox from 'material-ui/svg-icons/content/inbox';
 * import ContentDrafts from 'material-ui/svg-icons/content/drafts';
 * import ContentSend from 'material-ui/svg-icons/content/send';
 * import Subheader from 'material-ui/Subheader';
 * import Toggle from 'material-ui/Toggle';
 * 
 * export default class ListExampleNested extends React.Component {
 * 
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleToggle = () => {
 *     this.setState({
 *       open: !this.state.open,
 *     });
 *   };
 * 
 *   handleNestedListToggle = (item) => {
 *     this.setState({
 *       open: item.state.open,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <Toggle
 *           toggled={this.state.open}
 *           onToggle={this.handleToggle}
 *           labelPosition="right"
 *           label="This toggle controls the expanded state of the submenu item."
 *         />
 *         <br />
 *         <MobileTearSheet>
 *           <List>
 *             <Subheader>Nested List Items</Subheader>
 *             <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
 *             <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
 *             <ListItem
 *               primaryText="Inbox"
 *               leftIcon={<ContentInbox />}
 *               initiallyOpen={true}
 *               primaryTogglesNestedList={true}
 *               nestedItems={[
 *                 <ListItem
 *                   key={1}
 *                   primaryText="Starred"
 *                   leftIcon={<ActionGrade />}
 *                 />,
 *                 <ListItem
 *                   key={2}
 *                   primaryText="Sent Mail"
 *                   leftIcon={<ContentSend />}
 *                   disabled={true}
 *                   nestedItems={[
 *                     <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
 *                   ]}
 *                 />,
 *                 <ListItem
 *                   key={3}
 *                   primaryText="Inbox"
 *                   leftIcon={<ContentInbox />}
 *                   open={this.state.open}
 *                   onNestedListToggle={this.handleNestedListToggle}
 *                   nestedItems={[
 *                     <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
 *                   ]}
 *                 />,
 *               ]}
 *             />
 *           </List>
 *         </MobileTearSheet>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // ListItem supports Checkbox and Toggle switches.
 * 
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import Subheader from 'material-ui/Subheader';
 * import Divider from 'material-ui/Divider';
 * import Checkbox from 'material-ui/Checkbox';
 * import Toggle from 'material-ui/Toggle';
 * 
 * const styles = {
 *   root: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *   },
 * };
 * 
 * const ListExampleSettings = () => (
 *   <div style={styles.root}>
 *     <MobileTearSheet>
 *       <List>
 *         <Subheader>General</Subheader>
 *         <ListItem
 *           primaryText="Profile photo"
 *           secondaryText="Change your Google+ profile photo"
 *         />
 *         <ListItem
 *           primaryText="Show your status"
 *           secondaryText="Your status is visible to everyone you use with"
 *         />
 *       </List>
 *       <Divider />
 *       <List>
 *         <Subheader>Hangout Notifications</Subheader>
 *         <ListItem
 *           leftCheckbox={<Checkbox />}
 *           primaryText="Notifications"
 *           secondaryText="Allow notifications"
 *         />
 *         <ListItem
 *           leftCheckbox={<Checkbox />}
 *           primaryText="Sounds"
 *           secondaryText="Hangouts message"
 *         />
 *         <ListItem
 *           leftCheckbox={<Checkbox />}
 *           primaryText="Video sounds"
 *           secondaryText="Hangouts video call"
 *         />
 *       </List>
 *     </MobileTearSheet>
 *     <MobileTearSheet>
 *       <List>
 *         <ListItem
 *           primaryText="When calls and notifications arrive"
 *           secondaryText="Always interrupt"
 *         />
 *       </List>
 *       <Divider />
 *       <List>
 *         <Subheader>Priority Interruptions</Subheader>
 *         <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
 *         <ListItem primaryText="Calls" rightToggle={<Toggle />} />
 *         <ListItem primaryText="Messages" rightToggle={<Toggle />} />
 *       </List>
 *       <Divider />
 *       <List>
 *         <Subheader>Hangout Notifications</Subheader>
 *         <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
 *         <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
 *         <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
 *       </List>
 *     </MobileTearSheet>
 *   </div>
 * );
 * 
 * export default ListExampleSettings;
 * 
 * 
 * @example 
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import Divider from 'material-ui/Divider';
 * import CommunicationCall from 'material-ui/svg-icons/communication/call';
 * import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
 * import {indigo500} from 'material-ui/styles/colors';
 * import CommunicationEmail from 'material-ui/svg-icons/communication/email';
 * 
 * const ListExamplePhone = () => (
 *   <MobileTearSheet>
 *     <List>
 *       <ListItem
 *         leftIcon={<CommunicationCall color={indigo500} />}
 *         rightIcon={<CommunicationChatBubble />}
 *         primaryText="(650) 555 - 1234"
 *         secondaryText="Mobile"
 *       />
 *       <ListItem
 *         insetChildren={true}
 *         rightIcon={<CommunicationChatBubble />}
 *         primaryText="(323) 555 - 6789"
 *         secondaryText="Work"
 *       />
 *     </List>
 *     <Divider inset={true} />
 *     <List>
 *       <ListItem
 *         leftIcon={<CommunicationEmail color={indigo500} />}
 *         primaryText="YOUR_EMAIL"
 *         secondaryText="Personal"
 *       />
 *       <ListItem
 *         insetChildren={true}
 *         primaryText="YOUR_EMAIL"
 *         secondaryText="Work"
 *       />
 *     </List>
 *   </MobileTearSheet>
 * );
 * 
 * export default ListExamplePhone;
 * 
 * 
 * @example 
 * // Two examples showing formatted secondary text. The second example demonstrates an IconButton with tooltip.
 * 
 * 
 * import React from 'react';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem} from 'material-ui/List';
 * import Divider from 'material-ui/Divider';
 * import Subheader from 'material-ui/Subheader';
 * import Avatar from 'material-ui/Avatar';
 * import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
 * import IconButton from 'material-ui/IconButton';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const iconButtonElement = (
 *   <IconButton
 *     touch={true}
 *     tooltip="more"
 *     tooltipPosition="bottom-left"
 *   >
 *     <MoreVertIcon color={grey400} />
 *   </IconButton>
 * );
 * 
 * const rightIconMenu = (
 *   <IconMenu iconButtonElement={iconButtonElement}>
 *     <MenuItem>Reply</MenuItem>
 *     <MenuItem>Forward</MenuItem>
 *     <MenuItem>Delete</MenuItem>
 *   </IconMenu>
 * );
 * 
 * const ListExampleMessages = () => (
 *   <div>
 *     <MobileTearSheet>
 *       <List>
 *         <Subheader>Today</Subheader>
 *         <ListItem
 *           leftAvatar={<Avatar src="images/ok-128.jpg" />}
 *           primaryText="Brunch this weekend?"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Brendan Lim</span> --
 *               I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/kolage-128.jpg" />}
 *           primaryText={
 *             <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
 *           }
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
 *               Wish I could come, but I&apos;m out of town this weekend.
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
 *           primaryText="Oui oui"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Grace Ng</span> --
 *               Do you have Paris recommendations? Have you ever been?
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/kerem-128.jpg" />}
 *           primaryText="Birdthday gift"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Kerem Suer</span> --
 *               Do you have any ideas what we can get Heidi for her birthday? How about a pony?
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
 *           primaryText="Recipe to try"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Raquel Parrado</span> --
 *               We should eat this: grated squash. Corn and tomatillo tacos.
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *       </List>
 *     </MobileTearSheet>
 *     <MobileTearSheet>
 *       <List>
 *         <Subheader>Today</Subheader>
 *         <ListItem
 *           leftAvatar={<Avatar src="images/ok-128.jpg" />}
 *           rightIconButton={rightIconMenu}
 *           primaryText="Brendan Lim"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
 *               I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/kolage-128.jpg" />}
 *           rightIconButton={rightIconMenu}
 *           primaryText="me, Scott, Jennifer"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Summer BBQ</span><br />
 *               Wish I could come, but I&apos;m out of town this weekend.
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
 *           rightIconButton={rightIconMenu}
 *           primaryText="Grace Ng"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Oui oui</span><br />
 *               Do you have any Paris recs? Have you ever been?
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/kerem-128.jpg" />}
 *           rightIconButton={rightIconMenu}
 *           primaryText="Kerem Suer"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Birthday gift</span><br />
 *               Do you have any ideas what we can get Heidi for her birthday? How about a pony?
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *         <Divider inset={true} />
 *         <ListItem
 *           leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
 *           rightIconButton={rightIconMenu}
 *           primaryText="Raquel Parrado"
 *           secondaryText={
 *             <p>
 *               <span style={{color: darkBlack}}>Recipe to try</span><br />
 *               We should eat this: grated squash. Corn and tomatillo tacos.
 *             </p>
 *           }
 *           secondaryTextLines={2}
 *         />
 *       </List>
 *     </MobileTearSheet>
 *   </div>
 * );
 * 
 * export default ListExampleMessages;
 * 
 * 
 * @example 
 * // The selectable list wraps List in a Higher Order Component.
 * 
 * 
 * import React, {Component} from 'react';
 * import PropTypes from 'prop-types';
 * import MobileTearSheet from '../../../MobileTearSheet';
 * import {List, ListItem, makeSelectable} from 'material-ui/List';
 * import Avatar from 'material-ui/Avatar';
 * import Subheader from 'material-ui/Subheader';
 * 
 * let SelectableList = makeSelectable(List);
 * 
 * function wrapState(ComposedComponent) {
 *   return class SelectableList extends Component {
 *     static propTypes = {
 *       children: PropTypes.node.isRequired,
 *       defaultValue: PropTypes.number.isRequired,
 *     };
 * 
 *     componentWillMount() {
 *       this.setState({
 *         selectedIndex: this.props.defaultValue,
 *       });
 *     }
 * 
 *     handleRequestChange = (event, index) => {
 *       this.setState({
 *         selectedIndex: index,
 *       });
 *     };
 * 
 *     render() {
 *       return (
 *         <ComposedComponent
 *           value={this.state.selectedIndex}
 *           onChange={this.handleRequestChange}
 *         >
 *           {this.props.children}
 *         </ComposedComponent>
 *       );
 *     }
 *   };
 * }
 * 
 * SelectableList = wrapState(SelectableList);
 * 
 * const ListExampleSelectable = () => (
 *   <MobileTearSheet>
 *     <SelectableList defaultValue={3}>
 *       <Subheader>Selectable Contacts</Subheader>
 *       <ListItem
 *         value={1}
 *         primaryText="Brendan Lim"
 *         leftAvatar={<Avatar src="images/ok-128.jpg" />}
 *         nestedItems={[
 *           <ListItem
 *             value={2}
 *             primaryText="Grace Ng"
 *             leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
 *           />,
 *         ]}
 *       />
 *       <ListItem
 *         value={3}
 *         primaryText="Kerem Suer"
 *         leftAvatar={<Avatar src="images/kerem-128.jpg" />}
 *       />
 *       <ListItem
 *         value={4}
 *         primaryText="Eric Hoffman"
 *         leftAvatar={<Avatar src="images/kolage-128.jpg" />}
 *       />
 *       <ListItem
 *         value={5}
 *         primaryText="Raquel Parrado"
 *         leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
 *       />
 *     </SelectableList>
 *   </MobileTearSheet>
 * );
 * 
 * export default ListExampleSelectable;
 * 
 */

import React, {Component, Children, isValidElement} from 'react';
import PropTypes from 'prop-types';
import Subheader from '../Subheader';

class List extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} children - These are usually `ListItem`s that are passed to
     * be part of the list.
     */
    children: PropTypes.node,
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
      children,
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;

    let hasSubheader = false;

    const firstChild = Children.toArray(children)[0];
    if (isValidElement(firstChild) && firstChild.type === Subheader) {
      hasSubheader = true;
    }

    const styles = {
      root: {
        padding: `${hasSubheader ? 0 : 8}px 0px 8px 0px`,
      },
    };

    return (
      <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
        {children}
      </div>
    );
  }
}

export default List;
