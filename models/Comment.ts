import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import Post from './Post';

@Entity()
class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;
}

export default Comment;
