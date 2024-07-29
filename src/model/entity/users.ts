import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public firstName!: string;

  @Column()
  public lastName!: string;
  
  @Column()
  public age!: number;

  @Column({default: "Preferred Not To disclose"})
  public gender!: string;

  @Column({ nullable: true })
  public email?: string;
  
  @Column({ nullable: true })
  public profession?: string;
}
