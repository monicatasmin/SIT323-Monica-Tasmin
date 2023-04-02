// reference: http://www.passportjs.org/packages/passport-jwt/ 
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const secretKey = "secret";

const jwt = require("jsonwebtoken");
const token = jwt.sign({ username: "monicatasmin" }, secretKey);

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

// reference/source: https://www.npmjs.com/package/body-parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// on browser to run: http://localhost:8080/add?n1=5&n2=2
const add = (n1, n2) => { 
    return n1 + n2;
}

// on browser to run: http://localhost:8080/substraction?n1=10&n2=5
const subtraction = (n1, n2) => {
    return n1 - n2;
}

// on browser to run: http://localhost:8080/multiplication?n1=10&n2=5
const multiplication = (n1, n2) => {
    return n1 * n2;
}

// on browser to run: http://localhost:8080/division?n1=5&n2=0
const division = (n1, n2) => {
    return n1 / n2;
}

// on browser to run: http://localhost:8080/add?n1=5&n2=2
// Authenticate requests
app.get("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1); 
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = add(n1, n2);
        res.status(200).json({statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({statusCode: 500, msg: error.toString() });
    }
});

// on browser to run: http://localhost:8080/substraction?n1=10&n2=5
app.get("/subtraction", passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1); 
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = subtraction(n1, n2);
        res.status(200).json({statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({statusCode: 500, msg: error.toString() });
    }
});

// on browser to run: http://localhost:8080/multiplication?n1=10&n2=5
app.get("/multiplication", passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1); 
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = multiplication(n1, n2);
        res.status(200).json({statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({statusCode: 500, msg: error.toString() });
    }
});

// on browser to run: http://localhost:8080/division?n1=5&n2=0
app.get("/division", passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1); 
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        if (n2 === 0) {
            throw new Error("n2 should not be 0; Can't be divided by 0");
        }
        const result = division(n1, n2);
        res.status(200).json({statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({statusCode: 500, msg: error.toString() });
    }
});

const port = 8080;
app.listen(port, () => {
    console.log("Hello, I'm listening on port " + port);
});