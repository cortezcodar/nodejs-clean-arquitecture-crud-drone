import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createDrones1604878850049 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // caso esteja com problema por causa do uuid_generate_v4() coloque essa linha.
    // instalar extensão uuid, para usar o "uuid_generate".
    //await queryRunner.query('CREATE EXTENSION IF NOT EXISTS');

    await queryRunner.createTable(new Table({
      name: 'drones',
      columns: [
        {
          name: 'id',
          type: 'int',
          generationStrategy: "increment",
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'customer_image',
          type: 'varchar'
        },
        {
          name: 'customer_name',
          type: 'varchar',
        },
        {
          name: 'customer_address',
          type: 'varchar'
        },
        {
          name: 'battery',
          type: 'float',
        },
        {
          name: 'max_speed',
          type: 'float',
        },
        {
          name: 'average_speed',
          type: 'float',
        },
        {
          name: 'status',
          type: 'varchar',
        },
        {
          name: 'current_fly',
          type: 'float',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('drones');
  }

}
