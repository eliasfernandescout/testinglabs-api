import { ICreateCrmApiDTO } from '../dtos/ICreateCrmApiDTO';
import { CrmApi } from '../infra/mongodb/entities/CrmApi';

interface ICrmApiRepository {
    create(crmApiData: ICreateCrmApiDTO): CrmApi;
    showCrmApi(id: string): Promise<CrmApi | null>;
}
export { ICrmApiRepository, ICreateCrmApiDTO };
