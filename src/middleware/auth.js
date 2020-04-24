const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  // console.log("auth================================", req.header);
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("token", token);
    const decoded = jwt.verify(token, "drippingwet");
    console.log("decoded", decoded);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    // console.log(user);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
