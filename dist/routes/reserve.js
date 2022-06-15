import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.json({ info: 'DeSmart Task' });
});
export default router;
