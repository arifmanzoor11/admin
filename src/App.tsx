
import './App.css';
import { createTheme } from '@mui/material/styles'
import Login from './pages/Login'
import Dashbaord from './pages/Dashbaord'
import Booking from './pages/Bookings'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Users from './pages/User'
import Pages from './pages/Pages'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
},});



function App() {
  return (
    <div className="App"> 
    <Router>
        <Routes>
        <Route path='*' element={<ErrorPage/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/dashboard" element={<Dashbaord />} />
            <Route path="/" element={<Dashbaord />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
