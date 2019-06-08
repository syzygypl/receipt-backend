import DbNamingStrategy from "./DbNamingStrategy";

export function createDatabaseConf() {
    var dbConf: any = {
        type: 'postgres',
        entities: ['models/*.ts'],
        synchronize: false,
        migrations: ["migrations/*.ts"],
        migrationsTableName: "custom_migration_table",
        cli: {
            migrationsDir: "migrations"
        },
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

