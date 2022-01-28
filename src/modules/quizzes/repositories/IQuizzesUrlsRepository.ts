import { ICreateQuizzesUrlsDTO } from '../dtos/ICreateQuizzesUrlsDTO';
import { QuizzesUrls } from '../infra/mongodb/entities/QuizzesUrls';

interface IQuizzesUrlsRepository {
    list(host: string): Promise<QuizzesUrls[] | null>;
    create(quizUrlData: ICreateQuizzesUrlsDTO): QuizzesUrls;
}

export { IQuizzesUrlsRepository, ICreateQuizzesUrlsDTO };
