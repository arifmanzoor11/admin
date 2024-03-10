import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
const table_item = {
  lineHeight: '2.8',
  padding: '6px 16px',
  borderBottom: '1px solid rgb(240 240 240)',
  color: 'rgb(84 84 84 / 87%)',
}
const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    '6 Mar, 2020',
    'Cash Payment',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    '12 April, 2020',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', '6 Mar, 2020', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    '8 Mar, 2020',
    'Cash Payment',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    '11 Mar, 2020',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <h4 className='mt-4 mb-4 fw-bold text-start'>Recent Booking</h4>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'800'}}>Date</TableCell>
            <TableCell sx={{fontWeight:'800'}}>Name</TableCell>
            <TableCell sx={{fontWeight:'800'}}>Slot Time</TableCell>
            <TableCell sx={{fontWeight:'800'}}>Payment Method</TableCell>
            <TableCell align="right"sx={{fontWeight:'800'}} >Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={table_item}>{row.date}</TableCell>
              <TableCell style={table_item}>{row.name}</TableCell>
              <TableCell style={table_item}>{row.shipTo}</TableCell>
              <TableCell style={table_item}>{row.paymentMethod}</TableCell>
              <TableCell style={table_item} align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" style={{fontSize : '13px'}} href="#" onClick={preventDefault} sx={{ mt: 3 , textAlign : 'left'}}>
        See more orders
      </Link>
    </React.Fragment>
  );
}