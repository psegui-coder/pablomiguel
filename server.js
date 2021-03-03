const path = require('path')
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/db')


//Load config
dotenv.config({ path: './config/config.env'})

// Passport config
require('./config/passport')(passport)

//Conexion DB
connectDB()

//Handlebar por defecto tenemos el main.hbs
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');



// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
  )

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())


//Static folder
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

//Puerto
app.listen(3000);
console.log("Server en el puerto", 3000);
