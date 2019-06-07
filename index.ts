import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import 'reflect-metadata';

import {createConnection} from 'typeorm';

import {config} from 'dotenv';

import DbNamingStrategy from './config/DbNamingStrategy';

import router from './router';

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

function createDatabaseConf() {
    var dbConf: any = {
        type: 'postgres',
        entities: [__dirname + '/models/*.ts'],
        synchronize: true,
        namingStrategy: new DbNamingStrategy(),
    };

    if (process.env.DATABASE_URL) {
        dbConf.url = process.env.DATABASE_URL;
    } else {
        dbConf.host = process.env.DB_HOST;
        dbConf.port = process.env.DB_PORT;
        dbConf.username = process.env.DB_USER;
        dbConf.password = process.env.DB_PASS;
        dbConf.database = process.env.DB_NAME;
    }
    return dbConf;
}
