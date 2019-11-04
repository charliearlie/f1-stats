import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  surname: {
    fontWeight: "bold",
    fontSize: 18
  }
});

function QualifyingTable(props) {
  const { data } = props;
  const styles = useStyles();

  console.log(data);
  const renderDriverName = name => {
    const driverName = name.split(" ");

    return (
      <>
        {driverName[0]}
        <span className={styles.surname}>
          {" "}
          {driverName[driverName.length - 1]}
        </span>
      </>
    );
  };

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#eee"
      }
    }
  }))(TableRow);

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#E10500",
      color: theme.palette.common.white,
      fontSize: 16,
      fontFamily: "Titillium Web, sans-serif"
    },
    body: {
      fontSize: 16,
      fontFamily: "Titillium Web, sans-serif"
    }
  }))(TableCell);

  if (data) {
    return (
      <Paper className={styles.root} elevation={3}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Position</StyledTableCell>
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell align="center">Driver&nbsp;</StyledTableCell>
              <StyledTableCell align="center">
                Constructor&nbsp;
              </StyledTableCell>
              <StyledTableCell align="center">Q1&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Q2&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Q3&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.results.map(result => (
              <StyledTableRow key={result.name}>
                <StyledTableCell align="center" component="th" scope="row">
                  {result.position}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {result.driverNumber}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {renderDriverName(result.driver)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {result.constructor}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {result.qualifyingSessions[0]}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {result.qualifyingSessions[1]}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {result.qualifyingSessions[2]}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  return <h3>Loading..</h3>;
}

export default QualifyingTable;
