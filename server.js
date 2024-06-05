const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userPoints = 5000;

// Generate a random number and return it
app.post('/generate-number', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.json({ number });
});

// Calculate the result of a bet and update user points
app.post('/place-bet', (req, res) => {
  const { betType, betAmount } = req.body;

  // Generate a number between 1 and 10
  const number = Math.floor(Math.random() * 10) + 1;

  // Determine if the user wins or loses
  let win = false;
  if ((betType === '7up' && number > 7) || 
      (betType === '7down' && number < 7) || 
      (betType === '7' && number === 7)) {
    win = true;
  }

  // Update user points
  userPoints += win ? betAmount : -betAmount;

  // Check if the user has lost all points
  const userLost = userPoints <= 0;

  if (userLost) {
    userPoints = 0;
  }

  // Respond with the result
  res.json({ number, win, userPoints, userLost });
});

// Get the current points of the user
app.get('/user-points', (req, res) => {
  res.json({ userPoints });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
