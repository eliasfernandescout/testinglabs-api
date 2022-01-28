import mongoose from 'mongoose';

import { ICreateCrmApiDTO } from '../../../dtos/ICreateCrmApiDTO';
import { ICrmApiRepository } from '../../../repositories/ICrmApiRepository';
import { CrmApi } from '../entities/CrmApi';

const crmApiSchema = new mongoose.Schema({
    type: String,
    key: String,
    url: String,
});

const CrmApitDoc = mongoose.model<CrmApi>('CrmApi', crmApiSchema);

class CrmApiRepository implements ICrmApiRepository {
    create(crmApiData: ICreateCrmApiDTO): CrmApi {
        const crmApiInstance = new CrmApi(crmApiData);

        const crmApi = new CrmApitDoc(crmApiInstance);
        crmApi.save();
        return crmApi;
    }

    async showCrmApi(id: string): Promise<CrmApi | null> {
        const crmApi = await CrmApitDoc.findOne({ _id: id });
        return crmApi;
    }

    // async sendToEmailPlatform(contact: ICreateContactDTO): Promise<void> {
    //     // const data = await axios.post('/', contact);
    //     // return data;
    // }
}

export { CrmApiRepository };
