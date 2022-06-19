import { RequestHandler } from "express";
import dateCheck from '../middleware/dateCheck.js';

const availabilityCheck: RequestHandler = async (req, res, next) => {
    const date = req.body.date.split('.');
    const timeslot = req.body.time.split(':');

    const dateValidation = await dateCheck(date[2], date[1], date[0]);
    if (dateValidation != true) {
        res.send(dateValidation);
        return;
    }

    next();
}

export default availabilityCheck;