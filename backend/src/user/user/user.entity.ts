import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Todo } from '../../todo/todo/todo.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  username: string;

  @Column('text', { nullable: true })
  firstname: string;

  @Column('text', { nullable: true })
  lastname: string;

  @Column('text')
  password: string;
}
