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
    const { User } = require("./index")

    return {
      UserSend: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "messages.id",
          to: "users.sendId",
        },
      },

      UserReceive: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "messages.id",
          to: "users.receiveId",
        },
      },
    }
  }
}

module.exports = Message 