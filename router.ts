import * as Router from 'koa-router';

import postController from './controllers/postController';
import commentController from './controllers/commentController';

const router = new Router();

router.get('/posts', postController.index);
router.post('/posts', postController.create);
router.get('/posts/:id', postController.show);
router.put('/posts/:id', postController.update);
router.del('/posts/:id', postController.destroy);
router.get('/posts/:id/comments', commentController.index);
router.post('/posts/:id/comments', commentController.create);

export default router;
