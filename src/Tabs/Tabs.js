import React, {Component, createElement, cloneElement, Children, isValidElement} from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import TabTemplate from './TabTemplate';
import InkBar from './InkBar';

function getStyles(props, context) {
  const {tabs} = context.muiTheme;

  return {
    tabItemContainer: {
      width: '100%',
      backgroundColor: tabs.backgroundColor,
      whiteSpace: 'nowrap',
      display: 'flex',
    },
  };
}

/**
* @description 
* 
* Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.
*
* Tabs can operate in two different modes: controlled and uncontrolled.
*
* The uncontrolled mode takes over automatically if no value prop is passed to your Tabs and Tab components.
* If you want controllable tabs, passing a value to both the Tabs and Tab elements will let you programmatically adjust which one is selected.
* Also see http://www.material-ui.com/#/components/tabs
* 
* @example 
* 
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* import Slider from 'material-ui/Slider';
*
* const styles = {
*   headline: {
*     fontSize: 24,
*     paddingTop: 16,
*     marginBottom: 12,
*     fontWeight: 400,
*   },
* };
*
* function handleActive(tab) {
*   alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
* }
*
* const TabsExampleSimple = () => (
*   <Tabs>
*     <Tab label="Item One" >
*      <div>
*         <h2 style={styles.headline}>Tab One</h2>
*         <p>
*           This is an example tab.
*         </p>
*         <p>
*           You can put any sort of HTML or react component in here. It even keeps the component state!
*         </p>
*         <Slider name="slider0" defaultValue={0.5} />
*       </div>
*     </Tab>
*     <Tab label="Item Two" >
*       <div>
*         <h2 style={styles.headline}>Tab Two</h2>
*         <p>
*           This is another example tab.
*         </p>
*       </div>
*     </Tab>
*     <Tab
*       label="onActive"
*       data-route="/home"
*       onActive={handleActive}
*     >
*       <div>
*         <h2 style={styles.headline}>Tab Three</h2>
*         <p>
*           This is a third example tab.
*         </p>
*       </div>
*     </Tab>
*   </Tabs>
* );
*
* export default TabsExampleSimple;
* 
* 
* @example 
*
*
* // An example of controlled tabs. The selected tab is handled through state and callbacks in the parent (example) component.
*
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
*
* const styles = {
*  headline: {
*    fontSize: 24,
*    paddingTop: 16,
*    marginBottom: 12,
*    fontWeight: 400,
*  },
* };
*
* export default class TabsExampleControlled extends React.Component {
*
*  constructor(props) {
*    super(props);
*    this.state = {
*      value: 'a',
*    };
*  }
*
*  handleChange = (value) => {
*    this.setState({
*      value: value,
*    });
*  };
*
*  render() {
*    return (
*      <Tabs
*        value={this.state.value}
*        onChange={this.handleChange}
*      >
*        <Tab label="Tab A" value="a">
*          <div>
*            <h2 style={styles.headline}>Controllable Tab A</h2>
*            <p>
*              Tabs are also controllable if you want to programmatically pass them their values.
*              This allows for more functionality in Tabs such as not
*              having any Tab selected or assigning them different values.
*            </p>
*          </div>
*        </Tab>
*        <Tab label="Tab B" value="b">
*          <div>
*            <h2 style={styles.headline}>Controllable Tab B</h2>
*            <p>
*              This is another example of a controllable tab. Remember, if you
*              use controllable Tabs, you need to give all of your tabs values or else
*              you wont be able to select them.
*            </p>
*          </div>
*        </Tab>
*      </Tabs>
*    );
*  }
* }
* 
* 
* @example 
*
* This example integrates the react-swipeable-views component with Tabs, animating the Tab transition, and allowing tabs to be swiped on touch devices.
*
* 
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* // From https://github.com/oliviertassinari/react-swipeable-views
* import SwipeableViews from 'react-swipeable-views';
*
* const styles = {
*  headline: {
*    fontSize: 24,
*    paddingTop: 16,
*    marginBottom: 12,
*    fontWeight: 400,
*  },
*  slide: {
*    padding: 10,
*  },
* };
*
* export default class TabsExampleSwipeable extends React.Component {
*
*  constructor(props) {
*    super(props);
*    this.state = {
*      slideIndex: 0,
*    };
*  }
*
*  handleChange = (value) => {
*    this.setState({
*      slideIndex: value,
*    });
*  };
*
*  render() {
*    return (
*      <div>
*        <Tabs
*          onChange={this.handleChange}
*          value={this.state.slideIndex}
*        >
*          <Tab label="Tab One" value={0} />
*          <Tab label="Tab Two" value={1} />
*          <Tab label="Tab Three" value={2} />
*        </Tabs>
*        <SwipeableViews
*          index={this.state.slideIndex}
*          onChangeIndex={this.handleChange}
*        >
*          <div>
*            <h2 style={styles.headline}>Tabs with slide effect</h2>
*            Swipe to see the next slide.<br />
*          </div>
*          <div style={styles.slide}>
*            slide n°2
*          </div>
*          <div style={styles.slide}>
*            slide n°3
*          </div>
*        </SwipeableViews>
*      </div>
*    );
*  }
* }
* 
* @example 
* 
* An example of tabs with icon.
*
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* import FontIcon from 'material-ui/FontIcon';
* import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
*
* const TabsExampleIcon = () => (
*   <Tabs>
*     <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
*     <Tab icon={<ActionFlightTakeoff />} />
*     <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
*   </Tabs>
* );
*
* export default TabsExampleIcon;
* 
* @example 
* 
* Icon and text example
*
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* import FontIcon from 'material-ui/FontIcon';
* import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
*
* const TabsExampleIconText = () => (
*   <Tabs>
*    <Tab
*      icon={<FontIcon className="material-icons">phone</FontIcon>}
*      label="RECENTS"
*    />
*    <Tab
*      icon={<FontIcon className="material-icons">favorite</FontIcon>}
*      label="FAVORITES"
*    />
*    <Tab
*      icon={<MapsPersonPin />}
*      label="NEARBY"
*    />
*  </Tabs>
* );
*
* export default TabsExampleIconText;
*
*/

class Tabs extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} children - Should be used to pass `Tab` components.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.string} contentContainerClassName - The css class name of the content's container.
     */
    contentContainerClassName: PropTypes.string,
    /**
     * @property {PropTypes.object} contentContainerStyle - Override the inline-styles of the content's container.
     */
    contentContainerStyle: PropTypes.object,
    /**
     * @property {PropTypes.number} initialSelectedIndex - Specify initial visible tab index.
     * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
     * `initialSelectedIndex` will revert back to default.
     * If `initialSelectedIndex` is set to any negative value, no tab will be selected intially.
     */
    initialSelectedIndex: PropTypes.number,
    /**
     * @property {PropTypes.object} inkBarStyle - Override the inline-styles of the InkBar.
     */
    inkBarStyle: PropTypes.object,
    /**
     * @property {PropTypes.func} onChange - Called when the selected value change.
     */
    onChange: PropTypes.func,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.object} tabItemContainerStyle - Override the inline-styles of the tab-labels container.
     */
    tabItemContainerStyle: PropTypes.object,
    /**
     * @property {PropTypes.func} tabTemplate - Override the default tab template used to wrap the content of each tab element.
     */
    tabTemplate: PropTypes.func,
    /**
     * @property {PropTypes.object} tabTemplateStyle - Override the inline-styles of the tab template.
     */
    tabTemplateStyle: PropTypes.object,
    /**
     * @property {PropTypes.any} value - Makes Tabs controllable and selects the tab whose value prop matches this prop.
     */
    value: PropTypes.any,
  };

  static defaultProps = {
    initialSelectedIndex: 0,
    onChange: () => {},
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {selectedIndex: 0};

  componentWillMount() {
    const valueLink = this.getValueLink(this.props);
    const initialIndex = this.props.initialSelectedIndex;

    this.setState({
      selectedIndex: valueLink.value !== undefined ?
        this.getSelectedIndex(this.props) :
        initialIndex < this.getTabCount() ?
        initialIndex :
        0,
    });
  }

  componentWillReceiveProps(newProps, nextContext) {
    const valueLink = this.getValueLink(newProps);
    const newState = {
      muiTheme: nextContext.muiTheme || this.context.muiTheme,
    };

    if (valueLink.value !== undefined) {
      newState.selectedIndex = this.getSelectedIndex(newProps);
    }

    this.setState(newState);
  }

  getTabs(props = this.props) {
    const tabs = [];

    Children.forEach(props.children, (tab) => {
      if (isValidElement(tab)) {
        tabs.push(tab);
      }
    });

    return tabs;
  }

  getTabCount() {
    return this.getTabs().length;
  }

  // Do not use outside of this component, it will be removed once valueLink is deprecated
  getValueLink(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange,
    };
  }

  getSelectedIndex(props) {
    const valueLink = this.getValueLink(props);
    let selectedIndex = -1;

    this.getTabs(props).forEach((tab, index) => {
      if (valueLink.value === tab.props.value) {
        selectedIndex = index;
      }
    });

    return selectedIndex;
  }

  handleTabTouchTap = (value, event, tab) => {
    const valueLink = this.getValueLink(this.props);
    const index = tab.props.index;

    if ((valueLink.value && valueLink.value !== value) ||
      this.state.selectedIndex !== index) {
      valueLink.requestChange(value, event, tab);
    }

    this.setState({selectedIndex: index});

    if (tab.props.onActive) {
      tab.props.onActive(tab);
    }
  };

  getSelected(tab, index) {
    const valueLink = this.getValueLink(this.props);
    return valueLink.value ? valueLink.value === tab.props.value :
      this.state.selectedIndex === index;
  }

  render() {
    const {
      contentContainerClassName,
      contentContainerStyle,
      initialSelectedIndex, // eslint-disable-line no-unused-vars
      inkBarStyle,
      onChange, // eslint-disable-line no-unused-vars
      style,
      tabItemContainerStyle,
      tabTemplate,
      tabTemplateStyle,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const valueLink = this.getValueLink(this.props);
    const tabValue = valueLink.value;
    const tabContent = [];
    const width = 100 / this.getTabCount();

    const tabs = this.getTabs().map((tab, index) => {
      warning(tab.type && tab.type.muiName === 'Tab',
        `Material-UI: Tabs only accepts Tab Components as children.
        Found ${tab.type.muiName || tab.type} as child number ${index + 1} of Tabs`);

      warning(!tabValue || tab.props.value !== undefined,
        `Material-UI: Tabs value prop has been passed, but Tab ${index}
        does not have a value prop. Needs value if Tabs is going
        to be a controlled component.`);

      tabContent.push(tab.props.children ?
        createElement(tabTemplate || TabTemplate, {
          key: index,
          selected: this.getSelected(tab, index),
          style: tabTemplateStyle,
        }, tab.props.children) : undefined);

      return cloneElement(tab, {
        key: index,
        index: index,
        selected: this.getSelected(tab, index),
        width: `${width}%`,
        onClick: this.handleTabTouchTap,
      });
    });

    const inkBar = this.state.selectedIndex !== -1 ? (
      <InkBar
        left={`${width * this.state.selectedIndex}%`}
        width={`${width}%`}
        style={inkBarStyle}
      />
    ) : null;

    const inkBarContainerWidth = tabItemContainerStyle ?
      tabItemContainerStyle.width : '100%';

    return (
      <div style={prepareStyles(Object.assign({}, style))} {...other}>
        <div style={prepareStyles(Object.assign(styles.tabItemContainer, tabItemContainerStyle))}>
          {tabs}
        </div>
        <div style={{width: inkBarContainerWidth}}>
          {inkBar}
        </div>
        <div
          style={prepareStyles(Object.assign({}, contentContainerStyle))}
          className={contentContainerClassName}
        >
          {tabContent}
        </div>
      </div>
    );
  }
}

export default Tabs;
