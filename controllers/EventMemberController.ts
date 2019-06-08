import {BaseContext} from "koa";
import {getRepository} from "typeorm";
import {Event} from "../models/Event";

export class EventMemberController {

    public login = async (context: BaseContext) => {
      const id: string = context.event;
      const event: Event = await getRepository(Event).findOneOrFail(id);
      const user: User = context.user;
      event.addMember();
    }
}
