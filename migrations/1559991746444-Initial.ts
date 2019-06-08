import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1559991746444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "event_uuid" uuid, CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "position" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name1" character varying NOT NULL, "count" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_19acb1fcad3fa39168021d5905b" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "event" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "account" character varying NOT NULL, "image_url" character varying, CONSTRAINT "PK_d2ea43d0ee94369479bfbbfff42" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c13cce914c772c37d99a8668274" FOREIGN KEY ("event_uuid") REFERENCES "event"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c13cce914c772c37d99a8668274"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "position"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
