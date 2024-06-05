import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bet from './components/Bet';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';

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
          <Route path="/" element={<Home />} />
          <Route path="/bet" element={<Bet />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
