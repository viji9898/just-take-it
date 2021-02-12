/**
 * @typedef {import("knex")} Knex
 */

const { User } = require("../../models")

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("users", (table) => {
    table.string("userName")
    table.boolean("admin").defaultTo(false)
})
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("users", (table) => {
    table.dropColumn("username")
    table.dropColumn("admin")
  })
}


