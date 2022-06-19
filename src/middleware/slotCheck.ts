// @ts-ignore
import db from '../../dist/db/conn.js';
import { Booking } from '../models/booking.js';

const slotCheck = async (date: string, hour: number, minutes: number) => {
    const dbConnect = await db.getDb();
    await dbConnect
        .collection('Bookings')
        .find(
            {
                date,
                timeslot: `${hour}:${minutes}`
            },
            {
                projection: {
                    _id: 0
                }
            }
        )
        .toArray((err: Error, result: Booking) => {
            if (err) {
                return err.message;
            } else {
                return result;
            }
        });
}

export { slotCheck };