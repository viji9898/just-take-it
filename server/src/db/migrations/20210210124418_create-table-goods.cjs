/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("goods", (table) => {
    table.bigIncrements("id").primary()
    table.bigInteger("userId").unsigned().index().notNullable().references("users.id")
    table.string("title").notNullable()
    table.text("description").notNullable()
    table.integer("quantity").notNullable().defaultTo(1)
    table.decimal("locationLat")
    table.decimal("locationLong")
    table.string("image")
    table.boolean("available").notNullable().defaultTo(true)
    table.boolean("withdraw").notNullable().defaultTo(false)
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now()) 
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("goods")
}
