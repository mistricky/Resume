import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  username!: string;

  @Column()
  age!: number;

  @Column()
  station!: string;

  @Column()
  sex!: string;

  @Column()
  description!: string;

  @Column()
  location!: string;

  @Column()
  telNum!: string;

  @Column()
  email!: string;

  @Column()
  other!: string;
}
