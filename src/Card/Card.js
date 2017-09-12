import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '../Paper';
import CardExpandable from './CardExpandable';

/**
 * @description
 * A card is a piece of paper with unique related data that serves as an entry point to more detailed information. 
 * For example, a card could contain a photo, text, and a link about a single subject.
 * 
 * Cards have a constant width and variable height. 
 * The maximum height is limited to the height of the available space on a platform, but it can temporarily expand (for example, to display a comment field). 
 * Cards do not flip over to reveal information on the back.
 * 
 * `Card` expansion can be controlled (use `expanded` and `onExpandChange` properties) or uncontrolled (use `initiallyExpanded` property). 
 * Use the `expandable` property to control whether an element will react to expansion or not. 
 * Use `actAsExpander` on `CardTitle` or `CardHeader` to let them have an expander button.
 * 
 * 
 * 
 * @example
 * 
 * // A `Card` containing each of the card components: `CardHeader` (with avatar), `CardMedia` (with overlay), `CardTitle`, `CardText` & `CardActions`.
 * 
 * import React from 'react';
 * import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * const CardExampleWithAvatar = () => (
 *   <Card>
 *     <CardHeader
 *       title="URL Avatar"
 *       subtitle="Subtitle"
 *       avatar="images/jsa-128.jpg"
 *     />
 *     <CardMedia
 *       overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
 *     >
 *       <img src="images/nature-600-337.jpg" alt="" />
 *     </CardMedia>
 *     <CardTitle title="Card title" subtitle="Card subtitle" />
 *     <CardText>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 *       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 *       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 *     </CardText>
 *     <CardActions>
 *       <FlatButton label="Action1" />
 *       <FlatButton label="Action2" />
 *     </CardActions>
 *   </Card>
 * );
 * 
 * export default CardExampleWithAvatar;
 * 
 * 
 * @example 
 * // An expandable `Card` with `CardHeader`, `CardText` and `CardActions`. Use the icon to expand the card.
 * 
 * import React from 'react';
 * import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * const CardExampleExpandable = () => (
 *   <Card>
 *     <CardHeader
 *       title="Without Avatar"
 *       subtitle="Subtitle"
 *       actAsExpander={true}
 *       showExpandableButton={true}
 *     />
 *     <CardActions>
 *       <FlatButton label="Action1" />
 *       <FlatButton label="Action2" />
 *     </CardActions>
 *     <CardText expandable={true}>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 *       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 *       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 *     </CardText>
 *   </Card>
 * );
 * 
 * export default CardExampleExpandable;
 * 
 * 
 * 
 * @example 
 * 
 * // A controlled expandable `Card`. Use the icon, the toggle or the buttons to control the expanded state of the card.
 * 
 * import React from 'react';
 * import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
 * import FlatButton from 'material-ui/FlatButton';
 * import Toggle from 'material-ui/Toggle';
 * 
 * export default class CardExampleControlled extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       expanded: false,
 *     };
 *   }
 * 
 *   handleExpandChange = (expanded) => {
 *     this.setState({expanded: expanded});
 *   };
 * 
 *   handleToggle = (event, toggle) => {
 *     this.setState({expanded: toggle});
 *   };
 * 
 *   handleExpand = () => {
 *     this.setState({expanded: true});
 *   };
 * 
 *   handleReduce = () => {
 *     this.setState({expanded: false});
 *   };
 * 
 *   render() {
 *     return (
 *       <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
 *         <CardHeader
 *           title="URL Avatar"
 *           subtitle="Subtitle"
 *           avatar="images/ok-128.jpg"
 *           actAsExpander={true}
 *           showExpandableButton={true}
 *         />
 *         <CardText>
 *           <Toggle
 *             toggled={this.state.expanded}
 *             onToggle={this.handleToggle}
 *             labelPosition="right"
 *             label="This toggle controls the expanded state of the component."
 *           />
 *         </CardText>
 *         <CardMedia
 *           expandable={true}
 *           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
 *         >
 *           <img src="images/nature-600-337.jpg" alt="" />
 *         </CardMedia>
 *         <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
 *         <CardText expandable={true}>
 *           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 *           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 *           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 *         </CardText>
 *         <CardActions>
 *           <FlatButton label="Expand" onClick={this.handleExpand} />
 *           <FlatButton label="Reduce" onClick={this.handleReduce} />
 *         </CardActions>
 *       </Card>
 *     );
 *   }
 * }
 * 
 */
class Card extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} children - Can be used to render elements inside the Card.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.object} containerStyle - Override the inline-styles of the container element.
     */
    containerStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} expandable - If true, this card component is expandable. Can be set on any child of the `Card` component.
     */
    expandable: PropTypes.bool,
    /**
     * @property {PropTypes.bool} expanded - Whether this card is expanded.
     * If `true` or `false` the component is controlled.
     * if `null` the component is uncontrolled.
     */
    expanded: PropTypes.bool,
    /**
     * @property {PropTypes.bool} initiallyExpanded - Whether this card is initially expanded.
     */
    initiallyExpanded: PropTypes.bool,
    /**
     * @property {PropTypes.bool} onExpandChange - Callback function fired when the `expandable` state of the card has changed.
     *
     * @param {PropTypes.boolean} newExpandedState Represents the new `expanded` state of the card.
     */
    onExpandChange: PropTypes.func,
    /**
     * @property {PropTypes.bool} showExpandableButton - If true, this card component will include a button to expand the card. `CardTitle`,
     * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
     * of `Card` can implements `showExpandableButton` or forwards the property to a child
     * component supporting it.
     */
    showExpandableButton: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    expandable: false,
    expanded: null,
    initiallyExpanded: false,
  };

  state = {
    expanded: null,
  };

  componentWillMount() {
    this.setState({
      expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded,
    });
  }

  componentWillReceiveProps(nextProps) {
    // update the state when the component is controlled.
    if (nextProps.expanded !== null)
      this.setState({expanded: nextProps.expanded});
  }

  handleExpanding = (event) => {
    event.preventDefault();
    const newExpandedState = !this.state.expanded;
    // no automatic state update when the component is controlled
    if (this.props.expanded === null) {
      this.setState({expanded: newExpandedState});
    }
    if (this.props.onExpandChange) {
      this.props.onExpandChange(newExpandedState);
    }
  };

  render() {
    const {
      style,
      containerStyle,
      children,
      expandable, // eslint-disable-line no-unused-vars
      expanded: expandedProp, // eslint-disable-line no-unused-vars
      initiallyExpanded, // eslint-disable-line no-unused-vars
      onExpandChange, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    let lastElement;
    const expanded = this.state.expanded;
    const newChildren = React.Children.map(children, (currentChild) => {
      let doClone = false;
      let newChild = undefined;
      const newProps = {};
      let element = currentChild;
      if (!currentChild || !currentChild.props) {
        return null;
      }
      if (expanded === false && currentChild.props.expandable === true)
        return;
      if (currentChild.props.actAsExpander === true) {
        doClone = true;
        newProps.onClick = this.handleExpanding;
        newProps.style = Object.assign({cursor: 'pointer'}, currentChild.props.style);
      }
      if (currentChild.props.showExpandableButton === true) {
        doClone = true;
        newChild = (
          <CardExpandable
            closeIcon={currentChild.props.closeIcon}
            expanded={expanded}
            onExpanding={this.handleExpanding}
            openIcon={currentChild.props.openIcon}
            iconStyle={currentChild.props.iconStyle}
          />
        );
      }
      if (doClone) {
        element = React.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
      }
      lastElement = element;
      return element;
    }, this);

    // If the last element is text or a title we should add
    // 8px padding to the bottom of the card
    const addBottomPadding = (lastElement && (lastElement.type.muiName === 'CardText' ||
      lastElement.type.muiName === 'CardTitle'));

    const mergedStyles = Object.assign({
      zIndex: 1,
    }, style);
    const containerMergedStyles = Object.assign({
      paddingBottom: addBottomPadding ? 8 : 0,
    }, containerStyle);

    return (
      <Paper {...other} style={mergedStyles}>
        <div style={containerMergedStyles}>
          {newChildren}
        </div>
      </Paper>
    );
  }
}

export default Card;
