import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameNameField1559993806097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "position" RENAME COLUMN "name1" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "position" RENAME COLUMN "name" TO "name1"`);
    }

}
