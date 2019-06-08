import * as Router from 'koa-router';
import { IndexController } from "./controllers/IndexController";
import { EventController } from "./controllers/EventController";

const router = new Router();
const index = new IndexController();
const event = new EventController();

router.get('/', index.index);
router.post('/event', event.create);

export default router;
