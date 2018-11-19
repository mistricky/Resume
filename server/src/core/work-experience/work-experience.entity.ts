import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class WorkExperience {
  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;

  @PrimaryColumn()
  company!: string;

  @Column()
  since!: number;

  @Column()
  beginTime!: Date;

  @Column()
  endTime!: Date;

  @Column()
  station!: string;

  @Column()
  department!: string;
}
