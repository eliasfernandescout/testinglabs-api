import { Router } from 'express';

import { ShowQuizController } from '../../../../modules/quizzes/use-cases/showQuiz/ShowQuizController';

const quizzesRoutes = Router();

const getQuizController = new ShowQuizController();

quizzesRoutes.get('/', getQuizController.handle);

export { quizzesRoutes };
