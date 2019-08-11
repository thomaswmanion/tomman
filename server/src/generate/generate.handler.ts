import { ResponseToolkit, Request } from "hapi";

export class GenerateHandler {
    handle(request: Request, h: ResponseToolkit, err?: Error) {
        return h.response({ nice: 'lol' }).code(200);
    }
}
