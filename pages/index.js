import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
let totals = [];
console.log(totals)
// let hourlyTotals = [];

function generateTotals(hours, min, max, average) {
  let sum = 0
  let guestCount = Math.floor(Math.random() * (max - min + 1) + min);
  for (let i = 0; i < hours.length; i++){
    sum = Math.ceil(guestCount * average);
  }  
  totals.push(sum);
}

generateTotals(hours, 23, 65, 6.3);
generateTotals(hours, 3, 24, 1.2);
generateTotals(hours, 11, 38, 3.7);
generateTotals(hours, 20, 38, 2.3);
generateTotals(hours, 2, 16, 4.6);

// function generateHourlyTotals(rows, totals){
//   let lengthOfRows = rows.length
//   let totalsLength = totals.length
//   for(let i = 0; i < lengthOfRows; i++){
//     for(let j = 0; j < totalsLength; j++){
//       hourlyTotals.push()
//     }
//   }
// }

// generateHourlyTotals(rows, totals);

function createData(city, hourlyTotals) {
  return { 
    city, 
    hourlyTotals,
  };
}

const rows = [
  createData('Seattle', totals),
  createData('Detroit', totals),
  createData('Honolulu', totals),
  createData('Jakarta', totals),
  createData('Rishikesh', totals),
];
console.log(rows);

export default function Home() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Hours</TableCell>
            <TableCell align="right">6AM</TableCell>
            <TableCell align="right">7AM</TableCell>
            <TableCell align="right">8AM</TableCell>
            <TableCell align="right">9AM</TableCell>
            <TableCell align="right">10AM</TableCell>
            <TableCell align="right">TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell align="right">{row.hourlyTotals}</TableCell>
              {/* <TableCell align="right">{row.total}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}