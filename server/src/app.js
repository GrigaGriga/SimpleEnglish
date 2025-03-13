const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routers/authRouter');
const wordsRouter = require('./routes/wordsRouter/wordsRouter');
const solveRouter = require('./routes/SolveRouter/solveRouter');
// const authRouter = require('./routers/authRouter');
// const cardsRouter = require('./routers/cardsRouter')
// const tokenRouter = require('./routers/tokenRouter');
const corsConfig = require('./config/cors.config');
const tokensRouter = require('./routers/tokensRouter');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors(corsConfig));


app.use('/api/auth', authRouter);
// app.use('/api/card', cardsRouter)
app.use('/api/cards', wordsRouter);
app.use('/api/solve', solveRouter);

 app.use('/api/tokens/', tokensRouter);

module.exports = app;
