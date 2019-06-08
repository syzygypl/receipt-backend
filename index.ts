import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import 'reflect-metadata';

import {createConnection} from 'typeorm';

import {config} from 'dotenv';

import router from './router';
import {createDatabaseConf} from "./config/database";

// load .env file
config();

// global DB connection
createConnection(createDatabaseConf());

// main koa instance
const app = new Koa();

// load body parser needed to get form data
app.use(bodyParser());

// load routes defined in router.ts
app.use(router.routes());
app.use(router.allowedMethods());

// start server
app.listen(process.env.PORT);

console.log(`Server started at localhost:${process.env.PORT}`);

