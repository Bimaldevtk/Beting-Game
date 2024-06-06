import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bet from './components/Bet';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Betting Game</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
         <Route path="/" element={<Signup />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bet" element={<Bet />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
