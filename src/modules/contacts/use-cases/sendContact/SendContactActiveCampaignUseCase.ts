// import { injectable, inject } from 'tsyringe';

// import { Contact } from '../../infra/mongodb/entities/Contact';
// import {
//     IContactsRepository,
//     ICreateContactDTO,
// } from '../../repositories/IContactsRepository';

// @injectable()
// class SendContactActiveCampaignUseCase {
//     constructor(
//         @inject('ContactsRepository')
//         private contactRepository: IContactsRepository,
//     ) {}

//     async execute(contactData: ICreateContactDTO): Promise<Contact[]> {
//         try {
//             // AXIOS E FUNCAO PARA ENVIAR PARA ACTIVE CAMPAIGN
//             const contact = await this.contactRepository.sendToEmailPlataform(
//                 contactData,
//             );
//             return contact;
//         } catch (err) {
//             console.log(err);
//             throw new Error("Couldn't send contact");
//         }
//     }
// }

// export { SendContactActiveCampaignUseCase };
