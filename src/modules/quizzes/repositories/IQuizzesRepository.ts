import { ICreateQuizzesDTO } from '../dtos/ICreateQuizzesDTO';
import { Quizzes } from '../infra/mongodb/entities/Quizzes';

interface IQuizzesRepository {
  showQuiz(quizId: string): Promise<Quizzes | null>;
  create(quizzesData: ICreateQuizzesDTO): Quizzes;
}

export { IQuizzesRepository, ICreateQuizzesDTO };
