import { Router } from "express";
import { createEvent, deleteEvent, getEvent, getEvents } from '#controller';
import { validateBody } from "#middleware";
import { EventInputSchema } from "#schemas";

const eventRoutes = Router();

eventRoutes
    .route('/')
    .get(getEvents)
    .post(validateBody(EventInputSchema), createEvent); //middleware
eventRoutes
    .route('/:id')
    .get(getEvent)
    .delete(deleteEvent);

export default eventRoutes;