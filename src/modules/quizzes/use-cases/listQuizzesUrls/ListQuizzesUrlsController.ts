import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListQuizzesUrlsUseCase } from './ListQuizzesUrlsUseCase';

class ListQuizzesUrlsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { host } = request.params;

    const listQuizzesUrlsUseCase = container.resolve(ListQuizzesUrlsUseCase);
    const quizzesUrls = await listQuizzesUrlsUseCase.execute(host);

    return response.status(200).json(quizzesUrls).send();
  }
}

export { ListQuizzesUrlsController };
