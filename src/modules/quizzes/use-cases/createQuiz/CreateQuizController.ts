// import { Response, Request } from 'express';

// import { CreateQuizUrlUseCase } from './CreateQuizUrlUseCase';
// import { CreateQuizUseCase } from './CreateQuizUseCase';

// class CreateQuizController {
//     constructor(
//         private createQuizUseCase: CreateQuizUseCase,
//         private createQuizUrlUseCase: CreateQuizUrlUseCase,
//     ) {}

//     handle(request: Request, response: Response): Response {
//         const { quizInfo, urlInfo } = request.body;

//         const quiz = this.createQuizUseCase.execute(quizInfo);

//         const quizUrl = this.createQuizUrlUseCase.execute({
//             ...urlInfo,
//             quizId: quiz._id,
//         });

//         return response.status(201).json({ quiz, quizUrl }).send();
//     }
// }

// export { CreateQuizController };
