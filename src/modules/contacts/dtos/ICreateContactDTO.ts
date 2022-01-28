interface ICreateContactDTO<T> {
    _id?: string;
    firstName: string;
    lastname?: string;
    phone?: string;
    tags: T[];
    list: string;
    email: string;
}

export { ICreateContactDTO };
