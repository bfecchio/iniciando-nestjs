import {MigrationInterface, QueryRunner} from "typeorm";

export class createCategoryTable1592427658771 implements MigrationInterface {
    name = 'createCategoryTable1592427658771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `categories` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(180) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `categories`");
    }

}
