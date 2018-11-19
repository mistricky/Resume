import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class DescriptionTechnology {
  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;

  @PrimaryColumn()
  backOrFront!: 'back' | 'front';

  @Column()
  technologyStack!: string;

  @Column()
  frameWork!: string;

  @Column()
  language!: string;

  @Column()
  utils!: string;
}
