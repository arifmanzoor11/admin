import * as React from 'react';
import Typography from '@mui/material/Typography';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const icon_style_pichart = {
  fontSize: '70px',
    marginRight: '20px',
    padding: '15px',
    background: '#e7efff',
    borderRadius: '40px',
    color: '#3375f9',
}
export default function Spend() {
  return (
    <React.Fragment>
      <CurrencyPoundIcon style={icon_style_pichart} />
      <div> 
      <small style={{color : '#6f6f6f'}}>Spend this month</small>
      <Typography component="p" sx={{fontSize : '23px', textAlign : 'left', fontWeight: '600',}} variant="h4">
      $642.39
      </Typography>
      </div>
    </React.Fragment>
  );
}