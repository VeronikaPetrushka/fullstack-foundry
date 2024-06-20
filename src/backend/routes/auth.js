// створити публічний ендпоінт реєстрації користувача
// створити публічний ендпоінт логінізації користувача
// написати прошарок авторизації
// створити приватний ендпоінт для логаута користувача

import express from 'express';
import { logIn, logOut, register } from '../authControllers/authControllers.js';
import { loginSchema, registerSchema } from '../models/user.js';
import validateBody from '../middlewares/validateBody.js';
import auth from '../middlewares/authenticate.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), register);
authRouter.post('/login', validateBody(loginSchema), logIn);
authRouter.post('/logout', auth, logOut);

export default authRouter;
