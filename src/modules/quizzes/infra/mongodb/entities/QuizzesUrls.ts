class QuizzesUrls {
    _id?: string;
    hostname: string;
    url: string;
    quizId: string;

    constructor({ hostname, url, quizId }: QuizzesUrls) {
        this.hostname = hostname;
        this.url = url;
        this.quizId = quizId;
    }
}

export { QuizzesUrls };
