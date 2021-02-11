/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("messages", (table) => {
    table.bigIncrements("id").primary()
    table.bigInteger("goodId").unsigned().index().notNullable().references("goods.id")
    table.bigInteger("senderId").unsigned().index().notNullable().references("users.id")
    table.bigInteger("recieverId").unsigned().index().notNullable().references("users.id")
    table.string("messageText").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("messages")
}
