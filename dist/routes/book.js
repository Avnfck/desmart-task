import { Router } from 'express';
import { createBooking } from '../controllers/bookdate.js';
const router = Router();
router.get('/', (req, res) => {
    res.json({ info: 'DeSmart Task' });
});
router.post('/create', createBooking);
export default router;
