var createError = require('http-errors');
var express = require('express');
var path = require('path');
var port=3000;
var methodOverride=require("method-override");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./server/src/routes/indexRoute');
var loginRouter = require('./server/src/routes/loginRoute');
var adminProductRouter = require('./server/src/routes/adminProductsRoute');
var usuarioRoute = require('./server/src/routes/usuarioRoute');
var paymentRouter = require('./server/src/routes/paymentRoute');
var cadastroRoute= require('./server/src/routes/cadastroRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server/public')));




app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/admin-produtos', adminProductRouter);
app.use('/MinhaConta', usuarioRoute);
app.use('/finalizacao',paymentRouter);
app.use('/cadastro',cadastroRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});
