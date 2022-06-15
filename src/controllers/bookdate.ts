import { Request, Response } from 'express';
import { Booking } from '../models/booking.js';
// @ts-ignore
import db from '../../dist/db/conn.js';

export const createBooking = async (req: Request, res: Response) => {
    const data = req.body;
    const newBooking = new Booking(data.date, data.time, data.reason);

    const dbConnect = await db.getDb();
    await dbConnect
        .collection('Bookings')
        .insertOne(newBooking, (error: Error, result: Booking) => {
            if (error) {
                res.status(400).send(error.message);
            } else {
                res.status(201).json(newBooking);
            }
        });
};