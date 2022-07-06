import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  database: process.env.DB_NAME,
  dialect: 'mysql',
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
};

export = config;
