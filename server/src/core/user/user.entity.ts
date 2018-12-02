import {Column, Entity, PrimaryColumn} from 'typeorm';

import {DEFAULT_NUMBER, DEFAULT_STRING} from '../constant';

@Entity()
export class User {
  @PrimaryColumn()
  username!: string;

  @Column()
  password!: string;

  @Column()
  age: number = DEFAULT_NUMBER;

  @Column()
  station: string = DEFAULT_STRING;

  @Column()
  sex: string = DEFAULT_STRING;

  @Column()
  description: string = DEFAULT_STRING;

  @Column()
  location: string = DEFAULT_STRING;

  @Column()
  telNum: string = DEFAULT_STRING;

  @Column()
  email: string = DEFAULT_STRING;

  @Column()
  other: string = DEFAULT_STRING;
}
