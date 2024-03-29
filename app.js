var createError = require('http-errors');
var express = require('express');
var path = require('path');
var port=3001;
var methodOverride=require("method-override");
var cookieParser = require('cookie-parser');
var session=require("express-session")
var logger = require('morgan');


var indexRouter = require('./server/src/routes/indexRoute');
var loginRouter = require('./server/src/routes/loginRoute');
var adminProductRouter = require('./server/src/routes/adminProductsRoute');
var usuarioRoute = require('./server/src/routes/usuarioRoute');
var paymentRouter = require('./server/src/routes/paymentRoute');
var cadastroRoute= require('./server/src/routes/cadastroRoute');
var produtosRouter=require('./server/src/routes/produtosRoute')
var departmentRouter= require('./server/src/routes/deparment');
var preloadDepartment = require("./server/src/helpers/preloadDepartment");
var carrinhoRouter = require('./server/src/routes/carrinho');
var carrinhoCompra = require('./server/src/routes/carrinhoCompra');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/src/views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:"senha"}));


app.use(express.static(path.join(__dirname, 'server/public')));

app.use((req,res,next)=>{
  console.log("entrou no middleware");
  console.log(req.url);
  next();
})

app.use(preloadDepartment)
app.use('/', indexRouter);

app.use('/', loginRouter);
app.use('/admin-produtos', adminProductRouter);
app.use('/MinhaConta', usuarioRoute);
app.use('/finalizacao',paymentRouter);
app.use('/cadastro',cadastroRoute);
app.use('/',produtosRouter)
app.use('/department',departmentRouter)
app.use('/',carrinhoRouter)
app.use('/',carrinhoCompra)




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