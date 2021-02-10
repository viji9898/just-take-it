/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {  
  return knex.schema.createTable("userProfiles", (table) => {
    table.bigIncrements("id").primary()
    table.bigInteger("userId").unsigned().index().notNullable().references("users.id")
    table.string("userName").notNullable()
    table.decimal("locationLat")
    table.decimal("locationLong")
    table.boolean("admin").notNullable().defaultTo(false)
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
})}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("userProfiles")
}

