import { Request, Response } from "express";
import { connection } from "../database/database-config";

export const DbController = {
  getTableList: async (req: Request, res: Response) => {
    try {
      const tables = await connection.query("show tables");
      return res.send(tables);
    } catch (error) {
      console.log(error);
    }
  },
  createTable: async (req: Request, res: Response) => {
    try {
      const { tableName } = req.body;
      const isCreated = await connection.query(`create table ${tableName}`);

      if (!isCreated) {
        throw new Error("Table not created");
      }

      res.status(200).send(`${tableName} created successfully!`);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
