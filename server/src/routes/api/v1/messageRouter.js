import express from "express"

import { Message, Good } from "../../../models/index.js"

const messageRouter = express.Router()

messageRouter.get("/", async (req, res) => {
  try {
    // const messages = await Message.query().findOne({goodId:1})
    // messages.good = await messages.$relatedQuery("Good")

  // const messages = await Message.query().where("senderId", req.user.id).where("goodId", req.params.goodId).orWhere("receiverId", req.user.id).orderBy("createdAt", "desc")

  const messages = await Message.query().where(builder => builder.where('senderId', req.user.id).orWhere('receiverId', req.user.id)).orderBy("goodId").orderBy("createdAt", "desc")
  const allGoods = await Good.query()

    return res.status(200).json({messages, allGoods})
  } catch (error) {
    console.log(error);
    return res.status(500).json({errors: error})
  }
})

export default messageRouter