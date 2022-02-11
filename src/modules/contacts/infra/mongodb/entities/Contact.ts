// interface IContactParams {
//     firstname: string;
//     lastname?: string;
//     phone?: string;
//     tags: string[];
//     list: string;
//     email: string;
// }

import { ObjectId } from 'mongodb';

import { Tag } from './Tag';

class Contact {
  _id?: string;
  firstName: string;
  lastname?: string;
  phone?: string;
  tags: ObjectId[] | Tag[];
  list: string;
  email: string;

  constructor({ firstName, lastname, phone, tags, list, email }: Contact) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.phone = phone;
    this.tags = tags;
    this.list = list;
    this.email = email;
  }

  // sendToEmailPlatform(api) {
  //     if (api.type === 'mautic') {
  //         // mautic req
  //     }
  //     if (api.type === 'atice-campaign') {
  //         // active request
  //     }
  // }
}

export { Contact };
