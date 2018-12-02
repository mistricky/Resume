import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class Project {
  @PrimaryColumn({name: 'project_name'})
  projectName!: string;

  @Column()
  description!: string;

  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;
}
