import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Typography, MenuItem, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const betTypes = [
  { value: '7up', label: '7 Up' },
  { value: '7', label: '7' },
  { value: '7down', label: '7 Down' }
];

const betAmounts = [100, 200, 500];

function Bet() {
  const [betType, setBetType] = useState('');
  const [betAmount, setBetAmount] = useState(100);
  const [result, setResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  const handleBet = () => {
    axios.post('http://localhost:5000/place-bet', { betType, betAmount })
      .then(response => {
        setResult(response.data);
        if (response.data.userLost) {
          setGameOver(true);
        }
      })
      .catch(error => console.error('Error placing bet:', error));
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {gameOver ? (
          <Box>
            <Typography variant="h4" color="error">Game Over</Typography>
            <Typography variant="h6">You have lost all your points.</Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => navigate('/home')}>
              Go Home
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography variant="h4">Place Your Bet</Typography>
            <Box sx={{ my: 3 }}>
              <TextField
                select
                label="Bet Type"
                value={betType}
                onChange={(e) => setBetType(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              >
                {betTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Bet Amount"
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              >
                {betAmounts.map((amount) => (
                  <MenuItem key={amount} value={amount}>
                    {amount}
                  </MenuItem>
                ))}
              </TextField>
              <Button variant="contained" color="primary" onClick={handleBet}>Bet</Button>
            </Box>

            {result && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">Number: {result.number}</Typography>
                <Typography variant="h6" color={result.win ? 'success.main' : 'error.main'}>
                  {result.win ? 'You Win!' : 'You Lose!'}
                </Typography>
                <Typography variant="h6">New Points: {result.userPoints}</Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => navigate('/home')}>
                  Go Home
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default Bet;
