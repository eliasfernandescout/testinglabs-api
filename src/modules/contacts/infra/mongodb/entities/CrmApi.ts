class CrmApi {
  type: string;
  key: string;
  url: string;

  constructor({ type, key, url }: CrmApi) {
    this.type = type;
    this.key = key;
    this.url = url;
  }
}

export { CrmApi };
