import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_ENTITIES_DIR,
  DATABASE_MIGRATIONS_DIR,
} = process.env;
const ormConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),

  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,

  synchronize: true,
  entities: [DATABASE_ENTITIES_DIR + "/**/*{.ts,.js}"],
  migrations: [DATABASE_MIGRATIONS_DIR + "/**/*{.ts,.js}"],
  logging: true,
};
export default ormConfig;
