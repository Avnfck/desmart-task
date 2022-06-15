import { Router, Request, Response  } from 'express';
import { createBooking } from '../controllers/bookdate.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({info: 'DeSmart Task'});
});

router.post('/create', createBooking);

export default router;