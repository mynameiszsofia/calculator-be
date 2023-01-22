import express, { Request, Response } from 'express';
const router = express.Router();
import {getNumber,saveNumber} from '../controllers/index'

router.route('/').get(getNumber)
router.route('/:num').post(saveNumber);

export default router;