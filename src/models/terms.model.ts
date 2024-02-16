import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Terms extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "mediumtext", nullable: false })
  terms: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
