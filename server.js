const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const data = require("./db/data.json");
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const port = 3000;


app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API.",
    });
});

app.get('/dashboard', verifyToken, (req, res) => {
    jwt.verify(req.token, 'the_secret_key', err => {
        if (err) {
            res.sendStatus(401)
        } else {
            res.json({
                data: data.dashboard,
            })
        }
    })
});


app.post('/register', (req, res) => {
    if (req.body) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        const data = JSON.stringify(user, null, 2)
        let dbUserEmail = require('./db/user.json').email;

        if (dbUserEmail === req.body.email) {
            res.sendStatus(400)
        } else {
            fs.writeFile('./db/user.json', data, err => {
                if (err) {
                    console.log(err + data)
                } else {
                    const token = jwt.sign({user}, 'the_secret_key')
                    res.json({
                        token,
                        email: user.email,
                        name: user.name
                    })
                }
            })
        }
    } else {
        res.sendStatus(400)
    }
});

app.post('/login', (req, res) => {
    const userDB = fs.readFileSync('./db/user.json')
    const userInfo = JSON.parse(userDB);
    if (
        req.body &&
        req.body.email === userInfo.email &&
        req.body.password === userInfo.password
    ) {
        const token = jwt.sign({userInfo}, 'the_secret_key')
        res.json({
            token,
            email: userInfo.email,
            name: userInfo.name
        })
    } else {
        res.sendStatus(400)
    }
});


// MIDDLEWARE
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];


    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ');
        req.token = bearerToken[1];
        next()
    } else {
        res.sendStatus(401)
    }
}

app.listen(port, () => {
    console.log(`Welcome, your app listening on port ${port}`);
});
