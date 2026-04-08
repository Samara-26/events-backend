import type { RequestHandler } from "express";
import { User } from '#model';

export const createUser: RequestHandler = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'failed to create user' });
    }
};
export const getUsers: RequestHandler = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch users' });
    }
}
