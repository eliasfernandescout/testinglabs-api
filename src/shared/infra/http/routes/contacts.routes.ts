import { Router } from 'express';

import { CreateContactsController } from '../../../../modules/contacts/use-cases/createContact/CreateContactsController';
import { ListContactsController } from '../../../../modules/contacts/use-cases/listContacts/ListContactsController';

const contactsRoutes = Router();

const createContactController = new CreateContactsController();
const listContactsController = new ListContactsController();

contactsRoutes.post('/', createContactController.handle);
contactsRoutes.get('/', listContactsController.handle);

export { contactsRoutes };
