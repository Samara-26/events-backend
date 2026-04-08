import { z } from 'zod';

const UserInputSchema = z.object({
    name: z.string().min(2).max(20),
    email: z.email(),
    password: z.string().min(8).max(20),
});

export default UserInputSchema;