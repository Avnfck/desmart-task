import { Router, Request, Response  } from 'express';
import { createBooking } from '../controllers/bookdate.js';
import availabilityCheck from '../middleware/availabilityCheck.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({info: 'DeSmart Task'});
});

router.post('/create', availabilityCheck, createBooking);

export default router;