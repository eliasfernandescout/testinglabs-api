import { Response, Request } from 'express';
import { container } from 'tsyringe';

// import { SendContactActiveCampaignUseCase } from '../sendContact/SendContactActiveCampaignUseCase';
import { CreateAnswersHistoryUseCase } from './CreateAnswersHistoryUseCase';
import { CreateContacstUseCase } from './CreateContactsUseCase';
import { SendToCrmUseCase } from './SendToCrmUseCase';

class CreateContactsController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { contactData, historyAnswersData, quizData } = request.body;

            const createContactUseCase = container.resolve(
                CreateContacstUseCase,
            );
            const createAnswersHistoryUseCase = container.resolve(
                CreateAnswersHistoryUseCase,
            );
            const sendToCrmUseCase = container.resolve(SendToCrmUseCase);

            //--------------------------------------------------------------------
            // const sendContactActiveCampaign = container.resolve(
            //     SendContactActiveCampaignUseCase,
            // );
            // console.log(sendContactActiveCampaign);
            //--------------------------------------------------------------------

            const contact = await createContactUseCase.execute(contactData);
            const historyAnswers = await createAnswersHistoryUseCase.execute(
                contact?._id,
                historyAnswersData,
            );
            await sendToCrmUseCase.execute(contactData, quizData);

            //--------------------------------------------------------------------
            // const sendContactActive = await sendContactActiveCampaign.execute(
            //     contactData,
            // );
            // console.log(sendContactActive);
            //--------------------------------------------------------------------

            return response
                .status(201)
                .json({ contact, historyAnswers })
                .send();
        } catch (err) {
            console.log(err);
            throw new Error('error');
        }
    }
}

export { CreateContactsController };
