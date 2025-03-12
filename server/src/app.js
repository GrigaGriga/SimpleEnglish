const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const cors = require('cors')

// const adviceRouter = require('./routers/adviceRouter');
// const authRouter = require('./routers/authRouter');
// const tokenRouter = require('./routers/tokenRouter');
// const corsConfig = require('./configs/cors.config')

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(cors(corsConfig))

// app.use('/api/advices', adviceRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/tokens/', tokenRouter);

module.exports = app;
