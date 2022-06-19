var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dateCheck from '../middleware/dateCheck.js';
const availabilityCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const date = req.body.date.split('.');
    const timeslot = req.body.time.split(':');
    const dateValidation = yield dateCheck(date[2], date[1], date[0]);
    if (dateValidation != true) {
        res.send(dateValidation);
        return;
    }
    next();
});
export default availabilityCheck;
