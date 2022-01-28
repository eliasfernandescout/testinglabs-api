import { inject, injectable } from 'tsyringe';

import { ICreateAnswersHistoryDTO } from '../../dtos/ICreateAnswersHistoryDTO';
import { AnswerHistory } from '../../infra/mongodb/entities/AnswerHistory';
import { IAnswersHistoryRepository } from '../../repositories/IAnswersHistoryRepository';

@injectable()
class CreateAnswersHistoryUseCase {
    constructor(
        @inject('AnswersHistoryRepository')
        private answersHistoryRepository: IAnswersHistoryRepository,
    ) {}

    execute(
        contactId: string | undefined,
        answersHistoryData: ICreateAnswersHistoryDTO,
    ): AnswerHistory {
        const contact = this.answersHistoryRepository.create(
            contactId,
            answersHistoryData,
        );
        return contact;
    }
}

export { CreateAnswersHistoryUseCase };
