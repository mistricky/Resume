import {Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class Credential {
  @PrimaryColumn()
  credential!: string;

  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;
}
