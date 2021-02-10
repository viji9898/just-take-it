const Model = require("./Model")

class UserProfile extends Model {
  static get tableName(){
    return "userProfiles"
  }

  static get jsonSchema(){
    return{
      type: "object",
      required:["userName"],
      properties:{
        userId: {type:["string","integer"]},
        userName: {type: "string"},
        locationLat: {type:["string","demical"]},
        locationLong: {type:["string","demical"]},
        admin: {type: "boolean"}
      }
    }
  }
}

module.exports = UserProfile