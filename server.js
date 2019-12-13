const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./backend/routes/Api');
const passport = require("passport");
const path = require('path');

const users = require("./backend/routes/users");

const db = require('./config/keys').mongoURI;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', api);

// mongoose.connect(
//     'mongodb://user:Password1@ds137729.mlab.com:37729/heroku_3b788fxf'
//     ,(err) => {
//         if (err) {
//             console.log(`something bad happened, ${err}`);
//         } else {
//             console.log('something good happened');
//         }
//     }
// )

mongoose
    .connect(
        process.env.MONGODB_URI || db,
        {useNewUrlParser: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('src/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'src', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`connected on port ${port}`);
});