const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const auth = req.headers.token;
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_ENC_KEY, (err, user) => {
      if (err) {
        res.status(503).json("token is not valid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};
const validateToken = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("not allowed to do so");
    }
  });
};
module.exports = {
  verifyToken,
  validateToken,
};
