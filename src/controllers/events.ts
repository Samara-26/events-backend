import type { RequestHandler } from "express";
import { Event } from "#models";
import { json } from "node:stream/consumers";

export const getEvents: RequestHandler = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch events' });
    }
};
export const createEvent: RequestHandler = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'failed to create event' });
    }
};
export const putEvent: RequestHandler = async () => { };
export const patchEvents: RequestHandler = async () => { };
export const deleteEvents: RequestHandler = async () => { };

