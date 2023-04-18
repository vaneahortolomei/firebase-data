const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const data = require("./db/data.json");
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3030;


app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API.",
    });
});

app.get("/dashboard", (req, res) => {
    return res.json(data.dashboard);
    // jwt.verify(req.token, "the_secret_key", err => {
    //     if (err) {
    //         res.sendStatus(401);
    //     } else {
    //         res.json({
    //             events: data,
    //         });
    //     }
    // });
});

app.listen(port, () => {
    console.log(`Welcome, your app listening on port ${port}`);
});
