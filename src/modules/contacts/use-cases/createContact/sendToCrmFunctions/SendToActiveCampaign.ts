import axios from 'axios';

import { ICreateContactDTO } from '../../../dtos/ICreateContactDTO';
import { CrmApi } from '../../../infra/mongodb/entities/CrmApi';
import { Tag } from '../../../infra/mongodb/entities/Tag';

let axiosInstance: any;

interface IFormatContactToActiveCampaign {
    email: string;
    firstName: string;
    phone?: string;
}

interface IFormatContactFromActiveCampaign {
    id: string;
    udate: Date;
    cdate: Date;
    links: {
        contactTags: string;
    };
}

interface ITag {
    id: string;
    tag: string;
}

interface IContactDataWithFormattedTags extends ICreateContactDTO<string> {
    tags: string[];
}

function createAxiosInstance(apiData: CrmApi) {
    return axios.create({
        baseURL: apiData.url,
        // timeout: 1000,
        headers: {
            'Api-Token': apiData.key,
            'Content-Type': 'application/json',
        },
    });
}

function generateContactObj(contactData: ICreateContactDTO<Tag>) {
    const contactToActive: IFormatContactToActiveCampaign = {
        email: contactData.email,
        firstName: contactData.firstName,
    };

    contactData.phone?.trim() && (contactToActive.phone = contactData.phone);
    return contactToActive;
}

async function postContactData(
    contactToActive: IFormatContactToActiveCampaign,
): Promise<{
    contactFromActive: IFormatContactFromActiveCampaign;
    id: string;
}> {
    const {
        data: { contact: contactFromActive },
    }: { data: { contact: IFormatContactFromActiveCampaign } } =
        await axiosInstance.post(
            `/contact/sync`,
            JSON.stringify({ contact: contactToActive }),
        );

    const { id } = contactFromActive;
    return { contactFromActive, id };
}

async function addTag(tag: string, id: string) {
    await axiosInstance.post(`/contactTags`, {
        contactTag: {
            contact: id,
            tag,
        },
    });
}

async function verifyAndUpdateTags(
    optIds: string[],
    answerId: string,
    currentTags: ITag[],
    userId: string,
) {
    try {
        const answeredQuestion = currentTags.filter(tg => {
            return optIds.find(t => t === tg.tag);
        });

        const hasSameTag = answeredQuestion[0]?.id === answerId;

        if (!answeredQuestion[0]) {
            await addTag(answerId, userId);
        } else if (!hasSameTag) {
            await axiosInstance.delete(
                `/contactTags/${answeredQuestion[0].id}`,
            );
            await addTag(answerId, userId);
        }
    } catch (err) {
        throw new Error('Error verifing and/or updating tags');
    }
}

async function addOrUpdateTags(
    contactData: IContactDataWithFormattedTags,
    contactFromActive: IFormatContactFromActiveCampaign,
    id: string,
    allTags: string[][],
) {
    const isNew = contactFromActive.cdate === contactFromActive.udate;
    if (isNew) {
        contactData.tags.forEach(tag => addTag(tag, id));
    } else {
        const {
            data: { contactTags },
        }: any = await axiosInstance.get(contactFromActive.links.contactTags);

        allTags.forEach((tagsArray, index) => {
            verifyAndUpdateTags(
                tagsArray,
                contactData.tags?.[index],
                contactTags,
                id,
            );
        });
    }
}

async function addContactToList(listId: string, contactId: string) {
    await axiosInstance.post(`/contactLists`, {
        contactList: {
            list: listId,
            contact: contactId,
            status: '1',
        },
    });
}

async function sendToActiveCampaign(
    contactData: ICreateContactDTO<Tag>,
    crmApi: CrmApi,
    allQuizTags: Tag[][],
) {
    axiosInstance = createAxiosInstance(crmApi);
    const contactToActive = generateContactObj(contactData);

    try {
        const { contactFromActive, id } = await postContactData(
            contactToActive,
        );

        const allQuizTagsCrmIds = allQuizTags.map(tagsQ =>
            tagsQ.map(t => t.crmId),
        );
        const contactDataWithFormattedTags = {
            ...contactData,
            tags: contactData.tags.map(t => t.crmId),
        };

        if (contactDataWithFormattedTags.tags.length > 0)
            await addOrUpdateTags(
                contactDataWithFormattedTags,
                contactFromActive,
                id,
                allQuizTagsCrmIds,
            );

        await addContactToList(contactDataWithFormattedTags.list, id);
    } catch (err) {
        console.log(err);
    }
}

export { sendToActiveCampaign };
