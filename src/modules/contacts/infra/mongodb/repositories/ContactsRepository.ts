import mongoose from 'mongoose';

import {
    IContactsRepository,
    ICreateContactDTO,
} from '../../../repositories/IContactsRepository';
import { Contact } from '../entities/Contact';
import { Tag } from '../entities/Tag';

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastname: String,
    phone: String,
    tags: Array,
    list: String,
    email: String,
});

const ContactDoc = mongoose.model<Contact>('Contact', contactSchema);

class ContactsRepository implements IContactsRepository {
    async upsert(contactData: ICreateContactDTO<Tag>): Promise<Contact> {
        const contactToDb = {
            ...contactData,
            tags: contactData.tags.map(t => t._id),
        };
        const contactInstance = new Contact(contactToDb);

        // const contact = new ContactDoc(contactInstance);
        // contact.updateOne();
        try {
            const contact: any = await ContactDoc.findOneAndUpdate(
                { email: contactInstance.email },
                contactInstance,
                { upsert: true, returnOriginal: false },
            );

            return contact;
        } catch (err) {
            console.log(err);
            throw new Error('err');
        }
    }

    async list() {
        const contacts = await ContactDoc.find();
        return contacts;
    }
}

export { ContactsRepository };
