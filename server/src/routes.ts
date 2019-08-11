import { ServerRoute } from "hapi";
import { GenerateHandler } from "./generate/generate.handler";

export const routes: ServerRoute[] = [
    { path: '/generate', method: 'post', handler: new GenerateHandler().handle },
    { path: '/test', method: 'get', handler: new GenerateHandler().handle }
];
