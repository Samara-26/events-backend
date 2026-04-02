import { Router } from "express";
import { createEvent, getEvents } from '#controllers';

const eventRoutes = Router();
eventRoutes.get('/', getEvents);
eventRoutes.post('/', createEvent);

export default eventRoutes;