import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('prices')
export default class Price {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  from: string;

  @Column('varchar')
  to: string;

  @Column('double')
  value: number;
}
