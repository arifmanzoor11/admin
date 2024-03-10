import * as React from 'react';
import Typography from '@mui/material/Typography';
import PieChartIcon from '@mui/icons-material/PieChart';

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
export default function Deposits() {
  return (
    <React.Fragment>
      {/* <div style={{display: 'flex'}}> */}
        {/* <div> */}
      <PieChartIcon style={icon_style_pichart} />
      {/* </div> */}
      <div>
      
      <small style={{color : '#6f6f6f'}}>Recent Deposits</small>
      <Typography component="p" sx={{fontSize : '23px', textAlign : 'left', fontWeight: '600',}} variant="h4">
        $350.4
      </Typography>
      </div>
    {/* </div> */}
    </React.Fragment>
  );
}