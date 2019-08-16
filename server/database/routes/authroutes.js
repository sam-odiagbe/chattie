const router = require("express").Router();
const validate = require("../../helpers/validations");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const withAuth = require("../../helpers/withAuth");

// route for creating user account
router.post("/create_account", (req, res) => {
  console.log(req.body);
  const { name, username, password } = req.body;
  const isValid = validate(["name", "username", "password"], {
    name,
    username,
    password
  });
  const {
    name: checkName,
    username: checkUsername,
    password: checkPassword
  } = isValid;
  if (checkName || checkUsername || checkPassword) {
    res.json({
      error: "Invalid data submitted",
      ...isValid
    });
  } else {
    // create the user account
    // check if there is user already
    User.findOne({ username }, (err, user) => {
      if (err) {
        // simply means searching could not be done
      } else {
        if (user) {
          // send a message that the user already exist to the user
          res.json({
            error: "Sorry but username is already taken"
          });
        } else {
          // create the user
          const user = new User({
            username,
            name
          });

          user.password = user.hashUserPassword(password);
          user.save((err, saved) => {
            if (err) {
              // send error message to user saying thier account could not be created
            } else {
              res.status(200).json({
                success: "Account has been created successfully"
              });
            }
          });
        }
      }
    });
  }
});

// route for logging users in
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // check if the user exist in our database
  User.findOne({ username }, (err, user) => {
    if (err) {
      // send message to user
    } else {
      if (user) {
        // check the user's password
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (passwordIsValid) {
          // send a cookie back to client\
          res
            .cookie("ssid", user._id, {
              expires: new Date(Date.now() + 259000000),
              httpOnly: true
            })
            .status(200)
            .json({
              user: { ...user._doc, password: null }
            });
        } else {
          // invalid credentials provided
          res.json({
            error: "Invalid credentials provided"
          });
        }
      } else {
        // send invalid credentials message back to user
        res.json({
          error: "Invalid credentials provided"
        });
      }
    }
  });
});

router.get("/verify", withAuth, (req, res, next) => {
  if (req.ssid) {
    User.findOne({ _id: req.ssid }, (err, user) => {
      if (err) {
        // will take care of this later
      } else {
        res.json({
          user: { ...user._doc, password: null }
        });
      }
    });
  }
});

router.post("/logout", withAuth, (req, res, next) => {
  res.clearCookie("ssid").json({
    logout: true
  });
});

module.exports = router;
