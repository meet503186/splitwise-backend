import { DataSource } from "typeorm";

export const connection = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "splitwise",
  port: 3306,
  entities: ["./src/models/*.ts"],
  synchronize: true,
});
