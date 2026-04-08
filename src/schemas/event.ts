import { z } from 'zod';
import { de } from 'zod/locales';

const eventInputSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(2).max(1500),
    date: z.string(),
    location: z.string().min(2),
    price: z.number().min(0),
    createdBy: z.string()
});

export default eventInputSchema;