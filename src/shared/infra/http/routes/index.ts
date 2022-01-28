import { Router } from 'express';

import { contactsRoutes } from './contacts.routes';
import { quizzesRoutes } from './quizzes.routes';
import { quizzesUrlsRoutes } from './quizzesUrls.routes';

const router = Router();

router.use('/api/contacts', contactsRoutes);

router.use('/api/quizzes', quizzesRoutes);
router.use('/api/quizzesUrls', quizzesUrlsRoutes);

export { router };
