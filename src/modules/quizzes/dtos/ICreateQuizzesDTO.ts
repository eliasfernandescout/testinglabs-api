import { ObjectId } from 'mongoose';

interface IAnswers {
  answerTitle: string;
  tag: string;
  redirectUrl: string;
}

interface IQuestions {
  questionTitle: string;
  questionAnswers: IAnswers[];
}

interface ICreateQuizzesDTO {
  listId: string;
  quizId: string;
  questions: IQuestions[];
  api: string;
  url: string;
  defaultRedirectUrl: string;
}

export { IAnswers, IQuestions, ICreateQuizzesDTO };
