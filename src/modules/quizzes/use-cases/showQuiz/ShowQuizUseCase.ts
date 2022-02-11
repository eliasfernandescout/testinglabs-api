import { inject, injectable } from 'tsyringe';

import { ICreateQuizzesDTO } from '../../dtos/ICreateQuizzesDTO';
import { Quizzes } from '../../infra/mongodb/entities/Quizzes';
import { IQuizzesRepository } from '../../repositories/IQuizzesRepository';

@injectable()
class ShowQuizUseCase {
  constructor(
    @inject('QuizzesRepository')
    private quizzesRepository: IQuizzesRepository,
  ) {}

  // FIXAR TYPAGEM E TIRAR RETORNO NULL
  async execute(quizId: string): Promise<Quizzes | null> {
    const quiz = await this.quizzesRepository.showQuiz(quizId);
    return quiz;
  }
}

export { ShowQuizUseCase };
