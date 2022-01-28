import mongoose, { Schema } from 'mongoose';

import { ICreateQuizzesDTO } from '../../../dtos/ICreateQuizzesDTO';
import { IQuizzesRepository } from '../../../repositories/IQuizzesRepository';
import { Quizzes } from '../entities/Quizzes';

const quizzesSchema = new mongoose.Schema({
    quizId: String,
    url: String,
    listId: String,
    questions: [
        {
            questionTitle: String,
            questionAnswers: [
                {
                    answerTitle: String,
                    tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
                },
            ],
        },
    ],
    api: Object,
    defaultRedirectUrl: String,
});

const QuizzesDoc = mongoose.model<Quizzes>('Quizzes', quizzesSchema);

const tagSchema = new Schema({
    crmApiId: Schema.Types.ObjectId,
    title: String,
    crmId: String,
});
const TagDoc = mongoose.model<Quizzes>('Tag', tagSchema);

class QuizzesRepository implements IQuizzesRepository {
    create(quizzesData: ICreateQuizzesDTO): Quizzes {
        const quizzes = new Quizzes(quizzesData);

        const quiz = new QuizzesDoc(quizzes);
        quiz.save();
        return quiz;
    }

    // FIXAR TYPAGEM E TIRAR RETORNO NULL
    async showQuiz(quizUrl: string): Promise<Quizzes | null> {
        const myQuiz = await QuizzesDoc.findOne({ url: quizUrl }).populate(
            'questions.questionAnswers.tag',
        );
        console.log(myQuiz?.toObject().url, quizUrl);
        return myQuiz;
    }
}

export { QuizzesRepository };
