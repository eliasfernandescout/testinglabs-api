import mongoose from 'mongoose';

import { ICreateQuizzesUrlsDTO } from '../../../dtos/ICreateQuizzesUrlsDTO';
import { IQuizzesUrlsRepository } from '../../../repositories/IQuizzesUrlsRepository';
import { QuizzesUrls } from '../entities/QuizzesUrls';

const quizzesUrlsSchema = new mongoose.Schema({
  url: String,
  quizId: String,
  hostname: String,
});

const QuizzesUrlsDoc = mongoose.model<QuizzesUrls>(
  'QuizzesUrls',
  quizzesUrlsSchema,
);

class QuizzesUrlRepository implements IQuizzesUrlsRepository {
  create(quizzesUrlData: ICreateQuizzesUrlsDTO): QuizzesUrls {
    const quizzesUrls = new QuizzesUrls(quizzesUrlData);

    const quizUrl = new QuizzesUrlsDoc(quizzesUrls);
    quizUrl.save();
    return quizUrl;
  }

  async list(host: string): Promise<QuizzesUrls[] | null> {
    const myQuizzesUrls = await QuizzesUrlsDoc.find({ hostname: host });
    return myQuizzesUrls;
  }
}

export { QuizzesUrlRepository };
