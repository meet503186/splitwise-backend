import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  AfterInsert,
} from "typeorm";
import { encryptData } from "../utils/helper";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", nullable: false })
  email: string;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @Column({ type: "varchar", nullable: true, default: null })
  token: string;

  @AfterInsert()
  async setToken() {
    this.token = encryptData(
      JSON.stringify({ id: this.id, email: this.email })
    );
    this.save();
  }
}
