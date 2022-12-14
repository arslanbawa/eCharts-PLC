import * as React from "react";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0F7DFF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ tableHeadings, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeadings &&
              tableHeadings.map((item) => {
                return <StyledTableCell>{item}</StyledTableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.reason}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Lat}</StyledTableCell>
              <StyledTableCell align="right">{row.long}</StyledTableCell>
              <StyledTableCell align="right">{row.performance}</StyledTableCell>
              <StyledTableCell align="right">{row.nar}</StyledTableCell>
              <StyledTableCell align="right">{row.voltage}</StyledTableCell>
              <StyledTableCell align="right">{row.current}</StyledTableCell>
              <StyledTableCell align="right">{row.powerSource}</StyledTableCell>
              <StyledTableCell align="right">{row.load}</StyledTableCell>
              <StyledTableCell align="right">{row.fuel}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
