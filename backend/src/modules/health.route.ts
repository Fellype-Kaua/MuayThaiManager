import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', servidor: 'Muay Thai Manager', version: '1.0.0' });
});

export default router;