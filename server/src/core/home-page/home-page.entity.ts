import {Column, Entity, JoinColumn, OneToOne} from 'typeorm';

import {User} from '../user';

@Entity()
export class HomePage {
  @Column()
  type!: 'github' | 'csdn' | 'other';

  @Column()
  link!: string;

  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;
}
