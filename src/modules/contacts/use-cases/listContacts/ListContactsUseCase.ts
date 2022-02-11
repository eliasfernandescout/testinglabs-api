import { inject, injectable } from 'tsyringe';

import { Contact } from '../../infra/mongodb/entities/Contact';
import { IContactsRepository } from '../../repositories/IContactsRepository';

@injectable()
class ListContactsUseCase {
  constructor(
    @inject('ContactsRepository')
    private contactRepository: IContactsRepository,
  ) {}

  async execute(): Promise<Contact[]> {
    const contacts = await this.contactRepository.list();
    return contacts;
  }
}

export { ListContactsUseCase };
