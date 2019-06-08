import {BaseContext} from "koa";

export class EventMemberController {

    public create = async (context: BaseContext) => {
        context.body = context.id;
    }
}
