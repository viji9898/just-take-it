import express from "express"

import { Message, Good } from "../../../models/index.js"

const messageRouter = express.Router()

messageRouter.get("/", async (req, res) => {
  try {
    const messages = await Message.query().findOne({goodId:1})
    messages.good = await messages.$relatedQuery("Good")
    return res.status(200).json({messages: messages})
  } catch (error) {
    console.log(error);
    return res.status(500).json({errors: error})
  }
})

export default messageRouter