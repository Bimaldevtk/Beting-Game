import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";


function Home() {
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/user-points`)
      .then(response => setPoints(response.data.userPoints))
      .catch(error => console.error('Error fetching user points:', error));
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to the login page or home page after sign out
    } catch (error) {
      console.error('Error signing out:', error);
    }
    

  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Welcome to the Betting Game</Typography>
        <Typography variant="h6" sx={{ my: 2 }}>Current Points: {points}</Typography>
        <Link to="/bet" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Place a Bet</Button>
        </Link>
        <Button variant="contained" color="error" sx={{ position:'absolute',top:0.7,right:3 }} onClick={handleSignOut}>
          Log Out
        </Button>
      </Paper>
    </Box>
  );
}

export default Home;
