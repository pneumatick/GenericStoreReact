const express = require('express');
const app = express();
const session = require('express-session');
const store = new session.MemoryStore();
const PORT = process.env.PORT || 8080;
const morgan = require('morgan');

const bodyParser = require('body-parser');
const cors = require('cors');
const whitelist = ['http://localhost:3000', 'http://localhost:8080'];

app.use(morgan('dev'));
app.use(cors({
   optionsSuccessStatus: 200,
   credentials: true,
   origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
 }));
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());*/
app.use(session({
        secret: 'someSecret',
        cookie: { 
            maxAge: 30000000, 
            sameSite: 'lax',
            secure: false,
            httpOnly: false
        },
        saveUninitialized: false,
        resave: false,
        store
    })
);
app.use(express.static('../public'));
//app.set('view engine', 'ejs');

// Routers
const Register = require('./Routers/registerRouter');
const Login = require('./Routers/loginRouter');
const Inventory = require('./Routers/inventoryRouter');
const Store = require('./Routers/storeRouter');
app.use('/register', Register);
app.use('/login', Login);
app.use('/inventory', Inventory);
app.use('/store', Store);

/* Middleware */

// Currently unused
function verifyAuthentication(req, res, next) {
    if (req.session.authenticated) {
        return next();
    }
    else {
        res.status(403).json({ msg: "User is not authenticated, and cannot view this page." });
    }
}

/* Express */

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});