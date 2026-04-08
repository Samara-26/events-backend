import { z } from 'zod';
import { Types } from 'mongoose';

const EventInputSchema = z.strictObject({
    title: z.string({ error: 'Title must be a string' }).min(1, { message: 'Title isrequired' }).max(100),
    description: z.string({ error: 'Description must be a string' }).min(1, { message: 'Description is required' }).max(1500),
    date: z.string(),
    location: z.string().min(1, { message: 'Location is required' }),
    price: z.number({ error: 'Price must be a number' }).min(1, { message: 'Price is required' }).min(0),
    createdBy: z.string()
});

export default EventInputSchema;