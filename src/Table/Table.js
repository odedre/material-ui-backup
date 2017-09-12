

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

function getStyles(props, context) {
  const {
    baseTheme,
    table,
  } = context.muiTheme;

  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily,
    },
    bodyTable: {
      height: (props.fixedHeader || props.fixedFooter) ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
    tableWrapper: {
      height: (props.fixedHeader || props.fixedFooter) ? 'auto' : props.height,
      overflow: 'auto',
    },
  };
}

/**
* @description
* 
* Tables are used to display data and to organize it.
* Also see http://www.material-ui.com/#/components/table 
* 
* 
* @example 
* 
* // A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
* 
* import React from 'react';
*
* import {
*   Table,
*   TableBody,
*   TableHeader,
*   TableHeaderColumn,
*   TableRow,
*   TableRowColumn,
* } from 'material-ui/Table';
* 
* 
* 
* const TableExampleSimple = () => (
*   <Table>
*     <TableHeader>
*       <TableRow>
*         <TableHeaderColumn>ID</TableHeaderColumn>
*         <TableHeaderColumn>Name</TableHeaderColumn>
*         <TableHeaderColumn>Status</TableHeaderColumn>
*       </TableRow>
*     </TableHeader>
*     <TableBody>
*       <TableRow>
*         <TableRowColumn>1</TableRowColumn>
*         <TableRowColumn>John Smith</TableRowColumn>
*         <TableRowColumn>Employed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>2</TableRowColumn>
*         <TableRowColumn>Randal White</TableRowColumn>
*         <TableRowColumn>Unemployed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>3</TableRowColumn>
*         <TableRowColumn>Stephanie Sanders</TableRowColumn>
*         <TableRowColumn>Employed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>4</TableRowColumn>
*         <TableRowColumn>Steve Brown</TableRowColumn>
*         <TableRowColumn>Employed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>5</TableRowColumn>
*         <TableRowColumn>Christopher Nolan</TableRowColumn>
*         <TableRowColumn>Unemployed</TableRowColumn>
*       </TableRow>
*     </TableBody>
*   </Table>
* );
* 
* export default TableExampleSimple;
* 
* @example 
* // Controlled example
*
* import React, {Component} from 'react';
* import {
*   Table,
*   TableBody,
*   TableHeader,
*   TableHeaderColumn,
*   TableRow,
*   TableRowColumn,
* } from 'material-ui/Table';
* 
* export default class TableExampleControlled extends Component {
*   state = {
*     selected: [1],
*   };
* 
*   isSelected = (index) => {
*     return this.state.selected.indexOf(index) !== -1;
*   };
* 
*   handleRowSelection = (selectedRows) => {
*     this.setState({
*       selected: selectedRows,
*     });
*   };
* 
*   render() {
*     return (
*       <Table onRowSelection={this.handleRowSelection}>
*         <TableHeader>
*           <TableRow>
*             <TableHeaderColumn>ID</TableHeaderColumn>
*             <TableHeaderColumn>Name</TableHeaderColumn>
*             <TableHeaderColumn>Status</TableHeaderColumn>
*           </TableRow>
*         </TableHeader>
*         <TableBody>
*           <TableRow selected={this.isSelected(0)}>
*             <TableRowColumn>1</TableRowColumn>
*             <TableRowColumn>John Smith</TableRowColumn>
*             <TableRowColumn>Employed</TableRowColumn>
*           </TableRow>
*           <TableRow selected={this.isSelected(1)}>
*             <TableRowColumn>2</TableRowColumn>
*             <TableRowColumn>Randal White</TableRowColumn>
*             <TableRowColumn>Unemployed</TableRowColumn>
*           </TableRow>
*           <TableRow selected={this.isSelected(2)}>
*             <TableRowColumn>3</TableRowColumn>
*             <TableRowColumn>Stephanie Sanders</TableRowColumn>
*             <TableRowColumn>Employed</TableRowColumn>
*           </TableRow>
*           <TableRow selected={this.isSelected(3)}>
*             <TableRowColumn>4</TableRowColumn>
*             <TableRowColumn>Steve Brown</TableRowColumn>
*             <TableRowColumn>Employed</TableRowColumn>
*           </TableRow>
*         </TableBody>
*       </Table>
*     );
*   }
* }
* 
*
* @example 
* //A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
*
* import React, {Component} from 'react';
* import {
*   Table,
*   TableBody,
*   TableFooter,
*   TableHeader,
*   TableHeaderColumn,
*   TableRow,
*   TableRowColumn,
* } from 'material-ui/Table';
* import TextField from 'material-ui/TextField';
* import Toggle from 'material-ui/Toggle';
* 
* const styles = {
*   propContainer: {
*     width: 200,
*     overflow: 'hidden',
*     margin: '20px auto 0',
*   },
*   propToggleHeader: {
*     margin: '20px auto 10px',
*   },
* };
* 
* const tableData = [
*   {
*     name: 'John Smith',
*     status: 'Employed',
*   },
*   {
*     name: 'Randal White',
*     status: 'Unemployed',
*   },
*   {
*     name: 'Stephanie Sanders',
*     status: 'Employed',
*   },
*   {
*     name: 'Steve Brown',
*     status: 'Employed',
*   },
*   {
*     name: 'Joyce Whitten',
*     status: 'Employed',
*   },
*   {
*     name: 'Samuel Roberts',
*     status: 'Employed',
*   },
*   {
*     name: 'Adam Moore',
*     status: 'Employed',
*   },
* ];
* 
* 
* export default class TableExampleComplex extends Component {
*   state = {
*     fixedHeader: true,
*     fixedFooter: true,
*     stripedRows: false,
*     showRowHover: false,
*     selectable: true,
*     multiSelectable: false,
*     enableSelectAll: false,
*     deselectOnClickaway: true,
*     showCheckboxes: true,
*     height: '300px',
*   };
* 
*   handleToggle = (event, toggled) => {
*     this.setState({
*       [event.target.name]: toggled,
*     });
*   };
* 
*   handleChange = (event) => {
*     this.setState({height: event.target.value});
*   };
* 
*   render() {
*     return (
*       <div>
*         <Table
*           height={this.state.height}
*           fixedHeader={this.state.fixedHeader}
*           fixedFooter={this.state.fixedFooter}
*           selectable={this.state.selectable}
*           multiSelectable={this.state.multiSelectable}
*         >
*           <TableHeader
*             displaySelectAll={this.state.showCheckboxes}
*             adjustForCheckbox={this.state.showCheckboxes}
*             enableSelectAll={this.state.enableSelectAll}
*           >
*             <TableRow>
*               <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
*                 Super Header
*               </TableHeaderColumn>
*             </TableRow>
*             <TableRow>
*               <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
*               <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
*               <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
*             </TableRow>
*           </TableHeader>
*           <TableBody
*             displayRowCheckbox={this.state.showCheckboxes}
*             deselectOnClickaway={this.state.deselectOnClickaway}
*             showRowHover={this.state.showRowHover}
*             stripedRows={this.state.stripedRows}
*           >
*             {tableData.map( (row, index) => (
*               <TableRow key={index}>
*                 <TableRowColumn>{index}</TableRowColumn>
*                 <TableRowColumn>{row.name}</TableRowColumn>
*                 <TableRowColumn>{row.status}</TableRowColumn>
*               </TableRow>
*               ))}
*           </TableBody>
*           <TableFooter
*             adjustForCheckbox={this.state.showCheckboxes}
*           >
*             <TableRow>
*               <TableRowColumn>ID</TableRowColumn>
*               <TableRowColumn>Name</TableRowColumn>
*               <TableRowColumn>Status</TableRowColumn>
*             </TableRow>
*             <TableRow>
*               <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
*                 Super Footer
*               </TableRowColumn>
*             </TableRow>
*           </TableFooter>
*         </Table>
* 
*         <div style={styles.propContainer}>
*           <h3>Table Properties</h3>
*           <TextField
*             floatingLabelText="Table Body Height"
*             defaultValue={this.state.height}
*             onChange={this.handleChange}
*           />
*           <Toggle
*             name="fixedHeader"
*             label="Fixed Header"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.fixedHeader}
*           />
*           <Toggle
*             name="fixedFooter"
*             label="Fixed Footer"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.fixedFooter}
*           />
*           <Toggle
*             name="selectable"
*             label="Selectable"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.selectable}
*           />
*           <Toggle
*             name="multiSelectable"
*             label="Multi-Selectable"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.multiSelectable}
*           />
*           <Toggle
*             name="enableSelectAll"
*             label="Enable Select All"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.enableSelectAll}
*           />
*           <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
*           <Toggle
*             name="deselectOnClickaway"
*             label="Deselect On Clickaway"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.deselectOnClickaway}
*           />
*           <Toggle
*             name="stripedRows"
*             label="Stripe Rows"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.stripedRows}
*           />
*           <Toggle
*             name="showRowHover"
*             label="Show Row Hover"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.showRowHover}
*           />
*           <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
*           <Toggle
*             name="showCheckboxes"
*             label="Show Checkboxes"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.showCheckboxes}
*           />
*         </div>
*       </div>
*     );
*   }
* }
* 
*/

class Table extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} allRowsSelected - Set to true to indicate that all rows should be selected.
     */
    allRowsSelected: PropTypes.bool,
    /**
     * @property {PropTypes.object} bodyStyle - Override the inline-styles of the body's table element.
     */
    bodyStyle: PropTypes.object,
    /**
     * @property {PropTypes.node} children - Children passed to table.
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.bool} fixedFooter - If true, the footer will appear fixed below the table.
     * The default value is true.
     */
    fixedFooter: PropTypes.bool,
    /**
     * @property {PropTypes.bool} fixedHeader - If true, the header will appear fixed above the table.
     * The default value is true.
     */
    fixedHeader: PropTypes.bool,
    /**
     * @property {PropTypes.object} footerStyle - Override the inline-styles of the footer's table element.
     */
    footerStyle: PropTypes.object,
    /**
     * @property {PropTypes.object} headerStyle - Override the inline-styles of the header's table element.
     */
    headerStyle: PropTypes.object,
    /**
     * @property {PropTypes.string} height - The height of the table.
     */
    height: PropTypes.string,
    /**
     * @property {PropTypes.bool} multiSelectable - If true, multiple table rows can be selected.
     * CTRL/CMD+Click and SHIFT+Click are valid actions.
     * The default value is false.
     */
    multiSelectable: PropTypes.bool,
    /**
     * @property {PropTypes.func} onCellClick - Called when a row cell is clicked.
     * rowNumber is the row number and columnId is
     * the column number or the column key.
     */
    onCellClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onCellHover - Called when a table cell is hovered.
     * rowNumber is the row number of the hovered row
     * and columnId is the column number or the column key of the cell.
     */
    onCellHover: PropTypes.func,
    /**
     * @property {PropTypes.func} onCellHoverExit - Called when a table cell is no longer hovered.
     * rowNumber is the row number of the row and columnId
     * is the column number or the column key of the cell.
     */
    onCellHoverExit: PropTypes.func,
    /**
     * @property {PropTypes.func} onRowHover - Called when a table row is hovered.
     * rowNumber is the row number of the hovered row.
     */
    onRowHover: PropTypes.func,
    /**
     * @property {PropTypes.func} onRowHoverExit - Called when a table row is no longer hovered.
     * rowNumber is the row number of the row that is no longer hovered.
     */
    onRowHoverExit: PropTypes.func,
    /**
     * @property {PropTypes.func} onRowSelection - Called when a row is selected.
     * selectedRows is an array of all row selections.
     * IF all rows have been selected, the string "all"
     * will be returned instead to indicate that all rows have been selected.
     */
    onRowSelection: PropTypes.func,
    /**
     * @property {PropTypes.bool} selectable - If true, table rows can be selected.
     * If multiple row selection is desired, enable multiSelectable.
     * The default value is true.
     */
    selectable: PropTypes.bool,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.object} wrapperStyle - Override the inline-styles of the table's wrapper element.
     */
    wrapperStyle: PropTypes.object,
  };

  static defaultProps = {
    allRowsSelected: false,
    fixedFooter: true,
    fixedHeader: true,
    height: 'inherit',
    multiSelectable: false,
    selectable: true,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    allRowsSelected: false,
  };

  componentWillMount() {
    if (this.props.allRowsSelected) {
      this.setState({allRowsSelected: true});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
      this.setState({allRowsSelected: nextProps.allRowsSelected});
    }
  }

  isScrollbarVisible() {
    const tableDivHeight = this.refs.tableDiv.clientHeight;
    const tableBodyHeight = this.refs.tableBody.clientHeight;

    return tableBodyHeight > tableDivHeight;
  }

  createTableHeader(base) {
    return React.cloneElement(
      base,
      {
        enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
        onSelectAll: this.onSelectAll,
        selectAllSelected: this.state.allRowsSelected,
      }
    );
  }

  createTableBody(base) {
    return React.cloneElement(
      base,
      {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable,
      }
    );
  }

  createTableFooter(base) {
    return base;
  }

  onCellClick = (rowNumber, columnNumber, event) => {
    if (this.props.onCellClick) this.props.onCellClick(rowNumber, columnNumber, event);
  };

  onCellHover = (rowNumber, columnNumber, event) => {
    if (this.props.onCellHover) this.props.onCellHover(rowNumber, columnNumber, event);
  };

  onCellHoverExit = (rowNumber, columnNumber, event) => {
    if (this.props.onCellHoverExit) this.props.onCellHoverExit(rowNumber, columnNumber, event);
  };

  onRowHover = (rowNumber) => {
    if (this.props.onRowHover) this.props.onRowHover(rowNumber);
  };

  onRowHoverExit = (rowNumber) => {
    if (this.props.onRowHoverExit) this.props.onRowHoverExit(rowNumber);
  };

  onRowSelection = (selectedRows) => {
    if (this.state.allRowsSelected) {
      this.setState({allRowsSelected: false});
    }

    if (this.props.onRowSelection) {
      this.props.onRowSelection(selectedRows);
    }
  };

  onSelectAll = () => {
    if (this.props.onRowSelection) {
      if (!this.state.allRowsSelected) {
        this.props.onRowSelection('all');
      } else {
        this.props.onRowSelection('none');
      }
    }

    this.setState({allRowsSelected: !this.state.allRowsSelected});
  };

  render() {
    const {
      children,
      className,
      fixedFooter,
      fixedHeader,
      style,
      wrapperStyle,
      headerStyle,
      bodyStyle,
      footerStyle,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    let tHead;
    let tFoot;
    let tBody;

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      const {muiName} = child.type;
      if (muiName === 'TableBody') {
        tBody = this.createTableBody(child);
      } else if (muiName === 'TableHeader') {
        tHead = this.createTableHeader(child);
      } else if (muiName === 'TableFooter') {
        tFoot = this.createTableFooter(child);
      } else {
        warning(false,
          `Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.
           Nothing is rendered.`);
      }
    });

    // If we could not find a table-header and a table-body, do not attempt to display anything.
    if (!tBody && !tHead) return null;

    const mergedTableStyle = Object.assign(styles.root, style);
    let headerTable;
    let footerTable;
    let inlineHeader;
    let inlineFooter;

    if (fixedHeader) {
      headerTable = (
        <div style={prepareStyles(Object.assign({}, headerStyle))}>
          <table className={className} style={mergedTableStyle}>
            {tHead}
          </table>
        </div>
      );
    } else {
      inlineHeader = tHead;
    }

    if (tFoot !== undefined) {
      if (fixedFooter) {
        footerTable = (
          <div style={prepareStyles(Object.assign({}, footerStyle))}>
            <table className={className} style={prepareStyles(mergedTableStyle)}>
              {tFoot}
            </table>
          </div>
        );
      } else {
        inlineFooter = tFoot;
      }
    }

    return (
      <div style={prepareStyles(Object.assign(styles.tableWrapper, wrapperStyle))}>
        {headerTable}
        <div style={prepareStyles(Object.assign(styles.bodyTable, bodyStyle))} ref="tableDiv">
          <table className={className} style={mergedTableStyle} ref="tableBody">
            {inlineHeader}
            {inlineFooter}
            {tBody}
          </table>
        </div>
        {footerTable}
      </div>
    );
  }
}

export default Table;
