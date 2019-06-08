import {BaseContext} from "koa";
import {EventCreator} from "../services/EventCreator";

class EventController {

    private creator: EventCreator;

    constructor() {
        this.creator = new EventCreator();
    }

    public async create(context: BaseContext) {

    }
}
