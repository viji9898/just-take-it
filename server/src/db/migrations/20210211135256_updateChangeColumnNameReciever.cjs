/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("messages", (table) => {
    table.renameColumn("recieverId", "receiverId")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("trails", (table) => {
    table.renameColumn("receiverId", "recieverId")
  })
}
