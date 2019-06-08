import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateSchema1560005868423 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_c13cce914c772c37d99a8668274"`);
        await queryRunner.query(`CREATE TABLE "selected_position" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "selected_count" integer NOT NULL, "member_uuid" uuid, CONSTRAINT "PK_7aa36edeb27fe4cb419ef00dc9f" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`ALTER TABLE "selected_position" ADD CONSTRAINT "FK_a9578c8d38267e0bc0a58469c0d" FOREIGN KEY ("member_uuid") REFERENCES "member"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_2792bb1337ce4dc14d524649f59" FOREIGN KEY ("event_uuid") REFERENCES "event"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_2792bb1337ce4dc14d524649f59"`);
        await queryRunner.query(`ALTER TABLE "selected_position" DROP CONSTRAINT "FK_a9578c8d38267e0bc0a58469c0d"`);
        await queryRunner.query(`DROP TABLE "selected_position"`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_c13cce914c772c37d99a8668274" FOREIGN KEY ("event_uuid") REFERENCES "event"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
