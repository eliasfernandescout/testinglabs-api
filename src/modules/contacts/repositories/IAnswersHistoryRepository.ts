import { ICreateAnswersHistoryDTO } from '../dtos/ICreateAnswersHistoryDTO';
import { AnswerHistory } from '../infra/mongodb/entities/AnswerHistory';

interface IAnswersHistoryRepository {
  list(): Promise<AnswerHistory[]>;
  create(
    contactId: string | undefined,
    submissionData: ICreateAnswersHistoryDTO,
  ): AnswerHistory;
}

export { IAnswersHistoryRepository, ICreateAnswersHistoryDTO };
