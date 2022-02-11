import 'reflect-metadata';
import { container } from 'tsyringe';

import { AnswersHistoryRepository } from '../../modules/contacts/infra/mongodb/repositories/AnswersHistoryRepository';
import { ContactsRepository } from '../../modules/contacts/infra/mongodb/repositories/ContactsRepository';
import { CrmApiRepository } from '../../modules/contacts/infra/mongodb/repositories/CrmApiRepository';
import { IAnswersHistoryRepository } from '../../modules/contacts/repositories/IAnswersHistoryRepository';
import { IContactsRepository } from '../../modules/contacts/repositories/IContactsRepository';
import { ICrmApiRepository } from '../../modules/contacts/repositories/ICrmApiRepository';
import { QuizzesRepository } from '../../modules/quizzes/infra/mongodb/repositories/QuizzesRepository';
import { QuizzesUrlRepository } from '../../modules/quizzes/infra/mongodb/repositories/QuizzesUrlsRepository';
import { IQuizzesRepository } from '../../modules/quizzes/repositories/IQuizzesRepository';
import { IQuizzesUrlsRepository } from '../../modules/quizzes/repositories/IQuizzesUrlsRepository';

container.registerSingleton<IContactsRepository>(
  'ContactsRepository',
  ContactsRepository,
);

container.registerSingleton<IAnswersHistoryRepository>(
  'AnswersHistoryRepository',
  AnswersHistoryRepository,
);

container.registerSingleton<IQuizzesRepository>(
  'QuizzesRepository',
  QuizzesRepository,
);

container.registerSingleton<IQuizzesUrlsRepository>(
  'QuizzesUrlsRepository',
  QuizzesUrlRepository,
);

container.registerSingleton<ICrmApiRepository>(
  'CrmApiRepository',
  CrmApiRepository,
);
