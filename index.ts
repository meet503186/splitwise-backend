import { app } from "./src/app";
import { connection } from "./src/database/database-config";

connection
  .initialize()
  .then((): void => {
    app.listen(9000, (): void => {
      console.log(`Listening to port ${9000}`);
    });
  })
  .catch((err: any): void => {
    console.log("err =>", err);

    console.log(`db not connected error is = ${err}`);
  });
