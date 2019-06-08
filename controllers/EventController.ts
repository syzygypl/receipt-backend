import { BaseContext } from "koa";
import { EventCreator } from "../services/EventCreator";
import { getRepository } from "typeorm";
import { Event } from "../models/Event";

export class EventController {
  private creator: EventCreator;

  constructor() {
    this.creator = new EventCreator();
  }

  public create = async (context: BaseContext) => {
    context.body = await this.creator.create(context.request.body);
  };

  public getEvent = async (context: BaseContext) => {
    const { uuid: eventId } = context.params;
    const event: Event = await getRepository(Event).findOne(eventId);
    context.body = event;
  };
}
