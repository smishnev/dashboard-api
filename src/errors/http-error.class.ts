export class HTTPError extends Error {
    statusCode: number;
    context?: string;

    constructor(statusCode: number, message: string, contect?: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.context = contect;
    }
}