
import express from 'express';
import { MovieCreate, MovieIndex, MovieUpdate } from '../controllers/movies.controller';

const router = express.Router()

router.get('/', MovieIndex)

router.post('/', MovieCreate)

router.put('/:id', MovieUpdate)

router.delete('/:id', )

export default router;
