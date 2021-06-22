import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./utils/constants";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "readit_db",
    user: "test",
    password: "test",
    debug: !__prod__,
    type: "postgresql",
    entities: [Post],
  });

 };

main();
