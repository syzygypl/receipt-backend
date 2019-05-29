import { BaseContext } from 'koa';
import { getRepository } from 'typeorm';

import Post from '../models/Post';
import Comment from '../models/Comment';

const commentController = {
  index: async (ctx: BaseContext) => {
    const { id: postId } = ctx.params;
    const comments = await getRepository(Comment).find({ where: { postId } });
    ctx.body = comments;
  },
  create: async (ctx: BaseContext) => {
    const { id: postId } = ctx.params;
    const post = await getRepository(Post).findOne(postId);
    const { content } = ctx.request.body;
    let comment = new Comment();
    comment.content = content;
    comment.post = post;
    await getRepository(Comment).save(comment);
    ctx.body = comment;
  },
};

export default commentController;
