import { BaseContext } from "koa";
import { EventCreator } from "../services/EventCreator";

export class EventController {
  private creator: EventCreator;

  constructor() {
    this.creator = new EventCreator();
  }

  public create = async (context: BaseContext) => {
    context.body = await this.creator.create(context.request.body);
  }
}
