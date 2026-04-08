import type { RequestHandler } from "express";
import { Event } from "#model";

export const getEvents: RequestHandler = async (req, res) => {
    try {
        const events =
            await Event.find().populate('createdBy', 'name email');
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch events' });
    }
};
export const getEvent: RequestHandler = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            res.status(404).json({ error: 'event not found' });
            return;
        }
        res.status(200).json(event);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'failed to get event' });
    }
}
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
export const deleteEvent: RequestHandler = async (req, res) => {
    try {
        const event =
            await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            res.status(404).json({ error: 'event not found' });
            return;
        }
        res.status(200).json({ message: 'event successfully deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'failed to delete event' });
    }
};

