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

  static get relationMappings() {
    const { Message, User } = require("./index")

    return {
      messages: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: "goods.id",
          to: "messages.goodId",
        },
      },

      // user: {
      //   relation: Model.HasOneRelation,
      //   modelClass: User,
      //   join: {
      //     from: "goods.userId",
      //     to: "user.id",
      //   },
      // }
    }
  }
}

module.exports = Good 

