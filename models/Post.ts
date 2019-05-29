import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import Comment from './Comment';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments: Comment[];
}

export default Post;
