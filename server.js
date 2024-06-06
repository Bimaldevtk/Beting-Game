const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import { credential } from 'firebase-admin';
// import { initializeApp } from 'firebase-admin/app';


// const { initializeApp } = require('firebase-admin/app');

const app = express();
app.use(cors());
app.use(bodyParser.json());
// const serviceAccount = require('./bet-game-d9f8c-firebase-adminsdk-881bk-354a5a6bd1.json')
//   admin.initializeApp({
//   credential :admin.credential.cert(serviceAccount),
//   databaseURL:"https://bet-game-d9f8c.firebaseio.com"

// });
// const authenticate = async(req,res,next) => {
//   const idToken = req.headers.authorization;


// if(!idToken){
//   return res.status(403).send("Unauthorized");

// }
// try{
//   const decodedToken =await admin.auth().verifyIdToken(idToken);
//   req.user =decodedToken;
//   next();
// } catch(eror) {
//   res.status(403).send("Unauthorized");
// }
// }


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
