import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListContactsUseCase } from './ListContactsUseCase';

class ListContactsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getContactsUseCase = container.resolve(ListContactsUseCase);
    const contacts = await getContactsUseCase.execute();

    return response.json(contacts).send();
  }
}

export { ListContactsController };
