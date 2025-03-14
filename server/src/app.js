const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const authRouter = require('./routers/authRouter');
const wordsRouter = require('./routes/wordsRouter/wordsRouter');
const solveRouter = require('./routes/SolveRouter/solveRouter');
const cardsRouter = require('./routers/cardsRouter');
const corsConfig = require('./config/cors.config');
const tokensRouter = require('./routers/tokensRouter');
const statsRouter = require('./routes/StatsRouter/statsRouter');
const userRouter = require('./routes/UserRouter/userRouter');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors(corsConfig));

app.use('/api/auth', authRouter);
app.use('/api/card', cardsRouter);
app.use('/api/words', wordsRouter);
app.use('/api/solve', solveRouter);
app.use('/api/stats', statsRouter);
app.use('/api/user', userRouter);
app.use('/api/tokens/', tokensRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
