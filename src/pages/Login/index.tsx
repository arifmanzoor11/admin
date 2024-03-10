import Axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState, useEffect } from 'react';
import './login.css'
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();
export default function SignInSide() {

  const navigate = useNavigate();
   const [msg, setMsg] = useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
      try { 
          await Axios.post('http://localhost:5000/login', {
              email: email,
              password: password
          });
          toast.success("Login Sucessful");
            setTimeout(() => {
              navigate('/dashboard')
            }, 2000);
      } catch (error : any) {
          if (error.response) {
               toast.error(error.response.data.msg);
          }
      }
  };

  // TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
},});

  return (
    <ThemeProvider theme={defaultTheme}>
    <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item  sx={{ pl: 5, pr: 5 }} xs={12} sm={9} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4 ,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-center',
            }}
          >
            <small className='iconsStyle'>
            <ArrowBackIosIcon/> Back to website
            </small>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4 className='mb-4 fw-bold'>Sign in</h4>
            <Typography component="h1">Enter your email and password to sign in!</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                className='btn-signin'
                // id='btn'
                type="submit"
                fullWidth
                color="secondary"
                disabled={false}
                size="large"
                variant="contained"
                
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={6}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
    </ThemeProvider>
  );
}