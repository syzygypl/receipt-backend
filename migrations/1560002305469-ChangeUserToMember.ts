import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeUserToMember1560002305469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE IF EXISTS "user" RENAME TO "member";`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE IF EXISTS "member" RENAME TO "user";`);

    }

}
