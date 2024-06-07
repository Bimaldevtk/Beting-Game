const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());



let userPoints = 5000;

app.post('/generate-number', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.json({ number });
});


app.post('/place-bet', (req, res) => {
  const { betType, betAmount } = req.body;


  const number = Math.floor(Math.random() * 10) + 1;

  let win = false;
  if ((betType === '7up' && number > 7) || 
      (betType === '7down' && number < 7) || 
      (betType === '7' && number === 7)) {
    win = true;
  }

  userPoints += win ? betAmount : -betAmount;

  const userLost = userPoints <= 0;

  if (userLost) {
    userPoints = 0;
  }


  res.json({ number, win, userPoints, userLost });
});


app.get('/user-points', (req, res) => {
  res.json({ userPoints });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
