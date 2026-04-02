import type { RequestHandler } from "express";
import { Event } from "#models";
import { json } from "node:stream/consumers";

const getEvents: RequestHandler = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch events' });
    }
};
const postEvent: RequestHandler = async () => { };
const putEvent: RequestHandler = async () => { };
const patchEvents: RequestHandler = async () => { };
const deleteEvents: RequestHandler = async () => { };