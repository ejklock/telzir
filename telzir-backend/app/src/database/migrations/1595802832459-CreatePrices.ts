import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePrices1595802832459 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prices',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'from',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'to',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'value',
            type: 'double',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prices')
  }
}
