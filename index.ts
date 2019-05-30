import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import 'reflect-metadata';

import { createConnection } from 'typeorm';

import { config } from 'dotenv';

import DbNamingStrategy from './config/DbNamingStrategy';

import router from './router';

// load .env file
config();

// global DB connection
createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + '/models/*.ts'],
  synchronize: true,
  namingStrategy: new DbNamingStrategy(),
});

// main koa instance
const app = new Koa();

// load body parser needed to get form data
app.use(bodyParser());

// load routes defined in router.ts
app.use(router.routes());
app.use(router.allowedMethods());

// start server
app.listen(process.env.APP_PORT);

console.log(`Server started at localhost:${process.env.APP_PORT}`);
