import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class Project {
  @PrimaryColumn()
  projectName!: string;

  @Column()
  description!: string;

  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;
}
