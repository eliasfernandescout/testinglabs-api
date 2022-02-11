import { ObjectId } from 'mongodb';

import { ICreateContactDTO } from '../dtos/ICreateContactDTO';
import { Contact } from '../infra/mongodb/entities/Contact';
import { Tag } from '../infra/mongodb/entities/Tag';

interface IContactsRepository {
  upsert(contactData: ICreateContactDTO<Tag>): Promise<Contact>;
  list(): Promise<Contact[]>;
  // sendToEmailPlataform(contactData: ICreateContactDTO): Promise<Contact[]>;
}

export { IContactsRepository, ICreateContactDTO };
