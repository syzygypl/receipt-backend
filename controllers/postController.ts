import { BaseContext } from 'koa';
import { getRepository } from 'typeorm';

import Post from '../models/Post';

const postController = {
  index: async (ctx: BaseContext) => {
    const posts = await getRepository(Post).find();
    ctx.body = posts;
  },
  create: async (ctx: BaseContext) => {
    const { title, content } = ctx.request.body;
    let post = new Post();
    post.title = title;
    post.content = content;
    await getRepository(Post).save(post);
    ctx.body = post;
  },
  show: async (ctx: BaseContext) => {
    const { id } = ctx.params;
    const post = await getRepository(Post).findOne(id, {
      relations: ['comments'],
    });
    ctx.body = post;
  },
  update: async (ctx: BaseContext) => {
    const { id } = ctx.params;
    const post = await getRepository(Post).findOne(id);
    const { title, content } = ctx.request.body;
    post.title = title || post.title;
    post.content = content || post.content;
    const postNew = await getRepository(Post).save(post);
    ctx.body = postNew;
  },
  destroy: async (ctx: BaseContext) => {
    const { id } = ctx.params;
    const post = await getRepository(Post).findOne(id);
    await getRepository(Post).remove(post);
    ctx.body = post;
  },
};

export default postController;
