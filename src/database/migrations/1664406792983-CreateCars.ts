import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarss1664406798329 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "daily_raye",
                        type: "numbre",
                    },
                    {
                        name: "available",
                        type: "boolean",
                    },
                    {
                        name: "license_plate",
                        type: "varchar",
                    },
                    {
                        name: "fine_amount",
                        type: "numbre",
                       
                    },
                    {
                        name: "brand",
                        type: "numbre",
                       
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }
}
