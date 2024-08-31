import express from 'express';
import { checkSchema } from 'express-validator';

import {
    answerSchema,
    choicesSchema,
    questionSchema
} from '../helpers/validation.js';

import validate from '../middleware/validate.js';

import checkAnswerController from '../controllers/check-answer.js';
import createController from '../controllers/create.js';
import deleteController from '../controllers/delete.js';
import getController from '../controllers/get.js';
import listController from '../controllers/list.js';
import updateController from '../controllers/update.js';

const router = express.Router();

router.post('/create',
    checkSchema({ ...questionSchema, ...choicesSchema }),
    validate,
    createController)

router.post('/update',
    checkSchema({ ...questionSchema, ...choicesSchema }),
    validate,
    updateController)

router.post('/delete',
    checkSchema({ ...questionSchema }),
    validate,
    deleteController)

router.get('/get',
    checkSchema({ ...questionSchema }),
    validate,
    getController)

router.get('/list', listController)

router.get('/check-answer',
    checkSchema({ ...questionSchema, ...answerSchema }),
    validate,
    checkAnswerController)

export default router;