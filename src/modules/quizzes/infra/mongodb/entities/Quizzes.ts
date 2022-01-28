import {
    IAnswers,
    ICreateQuizzesDTO,
    IQuestions,
} from '../../../dtos/ICreateQuizzesDTO';

// interface IAnswer {
//     answerTitle: string;
//     tag: string;
//     redirectUrl: string;
// }

// interface IQuestion {
//     questionTitle: string;
//     questionAnswers: IAnswer[];
// }

class Quizzes {
    _id?: string;
    questions: IQuestions[];
    listId: string;
    api: string;
    url: string;
    defaultRedirectUrl: string;

    constructor({
        listId,
        api,
        questions,
        url,
        defaultRedirectUrl = '',
    }: Quizzes) {
        this.listId = listId;
        this.api = api;
        this.questions = questions;
        this.url = url;
        this.defaultRedirectUrl = defaultRedirectUrl;
    }
}

export { Quizzes };
