import { inject, injectable } from 'tsyringe';

import { Contact } from '../../infra/mongodb/entities/Contact';
import { Tag } from '../../infra/mongodb/entities/Tag';
import {
  ICreateContactDTO,
  IContactsRepository,
} from '../../repositories/IContactsRepository';

@injectable()
class CreateContacstUseCase {
  constructor(
    @inject('ContactsRepository')
    private contactRepository: IContactsRepository,
  ) {}

  async execute(contactData: ICreateContactDTO<Tag>): Promise<Contact> {
    try {
      const contact = await this.contactRepository.upsert(contactData);
      return contact;
    } catch (err) {
      console.log(err);
      throw new Error("Couldn't create contact");
    }
  }
}

export { CreateContacstUseCase };
