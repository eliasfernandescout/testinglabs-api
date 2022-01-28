import { ObjectId } from 'mongodb';

class Tag {
    _id: ObjectId;
    title: string;
    crmId: string;

    constructor({ title, crmId }: Tag) {
        this._id = new ObjectId();
        this.title = title;
        this.crmId = crmId;
    }
}

export { Tag };
