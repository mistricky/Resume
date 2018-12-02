import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class DescriptionTechnology {
  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;

  @PrimaryColumn({name: 'back_or_front'})
  backOrFront!: 'back' | 'front';

  @Column({name: 'technology_stack'})
  technologyStack!: string;

  @Column({name: 'frame_work'})
  frameWork!: string;

  @Column()
  language!: string;

  @Column()
  utils!: string;
}
