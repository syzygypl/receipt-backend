import { EventModel } from "./event/EventModel";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { Event } from "../models/Event";

export class EventCreator {
  public async create(request: any): Promise<any> {
    const model: EventModel = plainToClass(EventModel, request);
    const errors = await validate(model);

    if (errors.length > 0) {
      return errors;
    }

    const event: Event = model.toEvent();
    await getRepository(Event).save(event);
    return event.uuid;
  }
}
