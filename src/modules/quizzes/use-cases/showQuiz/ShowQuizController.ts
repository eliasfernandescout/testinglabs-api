import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ShowQuizUseCase } from './ShowQuizUseCase';

class ShowQuizController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const quizUrl = request.query.quizUrl as string;

      if (!quizUrl) throw new Error('quizUrl must be defined');

      const showQuizUseCase = container.resolve(ShowQuizUseCase);
      const quiz = await showQuizUseCase.execute(quizUrl);

      return response.status(200).json(quiz).send();
    } catch {
      throw new Error('quizUrl must be defined');
    }
  }
}
export { ShowQuizController };
