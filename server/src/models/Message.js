const Model = require("./Model")

class Message extends Model {
  static get tableName(){
    return "messages"
  }

  static get jsonSchema(){
    return{
      type: "object",
      required: ["messageText"],
      properties:{
        messageText: {type: "string"}
      }
    }
  }
  static get relationMappings() {
    const { User, Good } = require("./index")

    return {
      UserSend: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "messages.senderId",
          to: "users.sendId",
        },
      },

      UserReceive: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "messages.receiverId",
          to: "users.receiveId",
        },
      },

      Good: {
        relation: Model.HasManyRelation,
        modelClass: Good,
        join: {
          from: "messages.goodId",
          to: "goods.id",
        },
      },
    }
  }
}

module.exports = Message 