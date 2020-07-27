import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('plans')
export default class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('integer')
  freeUntil: number
}
