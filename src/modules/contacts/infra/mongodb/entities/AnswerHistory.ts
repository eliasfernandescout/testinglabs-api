import { ObjectId } from 'mongodb';

class AnswerHistory {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    contactId: string;
    list: string;
    tags: ObjectId[];
    api: 'mautic' | 'active-campaign';
    origin: 'facebook' | 'ads';
    quizId: string;

    constructor(
        contactId: string,
        { tags, api, origin, quizId, list }: AnswerHistory,
    ) {
        this.contactId = contactId;
        this.tags = tags;
        this.api = api;
        this.origin = origin;
        this.quizId = quizId;
        this.list = list;
    }
}

export { AnswerHistory };
