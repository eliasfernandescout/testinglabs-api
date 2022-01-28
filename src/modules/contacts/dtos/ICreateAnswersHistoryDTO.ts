import { Tag } from '../infra/mongodb/entities/Tag';

interface ICreateAnswersHistoryDTO {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    list: string;
    contactId: string;
    tags: Tag[];
    api: 'mautic' | 'active-campaign';
    origin: 'facebook' | 'ads';
    quizId: string;
}

export { ICreateAnswersHistoryDTO };
