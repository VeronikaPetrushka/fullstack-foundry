// створити публічний ендпоінт реєстрації користувача
// створити публічний ендпоінт логінізації користувача
// написати прошарок авторизації
// створити приватний ендпоінт для логаута користувача

import express from 'express';
import { logIn, logOut, register } from 'backend/authControllers/authControllers.js';
import { loginSchema, registerSchema } from 'backend/models/user.js';
import validateBody from 'backend/middlewares/validateBody.js';
import auth from 'backend/middlewares/authenticate.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), register);
authRouter.post('/login', validateBody(loginSchema), logIn);
authRouter.post('/logout', auth, logOut);

export default authRouter;
