const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session')

//Extras
const dotenv = require('dotenv');
dotenv.config();

// middleware (ADD)
const regionController = require('./middleware/regionController');

const indexRouter = require('./routes/index');
const regionRouter = require('./routes/region');
const summonerRouter = require('./routes/summoner');
const matchRouter = require('./routes/match');
const leagueRouter = require('./routes/league');
const championRouter = require('./routes/champion');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/region', regionRouter);
app.use('/api/:region/summoner', regionController, summonerRouter);
app.use('/api/:region/match', regionController, matchRouter);
app.use('/api/:region/league', regionController, leagueRouter);
app.use('/api/:region/champion', regionController, championRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
