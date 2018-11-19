import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class HomePage {
  @PrimaryColumn()
  type!: 'github' | 'csdn' | 'other';

  @Column()
  link!: string;

  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;
}
