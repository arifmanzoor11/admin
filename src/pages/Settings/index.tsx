import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { mainListItems, secondaryListItems } from '../Dashbaord/listItems';

import Profile from './Settings';
import Navbar from '../Dashbaord/navbar/navbar'
// import './dashboard.css'

const drawerWidth: number = 300;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiToolbar-root' : {
      background: '#111827',
    },
    '& .MuiDrawer-paper': {
      position: 'relative',
      background: '#111827',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
      
      '& .css-mv42r1-MuiPaper-root' : {
        padding: '20px 15px',
        height : '360px',
      },
      '& .MuiListItemIcon-root' : {
        paddingLeft: '15px',
      },
      '& .css-cveggr-MuiListItemIcon-root' : {
        color: 'rgb(255 255 255 / 54%)',
      },
      '& .MuiButtonBase-root' : {
        color: 'rgb(255 255 255 / 54%)',
        padding: '10px',
        margin: '15px',
      },
      '& .MuiSvgIcon-fontSizeMedium' :  {

      },
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: [           
      'Inter',
      'sans-serif',
    ].join(','),
},});


export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navbar = {
    background: '#111827',
    borderLeft : 'solid 1px #414c61',
  };

  return (
    
    <ThemeProvider theme={defaultTheme} >
      <Box sx={{ display: 'flex', background : '#f5f7fe' }}>
        <CssBaseline />
        <AppBar enableColorOnDark style={navbar} position="absolute" open={open}>
        <Navbar />
        </AppBar>
        <Drawer variant="permanent"  open={open}>
          <Toolbar 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              
            }}
          >
          </Toolbar>
           <Divider />
          
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>

        </Drawer>
        <Box
          component="main"
          sx={{
            background : '#e9e9e9',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <h4 className='mt-5 mb-4 fw-bold text-start'>Settings</h4>
            <Grid container spacing={3}>
          

              <Grid item xs={12}>
                <Paper sx={{ p: 3, pb: 5, display: 'flex', flexDirection: 'column', boxShadow : 'none', 
                    borderRadius: '15px',
                  }}>
                  <Profile />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}