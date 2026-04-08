import { z } from 'zod';
import { Types } from 'mongoose';

const UserInputSchema = z.object({
    name: z.string({ error: 'Name must be string' }).min(1, { message: 'Name is required' }).max(20),
    email: z.email(),
    password: z.string().min(8, { message: ' Password is required' }).max(20),
});

export default UserInputSchema;