import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.string('name').notNullable()
      table.string('valor').notNullable()
      table.string('unidade').notNullable()
      table.string('quantidade').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
