import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Paper } from '@mui/material';

function Home() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/user-points')
      .then(response => setPoints(response.data.userPoints))
      .catch(error => console.error('Error fetching user points:', error));
  }, []);

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Welcome to the Betting Game</Typography>
        <Typography variant="h6" sx={{ my: 2 }}>Current Points: {points}</Typography>
        <Link to="/bet" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Place a Bet</Button>
        </Link>
      </Paper>
    </Box>
  );
}

export default Home;
