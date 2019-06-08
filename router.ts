import * as Router from 'koa-router';
import {IndexController} from "./controllers/IndexController";

const router = new Router();
const index = new IndexController();

router.get('/', index.index);

export default router;
