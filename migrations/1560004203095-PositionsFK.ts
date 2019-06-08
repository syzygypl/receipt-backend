import {MigrationInterface, QueryRunner} from "typeorm";

export class PositionsFK1560004203095 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "position" ADD "event_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "position" ADD CONSTRAINT "FK_9650a97f3cde8c0d3897473f179" FOREIGN KEY ("event_uuid") REFERENCES "event"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "position" DROP CONSTRAINT "FK_9650a97f3cde8c0d3897473f179"`);
        await queryRunner.query(`ALTER TABLE "position" DROP COLUMN "event_uuid"`);
    }

}
