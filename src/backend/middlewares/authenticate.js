import jwt from 'jsonwebtoken';
import { User } from 'backend/models/user.js';
import HttpError from './HttpError.js';

function auth(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (typeof authorizationHeader !== 'string') {
    return next(HttpError(401, 'Not authorized!'));
  }

  const [bearer, token] = authorizationHeader.split(' ', 2);

  if (bearer !== 'Bearer') {
    return next(HttpError(401, 'Not authorized!'));
  }

  jwt.verify(token, process.env.JWT, async (error, decode) => {
    if (error) {
      return next(HttpError(401, 'Not authorized!'));
    }

    try {
      const user = await User.findById(decode.id);

      if (user === null) {
        return next(HttpError(401, 'Not authorized'));
      }

      if (user.token !== token) {
        return next(HttpError(401, 'Invalid token!'));
      }

      req.user = { id: user._id, email: user.email };

      next();
    } catch (error) {
      next(error);
    }
  });
}

export default auth;
