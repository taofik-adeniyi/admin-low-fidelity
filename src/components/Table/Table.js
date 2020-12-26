import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import AButton from '@material-ui/core/Button';

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                    <TableCell className={classes.tableCell} key={key}>
                      {prop.id}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={key}>
                      {prop.title}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={key}>
                      {prop.merchantName}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={key}>
                      {prop.state}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={key}>
                      {prop.description}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={key}>
                      {prop.dealer}
                    </TableCell>
                    
                    {!prop.manor ? null : 
                      <TableCell className={classes.tableCell} key={key}>
                        {prop.manor}
                      </TableCell>
                    }
                    
                    {!prop.action ? null : 
                      <TableCell className={classes.tableCell} key={key}>
                        <AButton 
                        // variant="contained" 
                        color="info" style={{marginTop: "5px"}}>
                          View
                        </AButton>
                        <AButton color="info" 
                        // variant="contained" 
                        style={{marginTop: "5px", marginLeft: "5px"}}>
                          Remove
                        </AButton>
                      </TableCell>
                    }

                    {!prop.history ? null : 
                      <TableCell className={classes.tableCell} key={key}>
                        <AButton 
                        // variant="contained" 
                        color="info" style={{marginTop: "5px"}}>
                          View
                        </AButton>
                      </TableCell>
                    }

              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
