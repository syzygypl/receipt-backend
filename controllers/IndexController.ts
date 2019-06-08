import {BaseContext} from "koa";

export class IndexController {
    public async index(context: BaseContext) {
        context.body = "Ok";
    }
}
