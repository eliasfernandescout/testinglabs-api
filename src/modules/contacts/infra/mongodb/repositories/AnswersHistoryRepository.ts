import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

import {
    IAnswersHistoryRepository,
    ICreateAnswersHistoryDTO,
} from '../../../repositories/IAnswersHistoryRepository';
import { AnswerHistory } from '../entities/AnswerHistory';
import { Tag } from '../entities/Tag';

const answersHistorySchema = new mongoose.Schema(
    {
        contactId: String,
        tags: [ObjectId],
        api: String,
        origin: String,
        quizId: String,
        list: String,
    },
    { timestamps: true },
);

const AnswersHistoryDoc = mongoose.model<AnswerHistory>(
    'AnswerHistory',
    answersHistorySchema,
);

class AnswersHistoryRepository implements IAnswersHistoryRepository {
    create(
        contactId: string,
        answersHistoryData: ICreateAnswersHistoryDTO,
    ): AnswerHistory {
        const answersHistoryDataToDB = {
            ...answersHistoryData,
            tags: answersHistoryData.tags.map(t => t._id),
        };

        const answersHistoryInstance = new AnswerHistory(
            contactId,
            answersHistoryDataToDB,
        );

        const answersHistory = new AnswersHistoryDoc(answersHistoryInstance);
        answersHistory
            .save()
            .then()
            .catch(err => console.log(err.message));
        return answersHistory;
    }

    async list() {
        const answersHistory = await AnswersHistoryDoc.find();
        return answersHistory;
    }
}

export { AnswersHistoryRepository };
