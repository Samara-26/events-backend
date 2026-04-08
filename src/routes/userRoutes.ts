import { Router } from 'express';
import { createUser, getUsers } from '#controller';
import { validateBody } from '#middleware';
import { UserInputSchema } from '#schemas';

const userRoutes = Router();
userRoutes
    .route('/')
    .get(getUsers)
    .post(validateBody(UserInputSchema), createUser);//middleware

export default userRoutes;