var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Booking } from '../models/booking.js';
// @ts-ignore
import db from '../../dist/db/conn.js';
export const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newBooking = new Booking(data.date, data.time, data.reason);
    const slot = data.time.split(':');
    const dbConnect = yield db.getDb();
    yield dbConnect
        .collection('Bookings')
        .find({
        date: data.date,
        timeslot: `${slot[0]}:${slot[1]}`
    }, {
        projection: {
            _id: 0
        }
    })
        .toArray((error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            res.status(400).send(error.message);
        }
        else {
            if (result.length > 0) {
                res.send(`Selected timeslot ${data.time} at ${data.date} is already taken. Please choose free timeslot.`);
                return;
            }
            yield dbConnect
                .collection('Bookings')
                .insertOne(newBooking, (error, result) => {
                if (error) {
                    res.status(400).send(error.message);
                }
                else {
                    res.status(201).json(newBooking);
                }
            });
        }
    }));
});
