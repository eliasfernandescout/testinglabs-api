import { inject, injectable } from 'tsyringe';

import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';
import { CrmApi } from '../../infra/mongodb/entities/CrmApi';
import { Tag } from '../../infra/mongodb/entities/Tag';
import { ICrmApiRepository } from '../../repositories/ICrmApiRepository';
import { sendToActiveCampaign } from './sendToCrmFunctions/SendToActiveCampaign';

interface IQuizData {
    crmApiId: string;
    allTags: Tag[][];
}

@injectable()
class SendToCrmUseCase {
    constructor(
        @inject('CrmApiRepository')
        private crmApiRepository: ICrmApiRepository,
    ) {}

    async execute(
        contactData: ICreateContactDTO<Tag>,
        quizData: IQuizData,
    ): Promise<void> {
        try {
            const crmApi = await this.crmApiRepository.showCrmApi(
                quizData.crmApiId,
            );

            if (crmApi?.type === 'activecampaign') {
                sendToActiveCampaign(contactData, crmApi, quizData.allTags);
            }
        } catch (err) {
            console.log(err);
            throw new Error("Couldn't create contact");
        }
    }
}

export { SendToCrmUseCase };
