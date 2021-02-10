const Model = require("./Model")

class Good extends Model {
  static get tableName(){
    return "goods"
  }

  static get jsonSchema(){
    return{
      type: "object",
      required: ["title", "description"],
      properties:{
        userId: {type:["string","integer"]},
        title: {type: "string"},
        description: {type: "string"},
        quantity: {type:["string","integer"]},
        locationLat: {type:["string","demical"]},
        locationLong: {type:["string","demical"]},
        image: {type: "string"},
        available: {type: "boolean"},
        withdraw: {type: "boolean"}
      }
    }
  }
}

module.exports = Good 

