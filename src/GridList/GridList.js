import React, {Component} from 'react';
import PropTypes from 'prop-types';

function getStyles(props) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -props.padding / 2,
    },
    item: {
      boxSizing: 'border-box',
      padding: props.padding / 2,
    },
  };
}

/**
 * 
 * @description
 * 
 * Simple flex-box based Grid List implementation. Support tiles with arbitrary cell size, but cannot implement complex layouts (limited to flex-box limitations).
 * 
 * Also see http://www.material-ui.com/#/components/grid-list
 * 
 * @example 
 * 
 * // A simple example of a scrollable `GridList` containing a Subheader.
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
 * @example 
 * 
 * // This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * // The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 *  
 * 
 * import React from 'react';
 * import {GridList, GridTile} from 'material-ui/GridList';
 * import IconButton from 'material-ui/IconButton';
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
 *     featured: true,
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
 *     featured: true,
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
 * const GridListExampleComplex = () => (
 *   <div style={styles.root}>
 *     <GridList
 *       cols={2}
 *       cellHeight={200}
 *       padding={1}
 *       style={styles.gridList}
 *     >
 *       {tilesData.map((tile) => (
 *         <GridTile
 *           key={tile.img}
 *           title={tile.title}
 *           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
 *           actionPosition="left"
 *           titlePosition="top"
 *           titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
 *           cols={tile.featured ? 2 : 1}
 *           rows={tile.featured ? 2 : 1}
 *         >
 *           <img src={tile.img} />
 *         </GridTile>
 *       ))}
 *     </GridList>
 *   </div>
 * );
 * 
 * export default GridListExampleComplex;
 * 
 * @example 
 * 
 * // This example demonstrates the horizontal scrollable single-line grid list of images.
 * 
 * import React from 'react';
 * import {GridList, GridTile} from 'material-ui/GridList';
 * import IconButton from 'material-ui/IconButton';
 * import StarBorder from 'material-ui/svg-icons/toggle/star-border';
 * 
 * const styles = {
 *   root: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *     justifyContent: 'space-around',
 *   },
 *   gridList: {
 *     display: 'flex',
 *     flexWrap: 'nowrap',
 *     overflowX: 'auto',
 *   },
 *   titleStyle: {
 *     color: 'rgb(0, 188, 212)',
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
 * const GridListExampleSingleLine = () => (
 *   <div style={styles.root}>
 *     <GridList style={styles.gridList} cols={2.2}>
 *       {tilesData.map((tile) => (
 *         <GridTile
 *           key={tile.img}
 *           title={tile.title}
 *           actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
 *           titleStyle={styles.titleStyle}
 *           titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
 *         >
 *           <img src={tile.img} />
 *         </GridTile>
 *       ))}
 *     </GridList>
 *   </div>
 * );
 * 
 * export default GridListExampleSingleLine;
 * 
 */

class GridList extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.number|auto} cellHeight - Number of px for one cell height.
     * You can set `'auto'` if you want to let the children determine the height.
     */
    cellHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]),
    /**
     * @property {PropTypes.node} children - Grid Tiles that will be in Grid List.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.number} cols - Number of columns.
     */
    cols: PropTypes.number,
    /**
     * @property {PropTypes.number} padding - Number of px for the padding/spacing between items.
     */
    padding: PropTypes.number,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    cols: 2,
    padding: 4,
    cellHeight: 180,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      cols,
      padding,
      cellHeight,
      children,
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const mergedRootStyles = Object.assign(styles.root, style);

    const wrappedChildren = React.Children.map(children, (currentChild) => {
      if (React.isValidElement(currentChild) && currentChild.type.muiName === 'Subheader') {
        return currentChild;
      }
      const childCols = currentChild.props.cols || 1;
      const childRows = currentChild.props.rows || 1;
      const itemStyle = Object.assign({}, styles.item, {
        width: `${(100 / cols * childCols)}%`,
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + padding,
      });

      return <div style={prepareStyles(itemStyle)}>{currentChild}</div>;
    });

    return (
      <div style={prepareStyles(mergedRootStyles)} {...other}>
        {wrappedChildren}
      </div>
    );
  }
}

export default GridList;
