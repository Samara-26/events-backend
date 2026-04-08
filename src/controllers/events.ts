import type { RequestHandler } from "express";
import { Event } from "#models";
import { log } from "console";

export const getEvents: RequestHandler = async (req, res) => {
    try {
        const events =
            await Event.find().populate('createdBy', 'name email');
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch events' });
    }
};
export const createEvent: RequestHandler = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'failed to create event' });
    }
};
export const putEvent: RequestHandler = async () => { };
export const patchEvents: RequestHandler = async () => { };
export const deleteEvents: RequestHandler = async () => { };

