import { Request, Response } from 'express';
import { Booking } from '../models/booking.js';
// @ts-ignore
import db from '../../dist/db/conn.js';

export const createBooking = async (req: Request, res: Response) => {
    const data = req.body;
    const newBooking = new Booking(data.date, data.time, data.reason);
    const slot = data.time.split(':');
    const dbConnect = await db.getDb();

    await dbConnect
        .collection('Bookings')
        .find(
            {
                date: data.date,
                timeslot: `${slot[0]}:${slot[1]}`
            },
            {
                projection: {
                    _id: 0
                }
            }
        )
        .toArray(async (error: Error, result: Booking[]) => {
            if (error) {
                res.status(400).send(error.message);
            } else {
                if (result.length > 0) {
                    res.send(`Selected timeslot ${data.time} at ${data.date} is already taken. Please choose free timeslot.`);
                    return;
                }
                await dbConnect
                    .collection('Bookings')
                    .insertOne(newBooking, (error: Error, result: Booking) => {
                        if (error) {
                            res.status(400).send(error.message);
                        } else {
                            res.status(201).json(newBooking);
                        }
                    });
            }
        });
        
    };