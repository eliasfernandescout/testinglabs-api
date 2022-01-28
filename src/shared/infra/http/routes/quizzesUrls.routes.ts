import { Router } from 'express';

import { ListQuizzesUrlsController } from '../../../../modules/quizzes/use-cases/listQuizzesUrls/ListQuizzesUrlsController';

const quizzesUrlsRoutes = Router();

const getQuizzesUrlsController = new ListQuizzesUrlsController();

quizzesUrlsRoutes.get('/:host', getQuizzesUrlsController.handle);

export { quizzesUrlsRoutes };
