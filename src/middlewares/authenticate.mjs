import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
      if (err) {
        req.user = null;
      } else {
        req.user = { username: decoded.userName };
      }
      next();
    });
  } else {
    req.user = null;
    next();
  }
};

export default authenticateJWT;