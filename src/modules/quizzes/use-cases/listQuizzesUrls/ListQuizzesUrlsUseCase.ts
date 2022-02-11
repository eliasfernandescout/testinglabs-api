import { inject, injectable } from 'tsyringe';

import { QuizzesUrls } from '../../infra/mongodb/entities/QuizzesUrls';
import { IQuizzesUrlsRepository } from '../../repositories/IQuizzesUrlsRepository';

@injectable()
class ListQuizzesUrlsUseCase {
  constructor(
    @inject('QuizzesUrlsRepository')
    private quizUrlRepository: IQuizzesUrlsRepository,
  ) {}

  async execute(host: string): Promise<QuizzesUrls[] | null> {
    const quizzesUrls = await this.quizUrlRepository.list(host);
    return quizzesUrls;
  }
}

export { ListQuizzesUrlsUseCase };
